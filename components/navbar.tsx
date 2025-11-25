"use client";
import { useTranslations } from "next-intl";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { GithubIcon, DiscordIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import LocaleSwitcher from "@/components/ui/LocaleSwitcher";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function App() {
  const t = useTranslations("about");
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".navbar-anim", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });
  }, { scope: containerRef });

  function HandleItem() {
    const menu = document.getElementById("menu");

    menu?.click();
  }

  return (
    <div ref={containerRef}>
      <Navbar className="navbar-anim fixed pt-[0.3rem] px-10 " maxWidth="2xl">
        <NavbarContent className=" gap-4" justify="center">
          <NavbarBrand>
            <a
              className="font-bold text-2xl text-sky-400  -ml-6"
              href="#home"
              id="jcLogo"
              aria-label="ir para o começo"
            >
              Joao.C
            </a>
          </NavbarBrand>

          <NavbarItem className="hidden sm:flex">
            <a className="text-lg" color="foreground" href="#skills" aria-label="ir para secção de skills">
              {t("navSkills")}
            </a>
          </NavbarItem>

          <NavbarItem isActive className="hidden sm:flex">
            <a aria-current="page" className="text-lg" href="#projects" aria-label="ir para secção de projetos">
              {t("navProjects")}
            </a>
          </NavbarItem>

          <NavbarItem className="hidden sm:flex">
            <a className="text-lg" color="foreground" href="#contact" aria-label="ir para secção de contato">
              {t("navContact")}
            </a>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-carlos-b1365a264/"
            rel="noreferrer"
            target="_blank"
            aria-label="ir para o linkedin"
          >
            <i className="fa-brands fa-linkedin scale-[1.2] cursor-pointer hover:text-zinc-400 transition-all hover:scale-125" />
          </a>
          <DiscordIcon className="cursor-pointer hover:text-zinc-400 transition-all hover:scale-105" />
          <GithubIcon className="cursor-pointer hover:text-zinc-400 transition-all hover:scale-105" />
          <ThemeSwitch className="cursor-pointer hover:text-zinc-400 transition-all hover:scale-105" />
          <LocaleSwitcher />
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
                aria-label="ir para a secção de skills"
              >
                {t("navSkills")}
              </a>
            </NavbarItem>
            <NavbarItem isActive>
              <a
                className="text-lg"
                color="foreground"
                href="#projects"
                onClick={HandleItem}
                aria-label="ir para a secção de projetos"
              >
                {t("navProjects")}
              </a>
            </NavbarItem>
            <NavbarItem>
              <a
                className="text-lg"
                color="foreground"
                href="#contact"
                onClick={HandleItem}
                aria-label="ir para a secção de contatos"
              >
                {t("navContact")}
              </a>
            </NavbarItem>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
