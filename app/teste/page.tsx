import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Teste() {
  return (
  <div className=" h-screen flex justify-center items-center">  
      <Carousel className="w-[80vw] ">
        <CarouselContent className="flex">
          {Array.from({ length: 20 }).map((_, index) => (
            <CarouselItem key={index} className=" first-letter:lpl-1">
              <div className=" p-1 w-[60vw] sm:w-[40vw] md:w-[27vw] lg:w-[21vw] xl:w-[16vw]">
                <Card >
                  <CardContent className="flex aspect-square p-[6rem] items-center justify-center ">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
  </div>
  )
}
