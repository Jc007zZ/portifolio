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

import { GithubIcon, DiscordIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";

export default function App() {
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
            Jc007zZ
          </a>
        </NavbarBrand>

        <NavbarItem className="hidden sm:flex">
          <a className="text-lg" color="foreground" href="#skills">
            Skills
          </a>
        </NavbarItem>

        <NavbarItem isActive className="hidden sm:flex">
          <a aria-current="page" className="text-lg" href="#projects">
            Projects
          </a>
        </NavbarItem>

        <NavbarItem className="hidden sm:flex">
          <a className="text-lg" color="foreground" href="#contact">
            Contact
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
              Skills
            </a>
          </NavbarItem>
          <NavbarItem isActive>
            <a
              className="text-lg"
              color="foreground"
              href="#projects"
              onClick={HandleItem}
            >
              Projects
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              className="text-lg"
              color="foreground"
              href="#contact"
              onClick={HandleItem}
            >
              Contact
            </a>
          </NavbarItem>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
