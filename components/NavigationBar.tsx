"use client";

import * as React from "react";

import NavbarMenu from "@/utils/data/navigationBarData";
import NavigationBarWeb from "./NavigationBar/NavigationBarWeb";
import NavigationBarMobile from "./NavigationBar/NavigationBarMobile";

import { useSidebar } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import SlackLogo from "@/public/assets/images/slackLogo.svg";

export function NavigationBar() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="nav-bar font-medium w-full">
      <div className="pl-[20px]">
        <SlackLogo />
      </div>
      <button onClick={toggleSidebar}>
        <Menu className="menu-toggle above-680:hidden mr-2" />
      </button>
      <NavigationBarMobile navMenu={NavbarMenu} />
      <NavigationBarWeb navMenu={NavbarMenu} />
    </header>
  );
}
