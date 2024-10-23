"use client"

import * as React from "react"

import NavbarMenu from "@/utils/data/navigationBarData"
import NavigationBarWeb from "./NavigationBar/NavigationBarWeb"
import NavigationBarMobile from "./NavigationBar/NavigationBarMobile"

import { useSidebar } from "@/components/ui/sidebar"
import { Menu } from 'lucide-react';



export function NavigationBar() {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="nav-bar font-medium w-full">
      <p>Logo</p>
      <button onClick={toggleSidebar}>
        <Menu className="above-680:hidden mr-2"/>
      </button>
      <NavigationBarMobile navMenu={NavbarMenu}/>
      <NavigationBarWeb navMenu={NavbarMenu}/>
    </div>
  );
}


