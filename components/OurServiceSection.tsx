import React from "react";
import Cards from "./Cards";
import Data from "@/utils/data/navigationBarData";
import Link from "next/link";

function OurServiceSection({
  heading,
  showAllServiceBtn = true,
}: {
  heading: string;
  showAllServiceBtn?: boolean;
}) {
  const serviceList = Data[1].submenu;

  return (
    <div className="bg-white w-full mb-1 flex justify-center items-center flex-col pb-4">
      <div className="font-medium text-4xl pt-6 pb-6 text-blue-500">
        {heading}
      </div>
      <div className="flex justify-center items-center below-400:flex-col gap-5 flex-wrap">
        {serviceList.map((service, index) => {
          return (
            <Cards
              key={`${service.title}-${index}`}
              src={service.imgSrc}
              alt={service.alt}
              width={350}
              height={400}
              icon={service.icon}
              title={service.title}
              href={service.href}
            />
          );
        })}
      </div>

      {showAllServiceBtn && (
        <Link href="/services">
          <div className="w-fit h-8 bg-slate-400 mt-8 p-6 flex justify-center items-center text-white rounded-sm service-sec-btn-color text-lg font-semibold">
            View All Services
          </div>
        </Link>
      )}
    </div>
  );
}

export default OurServiceSection;
