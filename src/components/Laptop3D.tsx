import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Environment, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

interface LaptopScreenContentProps {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

const LaptopScreenContent = ({ activeTab, setActiveTab }: LaptopScreenContentProps) => {
  const tabs = ["Code", "Terminal", "Preview"];
  
  const codeContent = `import { useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="app">
      <h1>Welcome to Advora</h1>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
    </div>
  );
}`;

  const terminalContent = `$ npm run dev

> advora-app@1.0.0 dev
> vite

  VITE v5.0.0  ready in 312 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.1.100:5173/
  ➜  press h + enter to show help

✓ 42 modules transformed.
✓ Built in 1.2s`;

  const previewContent = (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="text-center">
        <h2 className="text-lg font-bold text-slate-800 mb-2">Welcome to Advora</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
          Count: 0
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full bg-slate-900 text-white font-mono text-[10px] overflow-hidden flex flex-col select-none">
      {/* Tab Bar */}
      <div className="flex bg-slate-800 border-b border-slate-700">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`px-3 py-1.5 text-[9px] transition-colors ${
              activeTab === i 
                ? "bg-slate-900 text-white border-b-2 border-blue-400" 
                : "text-slate-400 hover:text-white hover:bg-slate-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {activeTab === 0 && (
          <pre className="p-2 text-[8px] leading-relaxed overflow-hidden">
            <code>
              {codeContent.split('\n').map((line, i) => (
                <div key={i} className="flex">
                  <span className="text-slate-600 w-4 text-right mr-2">{i + 1}</span>
                  <span className="text-slate-300">{line}</span>
                </div>
              ))}
            </code>
          </pre>
        )}
        {activeTab === 1 && (
          <pre className="p-2 text-[8px] leading-relaxed text-green-400 overflow-hidden whitespace-pre-wrap">
            {terminalContent}
          </pre>
        )}
        {activeTab === 2 && previewContent}
      </div>
    </div>
  );
};

function LaptopModel() {
  const groupRef = useRef<THREE.Group>(null);
  const [activeTab, setActiveTab] = useState(0);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      // Subtle rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05 - 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]} rotation={[0.1, -0.2, 0]}>
      {/* Laptop Base */}
      <mesh position={[0, 0, 0.3]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[2.4, 1.6, 0.08]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Keyboard area */}
      <mesh position={[0, 0.045, 0.3]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[2.2, 1.4, 0.02]} />
        <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.4} />
      </mesh>
      
      {/* Trackpad */}
      <mesh position={[0, 0.05, 0.7]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.8, 0.5, 0.01]} />
        <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Screen Frame */}
      <group position={[0, 0.85, -0.45]} rotation={[0.3, 0, 0]}>
        <mesh>
          <boxGeometry args={[2.5, 1.7, 0.08]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Screen Bezel */}
        <mesh position={[0, 0, 0.041]}>
          <boxGeometry args={[2.3, 1.5, 0.01]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        
        {/* Screen Content */}
        <Html
          transform
          occlude
          position={[0, 0, 0.05]}
          scale={0.12}
          style={{
            width: '280px',
            height: '180px',
            borderRadius: '4px',
            overflow: 'hidden'
          }}
        >
          <LaptopScreenContent activeTab={activeTab} setActiveTab={setActiveTab} />
        </Html>
      </group>
      
      {/* Hinge */}
      <mesh position={[0, 0.04, -0.5]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 2.3, 16]} />
        <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

export default function Laptop3D() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0.5, 3]} fov={45} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <directionalLight position={[-3, 3, 2]} intensity={0.5} />
        <pointLight position={[0, 2, 0]} intensity={0.3} color="#60a5fa" />
        <Environment preset="city" />
        <LaptopModel />
      </Canvas>
    </div>
  );
}
