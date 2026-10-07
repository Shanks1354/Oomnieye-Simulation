import { useEffect, useRef } from 'react';
import './ScrollAnimation.css';
import { TopHeroSection } from './components/TopHeroSection';
import { Hero } from './components/Hero';
import { ShowcaseSection } from './components/ShowcaseSection';
import { CenterTextSection } from './components/CenterTextSection';
import { ProjectsSection } from './components/ProjectsSection';

export default function ScrollAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;

    const frameCount = 300;
    const currentFrame = (index: number) => (
      `${import.meta.env.BASE_URL}frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
    );

    // Preload images
    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };
    preloadImages();

    const img = new Image();
    img.src = currentFrame(1); // Start with the first frame in the sequence
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index: number) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    };

    const handleScroll = () => {
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate how far we've scrolled inside the container
      let scrollFraction = 0;
      
      if (containerTop <= 0) {
        // Container has reached the top of the viewport
        const scrolledDistance = -containerTop;
        const totalScrollableDistance = containerHeight - windowHeight;
        
        scrollFraction = scrolledDistance / totalScrollableDistance;
      }
      
      scrollFraction = Math.max(0, Math.min(1, scrollFraction));
      
      // Ensure the very last frames are guaranteed to trigger when near the bottom
      if (containerTop + containerHeight - windowHeight <= 10) {
        scrollFraction = 1;
      }

      const frameIndex = Math.min(
        frameCount,
        Math.max(1, Math.round(scrollFraction * (frameCount - 1)) + 1)
      );
      
      requestAnimationFrame(() => updateImage(frameIndex));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // init

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-animation-container" ref={containerRef}>
      <div className="canvas-wrapper pointer-events-none">
        <canvas ref={canvasRef} />
      </div>
      <div className="absolute top-0 left-0 w-full flex flex-col justify-between" style={{ height: '100%' }}>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <TopHeroSection />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Hero />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <ShowcaseSection />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <CenterTextSection />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <ProjectsSection />
        </div>
      </div>
    </div>
  );
}
