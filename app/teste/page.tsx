'use client'

import ProjectImage from "@/components/project-image"
import Image from 'next/image';
import { useRef, useEffect } from 'react';
const Teste = () => {

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  let scrollInterval: NodeJS.Timeout | null = null;

  const startScrolling = () => {
    if (scrollInterval) return; // Evita múltiplos intervalos

    scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop += 2; // Velocidade do scroll
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
      className={"overflow-auto h-[20rem] grayscale hover:grayscale-0 scrollbar-hidden hover:cursor-pointer" }
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
