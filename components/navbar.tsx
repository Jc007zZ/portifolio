
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
  Logo,
} from "@/components/icons";


import Link from 'next/link'
import { ThemeSwitch }  from '@/components/theme-switch'


export default  function App() {
  return (
    <Navbar maxWidth="2xl" className="fixed pt-[0.3rem] px-10 ">
        
          <NavbarContent className=" gap-4" justify="center">
                <NavbarBrand>
                  <p id="jcLogo" className="font-bold text-2xl text-sky-400  -ml-6">Jc007zZ</p>
                </NavbarBrand>

              <NavbarItem  className="hidden sm:flex">
                <Link color="foreground" href="#" className="text-lg">
                  Skills
                </Link>
              </NavbarItem>

              <NavbarItem isActive className="hidden sm:flex">
                <Link href="#" aria-current="page" className="text-lg">
                  Projects
                </Link>
              </NavbarItem>

              <NavbarItem className="hidden sm:flex">
                <Link color="foreground" href="#" className="text-lg">
                  Contact
                </Link>
              </NavbarItem>
          </NavbarContent>
          
      
     

      <NavbarContent  justify="end">
         <DiscordIcon/>
         <GithubIcon/>
        <ThemeSwitch/>
        <NavbarMenuToggle  className="sm:hidden"/>

      </NavbarContent>

      <NavbarMenu >
        <NavbarMenuItem className="flex flex-col gap-4">
          <NavbarItem>
            <Link color="foreground" href="#" className="text-lg">
              Skills
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" className="text-lg">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className="text-lg">
              Contact
            </Link>
          </NavbarItem>
          <NavbarItem>
          </NavbarItem>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}