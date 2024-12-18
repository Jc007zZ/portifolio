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

export default function App() {
  const t = useTranslations("about");

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
            {t("navSkills")}
          </a>
        </NavbarItem>

        <NavbarItem isActive className="hidden sm:flex">
          <a aria-current="page" className="text-lg" href="#projects">
            {t("navProjects")}
          </a>
        </NavbarItem>

        <NavbarItem className="hidden sm:flex">
          <a className="text-lg" color="foreground" href="#contact">
            {t("navContact")}
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
            >
              {t("navContact")}
            </a>
          </NavbarItem>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
