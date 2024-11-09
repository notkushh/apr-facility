import Carousel from "@/components/Carousel/index";
import OurServiceSection from "@/components/OurServiceSection";

export default function Home() {
  return (
    <div className="">
      <Carousel />

      <div className="flex flex-col w-full justify-center items-center gap-16 mt-10 mb-10">
        <div className=" w-[75%] below-680:w-[85%] flex gap-5 flex-col justify-between">
          <div className="flex flex-col items-start w-[100%]">
            <p className="font-bold text-blue-500 text-3xl">
              APR Facilities Services
            </p>
            <p className="text-xs">
              Your Trusted Partner for Essential Services
            </p>
          </div>

          <div className="flex flex-col gap-10 w-[100%]">
            <p>
              At APR, we are committed to making your life easier with our
              comprehensive range of services. Whether you need reliable
              <b> security solutions</b>, professional <b>pest control</b>,
              meticulous <b> housekeeping services</b>, or convenient
              <b> pantry</b> restocking, we've got you covered. Our team of
              experts is dedicated to delivering top-quality service with a
              focus on convenience, safety, and satisfaction.
            </p>
            <p>
              Explore our offerings and discover how we can help you maintain a
              safe, clean, and well-organized space. With APR, you can always
              count on excellence, reliability, and peace of mind.
            </p>
          </div>
        </div>
      </div>

      <OurServiceSection heading="Our Services" />
    </div>
  );
}
