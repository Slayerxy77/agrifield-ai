import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FarmTerrain({ opacity = 1, droneRotationSpeed = 1 }) {
  const droneRef = useRef();
  const propellersRef = useRef([]);

  useFrame((state, delta) => {
    if (droneRef.current) {
      droneRef.current.rotation.y += delta * 0.4 * droneRotationSpeed;
      droneRef.current.position.y = 1.6 + Math.sin(state.clock.elapsedTime * 2) * 0.15;
    }
  });

  return (
    <group position={[0, -2, 0]}>
      {/* Soil Base Landscape */}
      <mesh receiveShadow position={[0, -0.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[24, 24, 24, 24]} />
        <meshStandardMaterial
          color="#1B4332"
          roughness={0.8}
          wireframe={false}
          flatShading
          transparent
          opacity={opacity}
        />
      </mesh>

      {/* Grid Crop Rows */}
      {Array.from({ length: 9 }).map((_, i) => (
        <group key={i} position={[(i - 4) * 2, 0, 0]}>
          <mesh position={[0, -0.2, 0]}>
            <boxGeometry args={[1.2, 0.25, 18]} />
            <meshStandardMaterial color="#2D6A4F" flatShading transparent opacity={opacity} />
          </mesh>
          {/* Low-Poly Crop Sprouts */}
          {Array.from({ length: 8 }).map((_, j) => (
            <mesh key={j} position={[0, 0.2, (j - 3.5) * 2]} rotation={[0, Math.PI / 4, 0]}>
              <coneGeometry args={[0.3, 0.6, 4]} />
              <meshStandardMaterial color="#40916C" flatShading transparent opacity={opacity} />
            </mesh>
          ))}
        </group>
      ))}

      {/* Center Drone Hologram */}
      <group ref={droneRef} position={[0, 1.6, 0]}>
        {/* Drone Body Frame */}
        <mesh>
          <boxGeometry args={[0.8, 0.15, 0.8]} />
          <meshStandardMaterial color="#B9FBC0" emissive="#40916C" emissiveIntensity={0.5} roughness={0.2} />
        </mesh>
        {/* Drone Arms */}
        <mesh rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[1.8, 0.08, 0.08]} />
          <meshStandardMaterial color="#2D6A4F" />
        </mesh>
        <mesh rotation={[0, -Math.PI / 4, 0]}>
          <boxGeometry args={[1.8, 0.08, 0.08]} />
          <meshStandardMaterial color="#2D6A4F" />
        </mesh>

        {/* 4 Rotors & Scanning Hologram Ring */}
        {[-0.6, 0.6].map((x) =>
          [-0.6, 0.6].map((z) => (
            <group key={`${x}-${z}`} position={[x, 0.1, z]}>
              <mesh>
                <cylinderGeometry args={[0.25, 0.25, 0.02, 12]} />
                <meshStandardMaterial color="#74C69D" transparent opacity={0.7} />
              </mesh>
              {/* Rotor LED */}
              <pointLight color="#B9FBC0" intensity={1.5} distance={1.5} />
            </group>
          ))
        )}

        {/* Downward Scan Light Cone */}
        <mesh position={[0, -0.8, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[1.2, 1.6, 16, 1, true]} />
          <meshBasicMaterial color="#B9FBC0" transparent opacity={0.25} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );
}
