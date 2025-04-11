"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import {
  Linkedin,
  Github,
  Smartphone,
  FileText,
  Mail,
  Clock,
  Info,
  Pin,
} from "lucide-react";

import ButtonDefault from "@/components/ui/button-default";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Container } from "@/components/ui/container";
import { Tech } from "@/components/ui/tech";
import ProjectImage from "@/components/project-image";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  deploy: string;
}

export default function Home() {
  const t = useTranslations("about");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [content, setcontent] = React.useState({} as Project);
  const projects: Project[] = [
    {
      id: "1",
      title: "Coffe Store",
      description: t("coffeDescription"),
      image: "/project-images/coffe.png",
      deploy: "https://coffee-nine-sandy.vercel.app/",
    },
    {
      id: "2",
      title: "Cobalt",
      description: t("cobaltDescription"),
      image: "/project-images/cobalt.png",
      deploy: "https://cobalt-tan-delta.vercel.app/",
    },
    {
      id: "3",
      title: "Shop Store",
      description: t("droneDescription"),
      image: "/project-images/drone.png",
      deploy: "https://drone-shop-ten.vercel.app/",
    },
    {
      id: "4",
      title: "Apple Redesing",
      description: t("appleDescription"),
      image: "/project-images/apple.png",
      deploy: "http://localhost:3000/no-deploy",
    },
  ];

  const handleOpen = (content: Project) => {
    setcontent(content);
    onOpen();
  };

  const [copySuccess, setCopySuccess] = React.useState("");
  const [email, setEmail] = React.useState("joaocpmcs@gmail.com");
  const textToCopy = "joaocpmcs@gmail.com";

  const handleCopyClick = async (e: any) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess("Texto copiado com sucesso!");
    } catch (error) {
      setCopySuccess("Falha ao copiar o texto.");
    }
    setEmail("Copied!!");
    setTimeout(() => {
      setEmail(textToCopy);
    }, 1000);
  };

  return (
    <>
      <section
        className="flex flex-col justify-center items-center 
      h-[80vh] min-h-[22rem] w-full "
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
          <ButtonDefault target="#skills">{t("homeButtonText")}</ButtonDefault>
        </div>
      </section>
      <section className="flex flex-col items-center w-full" id="projects">
        <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md ">
          <h1 className="text-5xl font-bold h-14 pl-2 pb-20">
            {t("projectTitleSection")}
          </h1>
        </div>

        <Carousel className="w-[70vw] sm:w-[80vw] ">
          <CarouselContent className="flex">
            {projects.map((e: Project, index) => (
              <CarouselItem key={index} className=" first-letter:lpl-1 ">
                <div className=" p-1 ">
                  <Card className="w-[67vw] sm:w-[60vw] md:w-[45vw] lg:w-[29vw] h-[40rem] ">
                    <CardContent className="flex flex-col  items-center justify-around aspect-square p-4 h-full w-full bg-neutral-100 dark:bg-black/40 rounded-lg">
                      <div className="flex flex-col gap-y-4 ">
                        <h1 className="text-center font-extrabold text-xl sm:text-2xl select-none">
                          {e.title}
                        </h1>
                        <p className="text-center text-sm font-medium select-none">
                          {e.description}
                        </p>
                      </div>
                      <ProjectImage src={e.image} />
                      <Button
                        key={"5xl"}
                        onPress={() => window.open(e.deploy, "_blankt")}
                      >
                        {t("showMore")}
                      </Button>
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

      {/* <section
        className=" pt-[5rem] w-screen h-[75vh] min-h-[40rem] flex flex-col justify-center items-center"
        id="skills"
      >
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold border-b-2 border-black dark:border-white pb-2">
          {t("stackTitleSection")}
          </h1>
        </div>
        <MyStack />
      </section> */}

      <div>
        <Modal isOpen={isOpen} size={"5xl"} onOpenChange={onOpenChange}>
          <ModalContent className="h-[80vh]">
            {(onClose: any) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {content.title}
                </ModalHeader>
                <ModalBody className="flex flex-row-reverse items-center">
                  <p className="flex-1 h-5/6">{content.description}</p>
                  <ProjectImage
                    className="flex-1 h-[30rem]"
                    src={content.image}
                  />
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

      {/* <section
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
      </section> */}

      <section className="w-full mt-44">
        <h1 className="text-4xl font-bold pb-2">About Me</h1>

        <aside className="flex flex-wrap gap-4">
          <div className="flex responsive-card flex-col gap-4">
            <div>
              <Container className="h-[15rem]">
                <div className="h-full flex flex-col justify-between">
                  <a
                    className="font-semibold text-zinc-400 flex items-center gap-2 hover:text-black/60 dark:hover:text-zinc-300/95 hover:cursor-pointer"
                    href="https://www.linkedin.com/in/joaocpmcs/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Linkedin size={17} />
                    João Carlos
                  </a>

                  <a
                    className="font-semibold text-zinc-400 flex items-center gap-2 hover:text-black/60 dark:hover:text-zinc-300/95 hover:cursor-pointer"
                    href="https://github.com/Jc007zZ"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Github size={17} />
                    Jc007zZ
                  </a>

                  <a
                    className="font-semibold text-zinc-400 flex items-center gap-2 hover:text-black/60 dark:hover:text-zinc-300/95 hover:cursor-pointer"
                    href="https://wa.me/5531995764315"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Smartphone size={17} />
                    +55(31)99576-4315
                  </a>

                  <a
                    className="font-semibold text-zinc-400 flex items-center gap-2 hover:text-black/60 dark:hover:text-zinc-300/95 hover:cursor-pointer"
                    href="https://docs.google.com/document/d/1JyY_CUnxkqqhQ9GqGSIaMGR1NT7g0-pkO53TYq6cDiU/edit?usp=sharing"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FileText size={17} />
                    My cv
                  </a>

                  <button
                    className="font-semibold text-zinc-400 flex items-center gap-2 hover:text-black/60 dark:hover:text-zinc-300/95 hover:cursor-pointer"
                    onClick={(e) => handleCopyClick(e)}
                  >
                    <Mail size={17} />
                    {email}
                  </button>
                </div>
              </Container>
            </div>
            <div className="flex gap-4">
              <Container className="h-[8rem] flex flex-col justify-around dark:bg-white bg-neutral-950 ">
                <h1 className="flex justify-between items-center dark:text-zinc-500 text-white font-bold ">
                  <div className="flex items-center gap-4">
                    <Clock size={20} />
                    Coding Hours
                  </div>
                  <Info size={20} />
                </h1>
                <p className=" dark:text-black text-white text-2xl font-bold">
                  262 hrs
                </p>
              </Container>
              <Container className="h-[8rem] flex items-center justify-center">
                <h1 className="text-center font-extrabold text-3xl ">
                  Em breve
                </h1>
              </Container>
            </div>
          </div>
          <div className="flex responsive-card flex-col gap-4">
            <div className="flex gap-4">
              <Container className="flex flex-col items-center justify-around h-[8rem]">
                <span className="relative flex size-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full size-5 bg-green-500" />
                </span>
                <p className="text-xl font-extrabold text-center">
                  Avaliable for Work!!
                </p>
              </Container>
              <Container className="flex flex-col gap-4 h-[8rem]">
                <div className="flex gap-2 items-center font-semibold dark:text-zinc-400 ">
                  <Pin size={16} />
                  <p>Localizantion</p>
                </div>
                <p>Brazil, Belo Horizonte</p>
              </Container>
            </div>
            <div>
              <Container className="h-[15rem]">
                <div className="flex items-center gap-4">
                  <FileText size={20} />
                  <h1 className="text-xl font-bold">Techstack</h1>
                </div>
                <div id="skills" className="flex gap-2 flex-wrap pt-4 ">
                  <Tech color="bg-emerald-500">Next.js</Tech>
                  <Tech color="bg-emerald-500">React</Tech>
                  <Tech color="bg-emerald-500">Angular</Tech>
                  <Tech color="bg-sky-600">TypeScript</Tech>
                  <Tech color="bg-sky-600">JavaScript</Tech>
                  <Tech color="bg-amber-600">Docker</Tech>
                  <Tech color="bg-rose-500">Tailwind CSS</Tech>
                  <Tech color="bg-rose-500">Sass</Tech>
                  <Tech color="bg-rose-500">Postcss</Tech>
                  <Tech color="bg-green-500">Node</Tech>
                  <Tech color="bg-lime-500">PostgreSQL</Tech>
                  <Tech color="bg-purple-500">Prisma</Tech>
                  <Tech color="bg-purple-500">Sequialize</Tech>
                </div>
              </Container>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
