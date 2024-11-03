import { 
  LucideProps, 
  DoorOpen , 
  House,
  Users , 
  Phone,
  LibraryBig,
  BugOff,
  ShieldPlus ,
  CookingPot,
  Wrench  } from "lucide-react";

interface NavItem {
    title: string;
    href: string;
    icon: React.FC<LucideProps>
    submenu: { title: string; href: string, imgSrc : string, alt: string, icon: React.FC<LucideProps> }[];
  }
  
const Data : NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: House,
    submenu: [],
  },
  {
    title: "Our Services",
    href: "/services",
    icon: Wrench ,
    submenu: [
      {
        title: "House Keeping Services",
        href: "/services/house-keeping-service",
        imgSrc: '/assets/images/house-cleaning-service-card.jpeg',
        alt: 'House Keeping Service',
        icon: DoorOpen 
      },
      {
        title: "Pantry Service",
        href: "/services/pantry-service",
        imgSrc: '/assets/images/pantry-service-card.jpg',
        alt: 'Pantry Service',
        icon: CookingPot 
      },
      {
        title: "Security Service",
        href: "/services/security-service",
        imgSrc: '/assets/images/security-service-card.jpg',
        alt: 'Security Service',
        icon: ShieldPlus 
      },
      {
        title: "Pest Control",
        href: "/services/pest-control-service",
        imgSrc: '/assets/images/pest-control-card.jpg',
        alt: 'Pest Control',
        icon: BugOff 
      }
    ],
  },
  {
    title: "Clients",
    href: "/clients",
    icon: Users,
    submenu: [],
  },
  {
    title: "About Us",
    href: "/about",
    icon: LibraryBig ,
    submenu: [],
  }, 
  {
    title: "Contact Us",
    href: "/contact",
    icon: Phone ,
    submenu: [],
  }
];

export default Data;
export type {NavItem};