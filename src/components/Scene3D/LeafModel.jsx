import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function LeafModel({ diseaseProgress = 0, scanProgress = 0, scanActive = false }) {
  const leafRef = useRef();
  const scanLineRef = useRef();

  useFrame((state, delta) => {
    if (leafRef.current) {
      // Gentle idle wobble
      leafRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
      leafRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 1.2) * 0.05;
    }

    if (scanLineRef.current && scanActive) {
      // Position laser scan line vertically along the leaf length (-1.8 to 1.8)
      const yPos = 1.6 - scanProgress * 3.2;
      scanLineRef.current.position.y = yPos;
    }
  });

  // Calculate dynamic colors based on disease progress vs scan recovery progress
  // Effective disease is reduced as scan progresses
  const effectiveDisease = Math.max(0, diseaseProgress - scanProgress * 1.2);
  
  const healthyColor = new THREE.Color('#40916C');
  const diseasedColor = new THREE.Color('#7F5539');
  const currentColor = healthyColor.clone().lerp(diseasedColor, effectiveDisease);

  return (
    <group ref={leafRef} position={[0, 0, 0]}>
      {/* Central Leaf Surface Mesh */}
      <mesh castShadow receiveShadow>
        <coneGeometry args={[1.4, 3.4, 24, 16]} />
        <meshStandardMaterial
          color={currentColor}
          roughness={0.4}
          metalness={0.1}
          flatShading={false}
          bumpScale={0.05}
        />
      </mesh>

      {/* Leaf Vein Structure (Glow lines) */}
      <mesh position={[0, 0, 0.08]}>
        <cylinderGeometry args={[0.04, 0.08, 3.5, 8]} />
        <meshStandardMaterial
          color={effectiveDisease > 0.4 ? '#FFB703' : '#B9FBC0'}
          emissive={effectiveDisease > 0.4 ? '#FFB703' : '#74C69D'}
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Disease Spots (Visible when diseased) */}
      {effectiveDisease > 0.05 && (
        <group position={[0, 0, 0.2]}>
          {[
            { pos: [-0.4, 0.6, 0.5], scale: 0.25 },
            { pos: [0.3, -0.2, 0.6], scale: 0.3 },
            { pos: [-0.2, -0.7, 0.4], scale: 0.22 },
            { pos: [0.4, 0.8, 0.3], scale: 0.18 },
          ].map((spot, idx) => (
            <mesh key={idx} position={spot.pos} scale={spot.scale * (0.4 + effectiveDisease * 0.8)}>
              <sphereGeometry args={[1, 12, 12]} />
              <meshStandardMaterial
                color="#5C3A21"
                emissive="#D4A373"
                emissiveIntensity={0.2 * effectiveDisease}
                roughness={0.9}
              />
            </mesh>
          ))}
        </group>
      )}

      {/* Laser Scan Grid Sweeper Line */}
      {scanActive && (
        <group ref={scanLineRef} position={[0, 0, 0]}>
          {/* Laser Line */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.03, 0.03, 3.2, 16]} />
            <meshBasicMaterial color="#B9FBC0" />
          </mesh>

          {/* Laser Glow Plane */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <planeGeometry args={[3.2, 0.4]} />
            <meshBasicMaterial
              color="#B9FBC0"
              transparent
              opacity={0.5}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Dynamic Scan Light Source */}
          <pointLight color="#B9FBC0" intensity={3} distance={2.5} />
        </group>
      )}
    </group>
  );
}
