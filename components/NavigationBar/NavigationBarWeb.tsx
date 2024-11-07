import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { NavItem } from "@/utils/data/navigationBarData";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function NavigationBarWeb({ navMenu }: { navMenu: NavItem[] }) {
  const getNavbarMenuComponent = (navItem: NavItem) => {
    if (navItem.submenu.length === 0) {
      return (
        <NavigationMenuItem key={navItem.title}>
          <Link href={navItem.href} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className="font-extrabold text-base">{navItem.title}</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      );
    } else {
      return (
        <NavigationMenuItem key={navItem.title}>
          <NavigationMenuTrigger>
            <p className="font-extrabold text-base">{navItem.title}</p>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col w-[220px]">
              {navItem.submenu.map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  pageLink={service.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }
  };

  return (
    <NavigationMenu className="flex w-full p-[8px] below-680:hidden">
      <NavigationMenuList>
        {navMenu.map((navItem) => getNavbarMenuComponent(navItem))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ title, pageLink }: { title: string; pageLink: any }, ref) => {
    return (
      <li>
        <NavigationMenuLink
          asChild
          className={cn("w-[220px] top-[-10px]", navigationMenuTriggerStyle())}
        >
          <Link
            href={pageLink}
            className={cn(
              "w-[220px] h-full block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-black"
            )}
          >
            <div className="text-sm font-medium leading-none w-[220px] hover:text-black">
              <p className="text-sm text-gray-500">{title}</p>
            </div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default NavigationBarWeb;
