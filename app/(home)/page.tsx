import React from "react";
import  Button  from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";



export default function Home() {
   
return <>

    <section className="flex flex-col justify-center
    h-[80vh] w-11/12">
      <Vortex
      backgroundColor="black"
      rangeY={800}
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
          <Button>Shoy My skills</Button>
          </div>
      </Vortex>
    </section>

    <section>
      
    </section>

  </>
  
}