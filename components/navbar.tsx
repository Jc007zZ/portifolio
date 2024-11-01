"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import dicionary from "@/public/locales/common.json"

import { GithubIcon, DiscordIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";

interface Project {
  id: string,
  title: string;
  description: string;
  image: string;
  deploy: string;
}

type LanguageDictionary = {
  navSkills: string;
  navProjects: string;
  navContact: string;
  homeHi: string;
  homeMarked: string;
  homeLeading: string;
  homeDescription: string;
  homeButtonText: string;
  projectTitleSection: string;
  coffeDescription: string;
  cobaltDescription: string;
  droneDescription: string;
  appleDescription: string;
  showMore: string;
  stackTitleSection: string;
  contactTitle: string;
  contactCv: string;
  clikHere: string;
  footerText: string;
};

export default function App() {
  let lang = "pt"
  let text: Record<string, LanguageDictionary> = dicionary

  function HandleItem() {
    const menu = document.getElementById("menu");
    menu?.click();
  }

  return (
    <Navbar className="fixed pt-[0.3rem] px-10 " maxWidth="2xl">
      <NavbarContent className=" gap-4" justify="center">
        <NavbarBrand>
          <a
            className="font-bold text-2xl text-sky-400  -ml-6"
            href="#home"
            id="jcLogo"
          >
            Joao.C
          </a>
        </NavbarBrand>

        <NavbarItem className="hidden sm:flex">
          <a className="text-lg" color="foreground" href="#skills">
            {text[lang].navSkills}
          </a>
        </NavbarItem>

        <NavbarItem isActive className="hidden sm:flex">
          <a aria-current="page" className="text-lg" href="#projects">
          {text[lang].navProjects}
          </a>
        </NavbarItem>

        <NavbarItem className="hidden sm:flex">
          <a className="text-lg" color="foreground" href="#contact">
          {text[lang].navContact}
          </a>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <a
          href="https://www.linkedin.com/in/jo%C3%A3o-carlos-b1365a264/"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin scale-[1.2] cursor-pointer hover:text-zinc-400 transition-all hover:scale-125" />
        </a>
        <DiscordIcon className="cursor-pointer hover:text-zinc-400 transition-all hover:scale-105" />
        <GithubIcon className="cursor-pointer hover:text-zinc-400 transition-all hover:scale-105" />
        <ThemeSwitch className="cursor-pointer hover:text-zinc-400 transition-all hover:scale-105" />
        <NavbarMenuToggle className="sm:hidden" id="menu" />
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem className="flex flex-col gap-4">
          <NavbarItem>
            <a
              className="text-lg"
              color="foreground"
              href="#skills"
              onClick={HandleItem}
            >
               {text[lang].navSkills}
            </a>
          </NavbarItem>
          <NavbarItem isActive>
            <a
              className="text-lg"
              color="foreground"
              href="#projects"
              onClick={HandleItem}
            >
               {text[lang].navProjects}
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              className="text-lg"
              color="foreground"
              href="#contact"
              onClick={HandleItem}
            >
               {text[lang].navContact}
            </a>
          </NavbarItem>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
