import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function AerialFarmPins({ visible = true, progress = 0 }) {
  const mapRef = useRef();

  useFrame((state, delta) => {
    if (mapRef.current && visible) {
      mapRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  if (!visible) return null;

  // 4 Pin markers that reveal sequentially based on scroll progress (0 to 1)
  const pins = [
    { title: 'Offline AI Diagnostics', pos: [-3, 0.6, -2], activeAt: 0.1 },
    { title: 'Dosage Calculator', pos: [2.5, 0.6, -3], activeAt: 0.35 },
    { title: 'Micro-Weather Warning', pos: [-2, 0.6, 2], activeAt: 0.6 },
    { title: 'Mandi Price Linkage', pos: [3, 0.6, 2], activeAt: 0.85 },
  ];

  return (
    <group ref={mapRef} position={[0, -1, 0]}>
      {/* Aerial Farm Grid Base */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[16, 16, 16, 16]} />
        <meshStandardMaterial color="#1B4332" roughness={0.9} flatShading />
      </mesh>

      {/* Grid Fields & Canals */}
      {[-4, 0, 4].map((x) =>
        [-4, 0, 4].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, 0.05, z]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[3.6, 3.6]} />
            <meshStandardMaterial color="#2D6A4F" flatShading />
          </mesh>
        ))
      )}

      {/* Interactive Glowing Pins */}
      {pins.map((pin, i) => {
        const isActive = progress >= pin.activeAt;
        return (
          <group key={i} position={pin.pos}>
            {/* Pin Stem */}
            <mesh position={[0, 0.8, 0]}>
              <cylinderGeometry args={[0.04, 0.04, 1.6, 8]} />
              <meshStandardMaterial
                color={isActive ? '#B9FBC0' : '#40916C'}
                emissive={isActive ? '#B9FBC0' : '#000000'}
                emissiveIntensity={isActive ? 0.8 : 0}
              />
            </mesh>

            {/* Pin Head Bulb */}
            <mesh position={[0, 1.7, 0]}>
              <sphereGeometry args={[0.4, 16, 16]} />
              <meshStandardMaterial
                color={isActive ? '#FFB703' : '#2D6A4F'}
                emissive={isActive ? '#FFB703' : '#000000'}
                emissiveIntensity={isActive ? 1.2 : 0}
              />
            </mesh>

            {/* Glowing Beacon Wave */}
            {isActive && (
              <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.2, 0.8, 24]} />
                <meshBasicMaterial color="#B9FBC0" transparent opacity={0.6} />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
}
