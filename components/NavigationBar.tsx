"use client";

import * as React from "react";

import NavbarMenu from "@/utils/data/navigationBarData";
import NavigationBarWeb from "./NavigationBar/NavigationBarWeb";
import NavigationBarMobile from "./NavigationBar/NavigationBarMobile";

import { useSidebar } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import Logo from "@/public/assets/images/logo/apr-facility-logo.svg";
import Link from "next/link";

export function NavigationBar() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="nav-bar font-medium w-full">
      <div className="pl-[20px]">
        <Link href="/">
          <Logo width={150} height={500} />
        </Link>
      </div>
      <div onClick={toggleSidebar}>
        <Menu className="above-680:hidden mr-2" style={{ color: "#383636" }} />
      </div>
      <NavigationBarMobile navMenu={NavbarMenu} />
      <NavigationBarWeb navMenu={NavbarMenu} />
    </header>
  );
}
