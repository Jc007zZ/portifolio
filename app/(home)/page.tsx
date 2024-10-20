"use client"

import React from "react";
import  Button   from "@/components/ui/buttton";
import { MyStack } from "@/components/ui/mystack/my-stack"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  GithubIcon,
  DiscordIcon,
} from "@/components/icons";

export default function Home() {
 
return (
<>
      <section id="home" className="flex flex-col justify-center items-center 
      h-[90vh] min-h-[22rem] w-full " >
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
            <Button target="#skills">Shoy My skills</Button>
            </div>
      </section>

      <section id="skills" className=" pt-[5rem] w-screen h-[75vh] min-h-[40rem] flex flex-col justify-center items-center"> 
            <div  className="w-full flex flex-col justify-center items-center">
              <h1 className="text-5xl font-bold border-b-2 border-black dark:border-white pb-2">My Stack</h1>
            </div>
          <MyStack/>
      </section>

      <section id="projects" className="flex flex-col items-center w-full">
          <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md mb-20">
          <h1 className="text-5xl font-bold text-center relative z-20">
            My Projects
          </h1>
          <div className="w-[35rem] h-10 relative">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
        </div>
        <Carousel className="w-[70vw] sm:w-[80vw] ">
        <CarouselContent className="flex">
          {Array.from({ length: 20 }).map((_, index) => (
            <CarouselItem key={index} className=" first-letter:lpl-1">
              <div className=" p-1 w-[60vw] sm:w-[40vw] md:w-[27vw] lg:w-[21vw] xl:w-[16vw]">
                <Card >
                  <CardContent className="flex aspect-square p-[6rem] items-center justify-center ">
                    <span className="text-2xl font-semibold select-none	">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </section>
      
      <section id="contact" className="flex flex-col justify-center items-center mt-24">
        <article className="w-full flex flex-col justify-center items-center">
              <h1 className="text-5xl font-bold border-b-2 border-black dark:border-white pb-2">Contacs</h1>
        </article>
        <article className="mt-24">
          <p className="font-extrabold text-lg">Email: <span className="font-normal">joaocpmcs@gmail.com</span></p>
          <p className="font-extrabold text-lg">Whatsapp: <span className="font-normal">+55 31 9 9576-4315</span></p>
          <p className="font-extrabold text-lg">My Cv: <a 
            href="https://docs.google.com/document/d/1bnRL1MG2SJz4jY1hwKrZ2QtIzv6M5FR2rSyJcthh1rc/edit?usp=sharing" target="_blank"
            className="text-primary hover:text-primary-300 underline hover:cursor-pointer font-normal"
            >Click Here
            </a>
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <a href="https://www.linkedin.com/in/jo%C3%A3o-carlos-b1365a264/" target="_blank"><i className="fa-brands fa-linkedin scale-[1.2] cursor-pointer hover:text-zinc-400 transition-all hover:scale-125"></i></a>
         <DiscordIcon className="cursor-pointer hover:text-zinc-400 transition-all hover:scale-105"/>
         <GithubIcon className="cursor-pointer hover:text-zinc-400 transition-all hover:scale-105"/>

        </div>
        </article>
      </section>
  </>
)
  
}