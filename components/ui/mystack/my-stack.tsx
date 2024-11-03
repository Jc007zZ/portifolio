"use client";

import React, { forwardRef, useRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import angularlogo from "@/components/ui/mystack/logos/angular-logo.png";
import figmalogo from "@/components/ui/mystack/logos/figma-logo.png";
import nextlogo from "@/components/ui/mystack/logos/next-logo.png";
import nodelogo from "@/components/ui/mystack/logos/node-logo.png";
import postgreslogo from "@/components/ui/mystack/logos/postgres-logo.png";
import prismalogo from "@/components/ui/mystack/logos/prisma-logo.png";
import tailwindlogo from "@/components/ui/mystack/logos/tailwind-logo.png";
import tslogo from "@/components/ui/mystack/logos/ts-logo.png";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function MyStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg  bg-background "
    >
      <div className="flex size-full flex-col max-w-[400px] max-h-[200px] items-stretch justify-between gap-10">
        <div className="px-20 flex flex-row items-start justify-between">
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <div className="group relative bg-zinc-300 rounded-full">
              <Circle ref={div1Ref}>
                <Image
                  alt="Picture of the author"
                  className="scale-[1.5]"
                  height={100}
                  src={angularlogo}
                  width={100}
                />
              </Circle>
              <div className="bg-zinc-800 p-2 rounded-md group-hover:flex  hidden absolute -top-2 -translate-y-full left-1/2 -translate-x-1/2">
                <span className="text-zinc-400 whitespace-nowrap">Angular</span>
                <div className="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <div className="group relative rounded-full">
              <Circle ref={div5Ref} className="-mt-10">
                <Image
                  alt="Picture of the author"
                  className="scale-[1.2]"
                  height={500}
                  src={figmalogo}
                  width={500}
                />
              </Circle>
              <div className="bg-zinc-800 p-2 rounded-md group-hover:flex  hidden absolute -top-2 -translate-y-20 left-1/2 -translate-x-1/2">
                <span className="text-zinc-400 whitespace-nowrap">Figma</span>
                <div className="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <div className="group relative rounded-full">
              <Circle ref={div9Ref}>
                <Image
                  alt="Picture of the author"
                  className="scale-[1.7]"
                  height={500}
                  src={tslogo}
                  width={500}
                />
              </Circle>
              <div className="bg-zinc-800 p-2 rounded-md group-hover:flex  hidden absolute -top-2 -translate-y-full left-1/2 -translate-x-1/2">
                <span className="text-zinc-400 whitespace-nowrap">
                  TypeScript
                </span>
                <div className="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2" />
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 flex flex-row items-center justify-between">
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <div className="group relative rounded-full">
              <Circle ref={div2Ref}>
                <Image
                  alt="Picture of the author"
                  className="scale-[1.7]"
                  height={500}
                  src={nextlogo}
                  width={500}
                />
              </Circle>
              <div className="bg-zinc-800 p-2 rounded-md group-hover:flex  hidden absolute -top-2 -translate-y-full left-1/2 -translate-x-1/2">
                <span className="text-zinc-400 whitespace-nowrap">Next</span>
                <div className="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2" />
              </div>
            </div>
          </div>

          <Circle ref={div4Ref} className="size-16">
            <p className="text-black font-extrabold text-xl">Me</p>
          </Circle>

          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <div className="group relative rounded-full">
              <Circle
                ref={div6Ref}
                className="flex justify-center items-center"
              >
                <Image
                  alt="Picture of the author"
                  className="scale-[1.7]"
                  height={500}
                  src={postgreslogo}
                  width={500}
                />
              </Circle>
              <div className="bg-zinc-800 p-2 rounded-md group-hover:flex  hidden absolute -top-2 -translate-y-full left-1/2 -translate-x-1/2">
                <span className="text-zinc-400 whitespace-nowrap">
                  PostgreSQL
                </span>
                <div className="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2" />
              </div>
            </div>
          </div>
        </div>

        <div className="px-20 flex flex-row items-start justify-between">
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <div className="group relative rounded-full">
              <Circle ref={div3Ref}>
                <Image
                  alt="Picture of the author"
                  className="scale-[1.7]"
                  height={500}
                  src={tailwindlogo}
                  width={500}
                />
              </Circle>
              <div className="bg-zinc-800 p-2 rounded-md group-hover:flex  hidden absolute -top-2 -translate-y-full left-1/2 -translate-x-1/2">
                <span className="text-zinc-400 whitespace-nowrap">
                  Tailwind
                </span>
                <div className="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <div className="group relative rounded-full">
              <Circle
                ref={div7Ref}
                className="flex justify-center items-center mt-10"
              >
                <Image
                  alt="Picture of the author"
                  className="scale-[1.7]"
                  height={500}
                  src={prismalogo}
                  width={500}
                />
              </Circle>
              <div className="bg-zinc-800 p-2 rounded-md group-hover:flex  hidden absolute -top-2 -translate-y-0 left-1/2 -translate-x-1/2">
                <span className="text-zinc-400 whitespace-nowrap">Prisma</span>
                <div className="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <div className="group relative rounded-full">
              <Circle ref={div8Ref}>
                <Image
                  alt="Picture of the author"
                  className="scale-[1.5]"
                  height={500}
                  src={nodelogo}
                  width={500}
                />
              </Circle>
              <div className="bg-zinc-800 p-2 rounded-md group-hover:flex  hidden absolute -top-2 -translate-y-full left-1/2 -translate-x-1/2">
                <span className="text-zinc-400 whitespace-nowrap">Express</span>
                <div className="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        curvature={-75}
        endYOffset={-10}
        fromRef={div1Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        curvature={75}
        endYOffset={1}
        fromRef={div3Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        curvature={-75}
        duration={2}
        endYOffset={-10}
        fromRef={div5Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        reverse
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        reverse
        containerRef={containerRef}
        curvature={75}
        endYOffset={1}
        fromRef={div7Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        reverse
        containerRef={containerRef}
        curvature={75}
        endYOffset={1}
        fromRef={div8Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        reverse
        containerRef={containerRef}
        curvature={-75}
        endYOffset={10}
        fromRef={div9Ref}
        toRef={div4Ref}
      />
    </div>
  );
}
