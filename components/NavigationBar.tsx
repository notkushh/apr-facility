"use client"

import * as React from "react"

import NavbarMenu from "@/utils/data/navigationBarData"
import NavigationBarWeb from "./NavigationBar/NavigationBarWeb"
import NavigationBarMobile from "./NavigationBar/NavigationBarMobile"
import Image from "next/image"

import { useSidebar } from "@/components/ui/sidebar"
import { Menu } from 'lucide-react';



export function NavigationBar() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="nav-bar font-medium w-full">
      <Image
        src="https://nextjs.org/icons/vercel.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
      />
      <button onClick={toggleSidebar}>
        <Menu className="above-680:hidden mr-2"/>
      </button>
      <NavigationBarMobile navMenu={NavbarMenu}/>
      <NavigationBarWeb navMenu={NavbarMenu}/>
    </header>
  );
}


