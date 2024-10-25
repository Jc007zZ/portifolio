'use client'

import { useRef, useEffect } from 'react';
import Image from 'next/image';

interface ScrollOnHoverProps {
  e: {
    image: string;
    title: string;
  };
}

const Teste: React.FC<ScrollOnHoverProps> = ({ e }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  let scrollInterval: NodeJS.Timeout | null = null;

  const startScrolling = () => {
    if (scrollInterval) return; // Evita múltiplos intervalos

    scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop += 1; // Velocidade do scroll
      }
    }, 30); // Tempo entre os scrolls
  };

  const stopScrolling = () => {
    if (scrollContainerRef.current){
      scrollContainerRef.current.scrollTop = 0;
    }
    if (scrollInterval) {
      clearInterval(scrollInterval);
      scrollInterval = null;
    }
  };



  return (
    <div
      className="overflow-auto h-[20rem] grayscale hover:grayscale-0 scrollbar-hidden"
      ref={scrollContainerRef}
      onMouseEnter={startScrolling}
      onMouseLeave={stopScrolling}
    >
      <Image
        src={"/project-images/cobalt.png"}
        alt={"teste"}
        width={500}
        height={0}
      />
    </div>
  );
};

export default Teste;
