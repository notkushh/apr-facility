import React from "react";
import EmblaCarousel from "./Carousel";
import { EmblaOptionsType } from "embla-carousel";
import "./css/embla.css";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;

type carouselImageType = {
  src: string;
  text: string;
  desc: string;
};
const carouselImagesSlides: carouselImageType[] = [
  {
    src: "/assets/images/pantry-services-main1.jpg",
    text: "PANTRY SERVICE",
    desc: "APR is your trusted partner for seamless pantry services, offering hassle-free delivery and restocking of essential food and household items, ensuring your home or business stays well-supplied and organized.",
  },
  {
    src: "/assets/images/house-keeping-services-main.jpg",
    text: "HOUSE KEEPING SERVICE",
    desc: "APR offers professional housekeeping services, delivering top-notch cleaning and maintenance to keep your home or office spotless, organized, and inviting at all times.",
  },
  {
    src: "/assets/images/security-service-main.webp",
    text: "SECURITY SERVICE",
    desc: "APR offers reliable security services, providing comprehensive protection for your home, business, or property with trained professionals and advanced solutions to ensure peace of mind 24/7.",
  },
  {
    src: "/assets/images/pest-control-cover.jpg",
    text: "PEST CONTROL",
    desc: "APR provides effective pest control services, using safe and eco-friendly methods to eliminate and prevent pests, ensuring a clean, healthy, and pest-free environment for your home or business.",
  },
];

const Carousel: React.FC = () => (
  <>
    <EmblaCarousel slides={carouselImagesSlides} options={OPTIONS} />
  </>
);

export default Carousel;
