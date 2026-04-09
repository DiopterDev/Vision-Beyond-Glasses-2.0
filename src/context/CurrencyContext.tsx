import React, { createContext, useContext, useState, useEffect } from 'react';

interface CurrencyContextType {
  currency: string;
  symbol: string;
  exchangeRate: number;
  formatPrice: (priceNPR: number) => string;
  isLoading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState('NPR');
  const [symbol, setSymbol] = useState('Rs.');
  const [exchangeRate, setExchangeRate] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectCurrencyAndRate = async () => {
      setIsLoading(true);
      let userCurrency = 'NPR';
      let rates: Record<string, number> = { 'NPR': 1 };

      try {
        // 1. Detect user's currency based on IP
        // Use a 3-second timeout for IP detection
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        
        try {
          const ipResponse = await fetch('https://ipapi.co/json/', { signal: controller.signal });
          if (ipResponse.ok) {
            const ipData = await ipResponse.json();
            userCurrency = ipData.currency || 'NPR';
          }
        } catch (e) {
          console.warn('IP-based currency detection failed, defaulting to NPR:', e);
        } finally {
          clearTimeout(timeoutId);
        }
        
        // 2. Fetch exchange rates relative to NPR
        try {
          const rateResponse = await fetch(`https://open.er-api.com/v6/latest/NPR`);
          if (rateResponse.ok) {
            const rateData = await rateResponse.json();
            if (rateData.result === 'success' && rateData.rates) {
              rates = rateData.rates;
            }
          }
        } catch (e) {
          console.error('Exchange rate fetch failed:', e);
        }

        // 3. Apply the detected currency and rate
        if (rates[userCurrency]) {
          setCurrency(userCurrency);
          setExchangeRate(rates[userCurrency]);
          
          // Set symbol based on currency
          try {
            const formatter = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: userCurrency,
            });
            const parts = formatter.formatToParts(0);
            const symbolPart = parts.find(part => part.type === 'currency');
            setSymbol(symbolPart ? symbolPart.value : userCurrency);
          } catch (e) {
            setSymbol(userCurrency);
          }
        } else {
          // Fallback to NPR if the detected currency isn't in the rates list
          setCurrency('NPR');
          setExchangeRate(1);
          setSymbol('Rs.');
        }
      } catch (error) {
        console.error('Unexpected error in currency detection:', error);
        // Final fallback
        setCurrency('NPR');
        setExchangeRate(1);
        setSymbol('Rs.');
      } finally {
        setIsLoading(false);
      }
    };

    detectCurrencyAndRate();
  }, []);

  const formatPrice = (priceNPR: number) => {
    const convertedPrice = priceNPR * exchangeRate;
    
    // For NPR, keep the Rs. prefix as requested
    if (currency === 'NPR') {
      return `Rs. ${priceNPR.toLocaleString()}`;
    }

    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currency,
    }).format(convertedPrice);
  };

  return (
    <CurrencyContext.Provider value={{ currency, symbol, exchangeRate, formatPrice, isLoading }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
