'use client'

import { useRef, } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";
interface ScrollOnHoverProps   {
    src: any;
    className?: string;
    run?: any
}

 const ProcjtImage: React.FC<ScrollOnHoverProps> = ({ src, className, ...props }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  let scrollInterval: NodeJS.Timeout | null = null;

  const startScrolling = () => {
    if (scrollInterval) return; 
    scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop += 2;
      }
    }, 30);
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
      className={ cn("overflow-auto h-[20rem] grayscale hover:grayscale-0 scrollbar-hidden", className) }
      ref={scrollContainerRef}
      onMouseEnter={startScrolling}
      onMouseLeave={stopScrolling}
      {...props}
    >
      <Image
        src={src}
        alt={"teste"}
        width={500}
        height={0}
      />
    </div>
  );
};

export default ProcjtImage;

