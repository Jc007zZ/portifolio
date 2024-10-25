"use client";

import React from "react";
import ButtonDefault from "@/components/ui/button-default";
import { MyStack } from "@/components/ui/mystack/my-stack";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@nextui-org/button";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import { GithubIcon, DiscordIcon } from "@/components/icons";

import   ProjectImage  from '@/components/project-image';



interface Project {
  id: string,
  title: string;
  description: string;
  image: string;
  deploy: string;
}

export default function Home() {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [content, setcontent] = React.useState({} as Project)

  const projects:Project[] = [
    { id: "1",
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit quo possimus asperiores incidunt officia quos, magni ullam labore esse praesentium aperiam, commodi quidem vel iste exercitationem, modi distinctio aliquam.",
      image: "/project-images/coffe.png",
      deploy:"https://nextui.org/og.png"
    },
    { id:"2",
      title: "Cobalt",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit quo possimus asperiores incidunt officia quos, magni ullam labore esse praesentium aperiam, commodi quidem vel iste exercitationem, modi distinctio aliquam.",
      image: "/project-images/cobalt.png",
      deploy:"https://nextui.org/og.png"
    },
    { id:"3",
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit quo possimus asperiores incidunt officia quos, magni ullam labore esse praesentium aperiam, commodi quidem vel iste exercitationem, modi distinctio aliquam.",
      image: "/project-images/drone.png",
      deploy:"https://nextui.org/og.png"
    },
    { id:"4",
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit quo possimus asperiores incidunt officia quos, magni ullam labore esse praesentium aperiam, commodi quidem vel iste exercitationem, modi distinctio aliquam.",
      image: "/project-images/apple.png",
      deploy:"https://nextui.org/og.png"
    }
  ]

  const handleOpen = (content:Project) => {
    setcontent(content)
    onOpen();
  }


  return (
    <>
      <section
        className="flex flex-col justify-center items-center 
      h-[90vh] min-h-[22rem] w-full "
        id="home"
      >
        <div className="flex flex-col justify-center items-center  gap-8">
          <h1 className=" text-5xl font-bold">Front-End</h1>
          <p className="text-center text-4xl md:text-5xl font-bold max-w-[40rem]">
            Make
            <span
              className="bg-gradient-to-r from-highlight via-pink-500 to-red-500
                bg-clip-text text-transparent"
            >
              {" "}
              Beautiful{" "}
            </span>
            websites turn ideas into reality
          </p>
          <p className="text-center text-xl max-w-[30rem]">
            Hi! I&apos;m Jc, a Next.js Developer based in Brazil.
          </p>
          <ButtonDefault target="#skills">Shoy My skills</ButtonDefault>
        </div>
      </section>

      <section
        className=" pt-[5rem] w-screen h-[75vh] min-h-[40rem] flex flex-col justify-center items-center"
        id="skills"
      >
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold border-b-2 border-black dark:border-white pb-2">
            My Stack
          </h1>
        </div>
        <MyStack />
      </section>

      <section className="flex flex-col items-center w-full" id="projects">
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
            {projects.map((e: Project, index) => (
              <CarouselItem key={index} className=" first-letter:lpl-1">
                <div className=" p-1 ">
                  <Card className="w-[67vw] sm:w-[60vw] md:w-[45vw] lg:w-[29vw] h-[40rem]">
                    <CardContent className="flex flex-col  items-center justify-around aspect-square p-4 h-full w-full">
                        <div  className="flex flex-col gap-y-4">
                          <h1 className="text-center font-extrabold text-xl sm:text-2xl select-none">
                            {e.title}
                            </h1>
                          <p className="text-center text-sm font-medium select-none">
                            {e.description}
                          </p>
                        </div>
                        <ProjectImage src={e.image} />
                        <Button key={'5xl'} onPress={() => handleOpen(e)}>Show more</Button>
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
      <div>
      <Modal isOpen={isOpen} size={'5xl'} onOpenChange={onOpenChange}>
        <ModalContent className="h-[80vh]">
          {(onClose:any) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{content.title}</ModalHeader>
              <ModalBody className="flex flex-row-reverse items-center">
                <p className="flex-1 h-5/6">{content.description}</p>
               <ProjectImage  src={content.image}  className="flex-1 h-[30rem]"/>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </div>
      <section
        className="flex flex-col justify-center items-center mt-24"
        id="contact"
      >
        <article className="w-full flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold border-b-2 border-black dark:border-white pb-2">
            Contacs
          </h1>
        </article>
        <article className="mt-24">
          <p className="font-extrabold text-lg">
            Email: <span className="font-normal">joaocpmcs@gmail.com</span>
          </p>
          <p className="font-extrabold text-lg">
            Whatsapp: <span className="font-normal">+55 31 9 9576-4315</span>
          </p>
          <p className="font-extrabold text-lg">
            My Cv:{" "}
            <a
              className="text-primary hover:text-primary-300 underline hover:cursor-pointer font-normal"
              href="https://docs.google.com/document/d/15HJG7IX08cXWxdkr2-zDZo5-padP5wdPt8HYMYPFOr4/edit?tab=t.0"
              rel="noreferrer"
              target="_blank"
            >
              Click Here
            </a> 
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-carlos-b1365a264/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin scale-[1.2] cursor-pointer hover:text-zinc-400 transition-all hover:scale-125" />
            </a>
            <DiscordIcon className="cursor-pointer hover:text-zinc-400 transition-all hover:scale-105" />
            <GithubIcon className="cursor-pointer hover:text-zinc-400 transition-all hover:scale-105" />
          </div>
        </article>
            

      </section>
    </>
  );
}
