import React from 'react';
import * as THREE from 'three';

export default function SmartphoneModel({ visible = true, scanActive = false }) {
  if (!visible) return null;

  return (
    <group position={[0, 0, 0]}>
      {/* Phone Outer Chassis */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[3.2, 5.8, 0.22]} />
        <meshStandardMaterial
          color="#0B1D16"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Screen Frame Bezel */}
      <mesh position={[0, 0, 0.12]}>
        <boxGeometry args={[3.0, 5.5, 0.02]} />
        <meshStandardMaterial
          color="#1B4332"
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>

      {/* Translucent Glass Viewport (Cutout for scanning leaf) */}
      <mesh position={[0, 0, 0.14]}>
        <planeGeometry args={[2.8, 5.2]} />
        <meshPhysicalMaterial
          color="#40916C"
          transmission={0.85}
          opacity={0.3}
          transparent
          roughness={0.1}
          ior={1.4}
        />
      </mesh>

      {/* Camera Notch / Sensor Bar */}
      <mesh position={[0, 2.45, 0.16]}>
        <boxGeometry args={[0.9, 0.18, 0.04]} />
        <meshStandardMaterial color="#000000" roughness={0.1} />
      </mesh>

      {/* Glowing Viewfinder HUD Corners */}
      {scanActive && (
        <group position={[0, 0, 0.18]}>
          {[
            { pos: [-1.2, 2.2, 0], rot: [0, 0, 0] },
            { pos: [1.2, 2.2, 0], rot: [0, 0, -Math.PI / 2] },
            { pos: [-1.2, -2.2, 0], rot: [0, 0, Math.PI / 2] },
            { pos: [1.2, -2.2, 0], rot: [0, 0, Math.PI] },
          ].map((corner, idx) => (
            <group key={idx} position={corner.pos} rotation={corner.rot}>
              <mesh position={[0.2, 0, 0]}>
                <boxGeometry args={[0.5, 0.06, 0.02]} />
                <meshBasicMaterial color="#B9FBC0" />
              </mesh>
              <mesh position={[0, -0.2, 0]}>
                <boxGeometry args={[0.06, 0.5, 0.02]} />
                <meshBasicMaterial color="#B9FBC0" />
              </mesh>
            </group>
          ))}
        </group>
      )}
    </group>
  );
}
