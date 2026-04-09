import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment, 
  Float, 
  MeshDistortMaterial, 
  MeshWobbleMaterial,
  ContactShadows,
  Text,
  Html
} from '@react-three/drei';
import * as THREE from 'three';

interface Tool3DViewerProps {
  toolName: string;
}

const VisuMax800Model = () => {
  const group = useRef<THREE.Group>(null);
  
  // Simple animation
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* Base Console */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[2, 0.5, 2]} />
        <meshStandardMaterial color="#f0f0f0" roughness={0.1} metalness={0.8} />
      </mesh>
      
      {/* Main Body */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1.5, 2.5, 1.5]} />
        <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.5} />
      </mesh>
      
      {/* Laser Arm */}
      <group position={[0, 1.5, 0.5]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.5]}>
          <cylinderGeometry args={[0.2, 0.2, 1.5]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>
        
        {/* Laser Head */}
        <mesh position={[0, -0.2, 1.2]}>
          <cylinderGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
        </mesh>
        
        {/* Laser Beam (Decorative) */}
        <mesh position={[0, -1, 1.2]}>
          <cylinderGeometry args={[0.02, 0.02, 1.5]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.4} />
        </mesh>
      </group>
      
      {/* Patient Bed (Simplified) */}
      <mesh position={[0, -0.5, 2.5]}>
        <boxGeometry args={[1.2, 0.3, 3]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* ZEISS Logo Placeholder */}
      <Text
        position={[0, 1.8, 0.76]}
        fontSize={0.2}
        color="#005696"
        anchorX="center"
        anchorY="middle"
      >
        ZEISS
      </Text>
    </group>
  );
};

const MEL90Model = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.cos(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* Main Console */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.8, 3, 1.2]} />
        <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.5} />
      </mesh>
      
      {/* Control Panel */}
      <mesh position={[0, 1.2, 0.61]}>
        <boxGeometry args={[1.4, 0.8, 0.05]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      
      {/* Delivery Arm */}
      <group position={[0, 0.5, 0.6]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.4]}>
          <cylinderGeometry args={[0.15, 0.15, 0.8]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>
        
        {/* Microscope/Laser Head */}
        <mesh position={[0, 0, 0.8]}>
          <boxGeometry args={[0.6, 0.6, 0.4]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* Eyepieces */}
        <mesh position={[-0.15, 0.3, 0.8]} rotation={[0.3, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.3]} />
          <meshStandardMaterial color="#334155" />
        </mesh>
        <mesh position={[0.15, 0.3, 0.8]} rotation={[0.3, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.3]} />
          <meshStandardMaterial color="#334155" />
        </mesh>
      </group>
      
      {/* ZEISS Logo Placeholder */}
      <Text
        position={[0, 2, 0.61]}
        fontSize={0.2}
        color="#005696"
        anchorX="center"
        anchorY="middle"
      >
        ZEISS MEL 90
      </Text>
    </group>
  );
};

const Tool3DViewer: React.FC<Tool3DViewerProps> = ({ toolName }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full h-full min-h-[400px] bg-slate-950 rounded-3xl overflow-hidden relative border border-white/10">
      <div className="absolute top-6 left-6 z-10">
        <h3 className="text-white font-bold text-xl">{toolName} 3D Explorer</h3>
        <p className="text-white/60 text-sm">Drag to rotate {isMobile ? '' : '• Scroll to zoom'}</p>
      </div>
      
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[5, 3, 5]} fov={40} />
        <OrbitControls 
          enablePan={false} 
          enableZoom={!isMobile}
          minDistance={4} 
          maxDistance={10}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={
          <Html center>
            <div className="text-white font-mono text-sm animate-pulse">LOADING 3D MODEL...</div>
          </Html>
        }>
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            {toolName.includes('VisuMax') ? <VisuMax800Model /> : <MEL90Model />}
          </Float>
          
          <ContactShadows 
            position={[0, -1.5, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2} 
            far={4.5} 
          />
          
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      
      <div className="absolute bottom-6 right-6 z-10 flex gap-2">
        <div className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest">
          High Precision
        </div>
        <div className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-bold text-white/80 uppercase tracking-widest">
          Interactive
        </div>
      </div>
    </div>
  );
};

export default Tool3DViewer;
