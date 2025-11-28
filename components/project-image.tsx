"use client";

import { useRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
interface ScrollOnHoverProps {
  src: any;
  className?: string;
  run?: any;
}

const ProcjtImage: React.FC<ScrollOnHoverProps> = ({
  src,
  className,
  ...props
}) => {
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
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    if (scrollInterval) {
      clearInterval(scrollInterval);
      scrollInterval = null;
    }
  };

  // Previne que o Lenis capture o evento de scroll quando está dentro deste elemento
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const element = scrollContainerRef.current;
    if (!element) return;

    const { scrollTop, scrollHeight, clientHeight } = element;
    const isAtTop = scrollTop === 0;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
    const isScrollingUp = e.deltaY < 0;
    const isScrollingDown = e.deltaY > 0;

    // Se não está no topo ou no fundo, ou se pode fazer scroll, previne a propagação
    if ((isScrollingUp && !isAtTop) || (isScrollingDown && !isAtBottom)) {
      e.stopPropagation();
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      className={cn(
        "overflow-auto h-[20rem] grayscale hover:grayscale-0 scrollbar-hidden",
        className,
      )}
      onMouseEnter={startScrolling}
      onMouseLeave={stopScrolling}
      onWheel={handleWheel}
      {...props}
    >
      <Image alt={"teste"} height={0} src={src} width={500} />
    </div>
  );
};

export default ProcjtImage;
