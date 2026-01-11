import React, { Suspense } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Benefits } from './components/sections/Benefits';
import { Uses } from './components/sections/Uses';
import { Availability } from './components/sections/Availability';
import { Order } from './components/sections/Order';
import { Footer } from './components/layout/Footer';
import { Canvas } from '@react-three/fiber';
import { Scene } from './components/3d/Scene';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-earth-50 text-nature-900 selection:bg-nature-200 selection:text-nature-900">
      {/* Background 3D Layer - Fixed behind content */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 35 }}
          gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
          dpr={[1, 2]}
          className="w-full h-full"
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <Navbar />

      {/* Main Content - Scrollable */}
      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Benefits />
        <Uses />
        <Availability />
        <Order />
      </main>

      <Footer />
    </div>
  );
}

export default App;
