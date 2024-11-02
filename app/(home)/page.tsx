"use client";
import {useTranslations} from 'next-intl';
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

  const t = useTranslations('about');
  

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [content, setcontent] = React.useState({} as Project)

  const projects:Project[] = [
    { id: "1",
      title: "Coffe Store",
      description: t("coffeDescription"),
      image: "/project-images/coffe.png",
      deploy:"https://coffee-nine-sandy.vercel.app/"
    },
    { id:"2",
      title: "Cobalt",
      description: t("cobaltDescription"),
      image: "/project-images/cobalt.png",
      deploy:"https://cobalt-tan-delta.vercel.app/"
    },
    { id:"3",
      title: "Shop Store",
      description: t("droneDescription"),
      image: "/project-images/drone.png",
      deploy:"https://drone-shop-ten.vercel.app/"
    },
    { id:"4",
      title: "Apple Redesing",
      description: t("appleDescription"),
      image: "/project-images/apple.png",
      deploy:"http://localhost:3000/no-deploy"
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
      h-[85vh] min-h-[22rem] w-full "
        id="home"
      >
        <div className="flex flex-col justify-center items-center  gap-8">

          <p className="text-center text-5xl md:text-6xl font-bold max-w-[60rem]">
          {t("homeHi")}
            <span
              className="bg-gradient-to-r from-highlight via-pink-600  to-purple-600
                bg-clip-text text-transparent"
            >
              {" "}
              Full Stack{" "}
            </span>
            {t("homeLeading")}
          </p>
          <p className="text-center text-xl text-zinc-500 max-w-[50rem]">
            {t("homeDescription")}
          </p>
          <ButtonDefault target="#skills">
             {t("homeButtonText")}
           </ButtonDefault>
        </div>
      </section>
      <section className="flex flex-col items-center w-full" id="projects">
        <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md mb-20">
          <h1 className="text-5xl font-bold text-start relative z-20 h-14">
          {t("projectTitleSection")}
            
          </h1>
          
          {/* <div className="w-[35rem] h-10 relative">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div> */}
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
                        <Button key={'5xl'} onPress={() => window.open(e.deploy, "_blankt")}>{t("showMore")}</Button>
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

      <section
        className=" pt-[5rem] w-screen h-[75vh] min-h-[40rem] flex flex-col justify-center items-center"
        id="skills"
      >
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold border-b-2 border-black dark:border-white pb-2">
          {t("stackTitleSection")}
          </h1>
        </div>
        <MyStack />
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
          {t("navContact")}
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
            {t("contactCv")}{" "}
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
