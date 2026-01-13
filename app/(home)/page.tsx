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
  Activity,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { WorkStatus } from "@/components/ui/work-status";


interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  deploy: string;
  situation?: string;
  task?: string;
  action?: string;
  result?: string;
}

const technologies = [
  {
    name: "Next.js",
    colorClass: "text-white",
  },
  {
    name: "TypeScript",
    colorClass: "text-blue-600",
  },
  {
    name: "Tailwind CSS",
    colorClass: "text-cyan-500",
  },
  {
    name: "React",
    colorClass: "text-emerald-400",
  },
  {
    name: "Node.js",
    colorClass: "text-emerald-500",
  },
  {
    name: "PostgreSQL",
    colorClass: "text-blue-400",
  },
  {
    name: "Python",
    colorClass: "text-orange-600",
  },
  {
    name: "Docker",
    colorClass: "text-blue-500",
  },
  {
    name: "Prisma",
    colorClass: "text-purple-500",
  },
  {
    name: "Cloudflare",
    colorClass: "text-orange-500",
  }
];

export default function Home() {
  const t = useTranslations("about");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [content, setcontent] = React.useState({} as Project);
  const modalContentRef = React.useRef<HTMLDivElement>(null);
  const modalImageRef = React.useRef<HTMLDivElement>(null);

  // Bloquear scroll do body e wrapper do modal quando modal está aberto
  React.useEffect(() => {
    if (isOpen) {
      // Salvar a posição atual do scroll
      const scrollY = window.scrollY;
      // Bloquear scroll do body
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      // Bloquear scroll do wrapper do modal (MotionComponent)
      // Usar setTimeout para garantir que o wrapper esteja no DOM
      const timeoutId = setTimeout(() => {
        const modalWrapper = document.querySelector('[data-slot="wrapper"]') as HTMLElement;
        if (modalWrapper) {
          modalWrapper.style.overflowX = 'hidden';
          modalWrapper.style.overflowY = 'hidden';
        }
      }, 0);

      // Também criar um observer para capturar quando o wrapper for adicionado
      const observer = new MutationObserver(() => {
        const modalWrapper = document.querySelector('[data-slot="wrapper"]') as HTMLElement;
        if (modalWrapper) {
          modalWrapper.style.overflowX = 'hidden';
          modalWrapper.style.overflowY = 'hidden';
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => {
        clearTimeout(timeoutId);
        observer.disconnect();
        // Restaurar scroll quando modal fechar
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        const modalWrapper = document.querySelector('[data-slot="wrapper"]') as HTMLElement;
        if (modalWrapper) {
          modalWrapper.style.overflowX = '';
          modalWrapper.style.overflowY = '';
        }
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // Handler para prevenir que o Lenis capture o scroll do modal
  const handleModalWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const element = modalContentRef.current;
    if (!element) return;

    const { scrollTop, scrollHeight, clientHeight } = element;
    const isAtTop = scrollTop === 0;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
    const isScrollingUp = e.deltaY < 0;
    const isScrollingDown = e.deltaY > 0;

    // Se não está no topo ou no fundo, previne a propagação para o Lenis
    if ((isScrollingUp && !isAtTop) || (isScrollingDown && !isAtBottom)) {
      e.stopPropagation();
    } else if ((isScrollingUp && isAtTop) || (isScrollingDown && isAtBottom)) {
      // Se está no topo ou no fundo, previne sempre para não rolar o body
      e.stopPropagation();
    }
  };

  // GSAP Animations
  const containerRef = React.useRef(null);
  const { contextSafe } = useGSAP({ scope: containerRef });

  useGSAP(() => {
    // Hero Section
    gsap.from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Projects Section
    gsap.from(".projects-title", {
      scrollTrigger: {
        trigger: ".projects-title",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".projects-carousel", {
      scrollTrigger: {
        trigger: ".projects-carousel",
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    });

    // About Section
    gsap.from(".about-title", {
      scrollTrigger: {
        trigger: ".about-title",
        start: "top 80%",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".responsive-card", {
      scrollTrigger: {
        trigger: ".about-title",
        start: "top 70%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

  }, { scope: containerRef });

  const projects: Project[] = [
    {
      id: "1",
      title: "Rary Service",
      description: t("raryDescription"),
      image: "/project-images/rary.png",
      deploy: "https://raryservice.com/",
      situation: t("rarySituation"),
      task: t("raryTask"),
      action: t("raryAction"),
      result: t("raryResult"),
    },
    {
      id: "2",
      title: "SafetyQr",
      description: t("safetyQrDescription"),
      image: "/project-images/safetyqr.png",
      deploy: "https://safetyqr.vercel.app/",
      situation: t("safetyQrSituation"),
      task: t("safetyQrTask"),
      action: t("safetyQrAction"),
      result: t("safetyQrResult"),
    },
    {
      id: "3",
      title: "MealTracekr",
      description: t("mealTrackerDescription"),
      image: "/project-images/mealtracker.png",
      deploy: "https://mealtracker-nu.vercel.app/dashboard",
      situation: t("mealTrackerSituation"),
      task: t("mealTrackerTask"),
      action: t("mealTrackerAction"),
      result: t("mealTrackerResult"),
    },
    {
      id: "4",
      title: "Cobalt",
      description: t("cobaltDescription"),
      image: "/project-images/cobalt.png",
      deploy: "https://cobalt-tan-delta.vercel.app/",
      situation: t("cobaltSituation"),
      task: t("cobaltTask"),
      action: t("cobaltAction"),
      result: t("cobaltResult"),
    },
    {
      id: "5",
      title: "Coffe Store",
      description: t("coffeDescription"),
      image: "/project-images/coffe.png",
      deploy: "https://coffee-nine-sandy.vercel.app/",
      situation: t("coffeSituation"),
      task: t("coffeTask"),
      action: t("coffeAction"),
      result: t("coffeResult"),
    },
    {
      id: "6",
      title: "Shop Store",
      description: t("droneDescription"),
      image: "/project-images/drone.png",
      deploy: "https://drone-shop-ten.vercel.app/",
      situation: t("droneSituation"),
      task: t("droneTask"),
      action: t("droneAction"),
      result: t("droneResult"),
    },
    {
      id: "7",
      title: "Apple Redesing",
      description: t("appleDescription"),
      image: "/project-images/apple.png",
      deploy: "https://jc007zz.vercel.app/no-deploy",
      situation: t("appleSituation"),
      task: t("appleTask"),
      action: t("appleAction"),
      result: t("appleResult"),
    },

  ];

  const handleOpen = (content: Project) => {
    setcontent(content);
    onOpen();
  };

  // Scroll automático da imagem no modal
  const scrollIntervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const startImageScrolling = () => {
    if (scrollIntervalRef.current) return;
    scrollIntervalRef.current = setInterval(() => {
      if (modalImageRef.current) {
        modalImageRef.current.scrollTop += 2;
      }
    }, 30);
  };

  const stopImageScrolling = () => {
    if (modalImageRef.current) {
      modalImageRef.current.scrollTop = 0;
    }
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  // Limpar interval quando modal fechar
  React.useEffect(() => {
    if (!isOpen) {
      stopImageScrolling();
    }
    return () => {
      stopImageScrolling();
    };
  }, [isOpen]);

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
    <div ref={containerRef}>
      <section
        className="flex flex-col justify-center items-center 
      h-[80vh] min-h-[22rem] w-full relative overflow-hidden"
        id="home"
      >

        <div className="flex flex-col justify-center items-center  gap-8">
          <p className="hero-text text-center text-5xl md:text-6xl font-bold max-w-[60rem]">
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
          <p className="hero-text px-8 text-center text-xl text-zinc-500 max-w-[50rem]">
            {t("homeDescription")}
          </p>
          <div className="hero-text">
            <ButtonDefault target="#skills">{t("homeButtonText")}</ButtonDefault>
          </div>
        </div>
      </section>


      <section className="flex flex-col items-center justify-center w-full py-20 pb-20 overflow-hidden" id="tech-stack">
        <div className="flex flex-col items-center justify-center gap-4 mb-10">
          <h1 className="h-20  text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            {t("techStackTitle")}
          </h1>
          <p className="text-neutral-300 text-lg px-8 text-center max-w-lg mx-auto">
            {t("techStackDesc")}
          </p>
        </div>
        <InfiniteMovingCards
          items={technologies}
          direction="right"
          speed="slow"
        />
      </section>

      <section className="flex flex-col items-center w-full" id="projects">
        <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md ">
          <h1 className="projects-title text-5xl font-bold h-14 pl-2 pb-20">
            {t("projectTitleSection")}
          </h1>
        </div>

        <Carousel className="projects-carousel w-[70vw] sm:w-[80vw] ">
          <CarouselContent className="flex">
            {projects.map((e: Project, index) => (
              <CarouselItem key={index} className=" first-letter:lpl-1 ">
                <div className=" p-1 ">
                  <Card className="w-[67vw] sm:w-[60vw] md:w-[45vw] lg:w-[29vw] h-[30rem] ">
                    <CardContent className="flex flex-col  items-center justify-around aspect-square p-4 h-full w-full bg-neutral-100 dark:bg-black/40 rounded-lg gap-4">
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
                        className="p-4"
                        key={"5xl"}
                        onPress={() => handleOpen(e)}
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
      <div>
        <Modal isOpen={isOpen} size={"5xl"} onOpenChange={onOpenChange}>
          <div
            ref={modalContentRef}

            onWheel={handleModalWheel}
          >
            <ModalContent className="h-[90vh] overflow-y-auto">
              {(onClose: any) => (
                <>
                  <ModalHeader className="flex justify-center items-center text-2xl font-bold">
                    {content.title}
                  </ModalHeader>
                  <ModalBody className="flex flex-col gap-6 px-8">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-semibold">{t("starSituation")}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {content.situation || content.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-semibold">{t("starTask")}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {content.task || ""}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-semibold">{t("starAction")}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {content.action || ""}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-semibold">{t("starResult")}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {content.result || ""}
                      </p>
                    </div>

                    <div
                      ref={modalImageRef}
                      className="w-full h-[300px] rounded-xl overflow-auto border border-zinc-200 dark:border-zinc-800 mt-4 scrollbar-hidden"
                      onMouseEnter={startImageScrolling}
                      onMouseLeave={stopImageScrolling}
                    >
                      <Image
                        alt={content.title}
                        src={content.image}
                        width={1200}
                        height={600}
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      />
                    </div>
                  </ModalBody>
                  <ModalFooter className="flex justify-center pb-8">
                    <Button
                      className="w-48 font-semibold"
                      color="primary"
                      onPress={() => window.open(content.deploy, "_blank")}
                    >
                      {t("viewInLive")}
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </div>
        </Modal>
      </div>
      <section id="contact" className="px-8 sm:px-20 md:px-30 lg:px-40 w-full mt-44">
        <h1 className="about-title text-4xl font-bold pb-2">{t("aboutTitle")}</h1>

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
                    {t("contactCv")}
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
              <Container className="h-[8rem] flex flex-col justify-between dark:bg-white bg-neutral-950 ">
                <h1 className="flex justify-between items-center dark:text-zinc-500 text-white font-bold ">
                  <div className="flex items-center gap-4">
                    <Clock size={20} />
                    {t("codingHours")}
                  </div>
                  <Info size={20} />
                </h1>
                <p className=" dark:text-black text-white text-3xl font-bold">
                  <AnimatedCounter value={262} /> hrs
                </p>
              </Container>
              <CardSpotlight className="h-[8rem] flex flex-col justify-around transition-all duration-300 hover:border-blue-500">
                <div className="flex items-center gap-4 font-bold text-zinc-600 dark:text-zinc-400">
                  <Activity size={20} />
                  <h1>{t("activeProjects")}</h1>
                </div>
                <p className="text-3xl font-extrabold pt-8">
                  <AnimatedCounter value={14} />
                </p>
              </CardSpotlight>
            </div>
          </div>
          <div className="flex responsive-card flex-col gap-4">
            <div className="flex gap-4">
              <WorkStatus status="limited" />
              <Container className="flex flex-col gap-4 h-[8rem]">
                <div className="flex gap-2 items-center font-semibold dark:text-zinc-400 ">
                  <Pin size={16} />
                  <p>{t("localization")}</p>
                </div>
                <p>Brazil, Belo Horizonte</p>
              </Container>
            </div>
            <div>
              <Container className="h-[15rem]">
                <div className="flex items-center gap-4">
                  <FileText size={20} />
                  <h1 className="text-xl font-bold">{t("techStackLabel")}</h1>
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
                  <Tech color="bg-purple-500">Sequelize</Tech>
                </div>
              </Container>
            </div>
          </div>
        </aside>
      </section>
    </div >
  );
}
