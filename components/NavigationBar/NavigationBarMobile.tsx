"use client";

import React, { useState } from "react";
import { NavItem } from "@/utils/data/navigationBarData";
import Link from "next/link";

import { ChevronDown } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

function NavigationBarMobile({ navMenu }: { navMenu: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const getSidebarSubmenuComponent = (navItem: NavItem) => {
    if (navItem.submenu.length === 0) {
      return (
        <SidebarMenuItem key={navItem.title}>
          <SidebarMenuButton asChild className="mb-2">
            <Link href={navItem.href}>
              <div className="flex justify-center items-center gap-2">
                <navItem.icon />
                <span className="text-lg">{navItem.title}</span>
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      );
    } else {
      return (
        <Collapsible
          key={navItem.title}
          defaultOpen={false}
          className="group/collapsible"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild className="mb-2">
              <SidebarMenuButton>
                <div
                  className="flex w-full justify-between"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div className="flex justify-center items-center gap-2">
                    <navItem.icon />
                    <span className="text-lg">{navItem.title}</span>
                  </div>
                  {/* Conditionally apply rotation class based on `isOpen` state */}
                  <ChevronDown
                    className={`${
                      isOpen ? "rotate-180" : "rotate-0"
                    } transition-transform duration-300`}
                  />
                </div>
              </SidebarMenuButton>
            </CollapsibleTrigger>
          </SidebarMenuItem>

          <CollapsibleContent>
            <SidebarMenuSub>
              {navItem.submenu.map((subItem) => (
                <SidebarMenuSubItem
                  key={subItem.title}
                  className="hover:bg-gray-100 p-[4px] pl-1"
                >
                  <Link href={subItem.href}>
                    <p>{subItem.title}</p>
                  </Link>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      );
    }
  };

  return (
    <Sidebar side="right">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl text-slate-700 mb-4">
            APR Facilities
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="">
              {navMenu.map((item) => getSidebarSubmenuComponent(item))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default NavigationBarMobile;
