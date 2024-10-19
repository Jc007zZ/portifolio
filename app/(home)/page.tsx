import React from "react";
import  Button   from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";
import { MyStack } from "@/components/ui/mystack/my-stack"


export default function Home() {
   
return (
<>
      <section className="flex flex-col justify-center items-center
      h-[80vh] mb-[20vh] w-full" >
        <Vortex
        backgroundColor="black"
        rangeY={400}
        particleCount={200}
        baseSpeed={0.1}
        rangeSpeed={0}
        baseRadius={0.1}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 h-full "
        >
          <div className="flex flex-col justify-center items-center  gap-8">
            <h1 className=" text-5xl font-bold">Front-End</h1>
            <p className="text-center text-4xl md:text-5xl font-bold max-w-[40rem]">Make
                <span
                className="bg-gradient-to-r from-highlight via-pink-500 to-red-500
                bg-clip-text text-transparent"> Beautiful </span>
                websites turn ideas into reality
            </p>
            <p className="text-center text-xl max-w-[30rem]">
              Hi! I'm Jc, a Next.js  Developer based in Brazil.
            </p>
            <Button target="#stack">Shoy My skills</Button>
            </div>
        </Vortex>
      </section>
      <section id="stack" className="w-screen px-4"> 
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="text-5xl font-bold border-b-2 border-white pb-2">My Stack</h1>
            </div>
          <MyStack/>
      </section>
      <section>
          <div className="w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="text-5xl font-bold text-center text-white relative z-20">
            My Projects
          </h1>
          <div className="w-[35rem] h-10 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
        </div>
        <aside></aside>
      </section>
  </>
)
  
}