
'use client'
import {  
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";

import {
  GithubIcon,
  DiscordIcon,
} from "@/components/icons";


import Link from 'next/link'
import { ThemeSwitch }  from '@/components/theme-switch'


export default  function App() {
  function HandleItem(){
    const menu = document.getElementById('menu')
    menu?.click()

  }

  return (
    <Navbar maxWidth="2xl" className="fixed pt-[0.3rem] px-10 ">
        
          <NavbarContent className=" gap-4" justify="center">
                <NavbarBrand>
                  <a href="#home" id="jcLogo" className="font-bold text-2xl text-sky-400  -ml-6">Jc007zZ</a>
                </NavbarBrand>

              <NavbarItem  className="hidden sm:flex">
                <a color="foreground" href="#skills" className="text-lg">
                  Skills
                </a>
              </NavbarItem>

              <NavbarItem isActive className="hidden sm:flex">
                <a href="#projects" aria-current="page" className="text-lg">
                  Projects
                </a>
              </NavbarItem>

              <NavbarItem className="hidden sm:flex">
                <a color="foreground" href="#contact" className="text-lg">
                  Contact
                </a>
              </NavbarItem>
          </NavbarContent>
          
      
     

      <NavbarContent  justify="end">
         <a href="https://www.linkedin.com/in/jo%C3%A3o-carlos-b1365a264/" target="_blank"><i className="fa-brands fa-linkedin scale-[1.2] cursor-pointer hover:text-zinc-400 transition-all hover:scale-125"></i></a>
         <DiscordIcon className="cursor-pointer hover:text-zinc-400 transition-all hover:scale-105"/>
         <GithubIcon className="cursor-pointer hover:text-zinc-400 transition-all hover:scale-105"/>
        <ThemeSwitch className="cursor-pointer hover:text-zinc-400 transition-all hover:scale-105"/>
        <NavbarMenuToggle id="menu"  className="sm:hidden"/>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem className="flex flex-col gap-4">
            <NavbarItem>
              <a  onClick={HandleItem} color="foreground" href="#skills" className="text-lg">
                Skills
              </a>
            </NavbarItem>
          <NavbarItem isActive>
          <a  onClick={HandleItem} color="foreground" href="#projects" className="text-lg">
                Projects
              </a>
          </NavbarItem>
          <NavbarItem>
          <a  onClick={HandleItem} color="foreground" href="#contact" className="text-lg">
                Contact
              </a>
          </NavbarItem>
          
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}