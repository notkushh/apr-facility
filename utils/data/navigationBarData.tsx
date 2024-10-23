interface NavItem {
    title: string;
    href: string;
    submenu: { title: string; href: string }[];
  }
  
const NavbarMenu : NavItem[] = [
  {
    title: "Home",
    href: "/",
    submenu: [],
  },
  {
    title: "Our Services",
    href: "/services",
    submenu: [
      {
        title: "House Keeping Services",
        href: "/services/house-keeping-service",
      },
      {
        title: "Pantry Service",
        href: "/services/pantry-service",
      },
      {
        title: "Security Service",
        href: "/services/security-service",
      },
      {
        title: "Pest Control",
        href: "/services/pest-control-service",
      }
    ],
  },
  {
    title: "Clients",
    href: "/clients",
    submenu: [],
  },
  {
    title: "About Us",
    href: "/about",
    submenu: [],
  }, 
  {
    title: "Contact Us",
    href: "/contact",
    submenu: [],
  }
];

export default NavbarMenu;
export type {NavItem};