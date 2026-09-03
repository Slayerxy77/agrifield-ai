import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import MainScene from './Scene3D/MainScene';

export default function CanvasContainer({ scrollProgress, activeSection, reducedMotion }) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full bg-[#081C15]">
      <Canvas
        camera={{ position: [0, 3, 9], fov: 45, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <MainScene
            scrollProgress={scrollProgress}
            activeSection={activeSection}
            reducedMotion={reducedMotion}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
