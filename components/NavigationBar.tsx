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
      <div onClick={toggleSidebar}>
        <Menu className="above-680:hidden mr-2" style={{ color: "#383636" }} />
      </div>
      <NavigationBarMobile navMenu={NavbarMenu} />
      <NavigationBarWeb navMenu={NavbarMenu} />
    </header>
  );
}
