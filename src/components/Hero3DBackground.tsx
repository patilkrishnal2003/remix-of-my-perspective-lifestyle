import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function FloatingShape({ position, scale, speed, distort, color }: { 
  position: [number, number, number]; 
  scale: number; 
  speed: number;
  distort: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.6}
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function FloatingSphere({ position, scale, speed, color }: { 
  position: [number, number, number]; 
  scale: number; 
  speed: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.1;
    }
  });

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.4}
          distort={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus({ position, scale, speed, color }: { 
  position: [number, number, number]; 
  scale: number; 
  speed: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.15;
    }
  });

  return (
    <Float speed={speed * 0.7} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.4, 16, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.5}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const count = 50;
  const particlesRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#3b82f6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
      
      {/* Main floating shapes */}
      <FloatingShape 
        position={[-4, 2, -3]} 
        scale={1.2} 
        speed={0.8} 
        distort={0.4}
        color="#3b82f6"
      />
      <FloatingShape 
        position={[4, -1, -4]} 
        scale={0.9} 
        speed={0.6} 
        distort={0.3}
        color="#60a5fa"
      />
      <FloatingSphere 
        position={[3, 3, -5]} 
        scale={0.7} 
        speed={1}
        color="#93c5fd"
      />
      <FloatingSphere 
        position={[-3, -2, -4]} 
        scale={0.5} 
        speed={0.9}
        color="#3b82f6"
      />
      <FloatingTorus 
        position={[5, 0, -6]} 
        scale={0.6} 
        speed={0.5}
        color="#60a5fa"
      />
      <FloatingTorus 
        position={[-5, 1, -5]} 
        scale={0.4} 
        speed={0.7}
        color="#93c5fd"
      />
      
      {/* Particle field for depth */}
      <ParticleField />
    </>
  );
}

export default function Hero3DBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}