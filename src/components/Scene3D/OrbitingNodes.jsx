import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function OrbitingNodes({ visible = true, progress = 0 }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current && visible) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  if (!visible) return null;

  // Triangular node coordinates with radius expanding on scroll progress
  const radius = 3.2 + progress * 0.5;

  const nodes = [
    {
      title: 'Deep Learning Engine',
      subtitle: 'MobileNetV3 Offline CV',
      color: '#B9FBC0',
      pos: [Math.cos(0) * radius, 0, Math.sin(0) * radius],
      type: 'chip',
    },
    {
      title: 'IoT Edge Gateway',
      subtitle: 'ESP32 & LoRaWAN',
      color: '#40916C',
      pos: [Math.cos((2 * Math.PI) / 3) * radius, 0, Math.sin((2 * Math.PI) / 3) * radius],
      type: 'sensor',
    },
    {
      title: 'Vernacular AI Advisor',
      subtitle: 'Multilingual LLM Voice Bot',
      color: '#FFB703',
      pos: [Math.cos((4 * Math.PI) / 3) * radius, 0, Math.sin((4 * Math.PI) / 3) * radius],
      type: 'mic',
    },
  ];

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Connecting Hologram Triangular Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius - 0.05, radius + 0.05, 32]} />
        <meshBasicMaterial color="#B9FBC0" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>

      {nodes.map((node, i) => (
        <group key={i} position={node.pos}>
          {/* Node Container Sphere */}
          <mesh>
            <sphereGeometry args={[0.6, 24, 24]} />
            <meshStandardMaterial
              color="#1B4332"
              roughness={0.2}
              metalness={0.7}
              emissive={node.color}
              emissiveIntensity={0.3}
            />
          </mesh>

          {/* Node Inner Icon Representation */}
          {node.type === 'chip' && (
            <mesh position={[0, 0, 0.65]}>
              <boxGeometry args={[0.5, 0.5, 0.1]} />
              <meshStandardMaterial color="#B9FBC0" emissive="#B9FBC0" emissiveIntensity={0.8} />
            </mesh>
          )}

          {node.type === 'sensor' && (
            <mesh position={[0, 0.4, 0]}>
              <cylinderGeometry args={[0.06, 0.06, 0.7, 12]} />
              <meshStandardMaterial color="#40916C" emissive="#74C69D" emissiveIntensity={0.8} />
            </mesh>
          )}

          {node.type === 'mic' && (
            <mesh position={[0, 0, 0.65]}>
              <sphereGeometry args={[0.25, 16, 16]} />
              <meshStandardMaterial color="#FFB703" emissive="#FFB703" emissiveIntensity={0.8} />
            </mesh>
          )}

          {/* Node Glowing Light */}
          <pointLight color={node.color} intensity={2} distance={3} />
        </group>
      ))}
    </group>
  );
}
