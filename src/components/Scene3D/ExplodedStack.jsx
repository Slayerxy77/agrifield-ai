import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ExplodedStack({ visible = true, progress = 0 }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current && visible) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3 + 0.4;
    }
  });

  if (!visible) return null;

  // Separation distance between layer panels based on scroll progress (0 = stacked, 1 = exploded diagram)
  const separation = 0.4 + progress * 1.4;

  const layers = [
    { name: '1. Frontend (Flutter/React UI)', color: '#74C69D', y: 2 * separation },
    { name: '2. AI / Computer Vision (PyTorch/TFLite)', color: '#B9FBC0', y: 1 * separation },
    { name: '3. Backend API (FastAPI & Node)', color: '#52B788', y: 0 },
    { name: '4. Hardware / Edge (ESP32 & Sensors)', color: '#FFB703', y: -1 * separation },
    { name: '5. Database & Cloud (PostgreSQL / AWS)', color: '#7F5539', y: -2 * separation },
  ];

  return (
    <group ref={groupRef} position={[0, 0, 0]} rotation={[0.3, 0.4, 0]}>
      {layers.map((layer, idx) => (
        <group key={idx} position={[0, layer.y, 0]}>
          {/* Glass Layer Panel */}
          <mesh receiveShadow castShadow>
            <boxGeometry args={[4.8, 0.12, 3.2]} />
            <meshPhysicalMaterial
              color={layer.color}
              transmission={0.7}
              opacity={0.8}
              transparent
              roughness={0.2}
              metalness={0.3}
              ior={1.3}
            />
          </mesh>

          {/* Panel Glowing Rim Border */}
          <mesh>
            <boxGeometry args={[4.85, 0.05, 3.25]} />
            <meshBasicMaterial color={layer.color} wireframe />
          </mesh>

          {/* Connecting Pillar Guides (Exploded Diagram Pins) */}
          {[-2.2, 2.2].map((x) =>
            [-1.4, 1.4].map((z) => (
              <mesh key={`${x}-${z}`} position={[x, -separation / 2, z]}>
                <cylinderGeometry args={[0.02, 0.02, separation, 8]} />
                <meshBasicMaterial color="#B9FBC0" transparent opacity={0.3} />
              </mesh>
            ))
          )}
        </group>
      ))}
    </group>
  );
}
