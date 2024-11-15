"use client";

import CardWithHeading from "@/components/CardWithHeading";
import OurServiceSection from "@/components/OurServiceSection";
import PageImageCover from "@/components/PageImageCover";
import { LucideProps } from "lucide-react";
import { MapPinned, Phone, Mail } from "lucide-react";

// import dynamic from "next/dynamic";

// const MapComponent = dynamic(() => import("@/components/MapComponent"), {
//   ssr: false,
// });

export default function ContactPage() {
  const getContactField = (
    Icon: React.FC<LucideProps>,
    fieldName: string,
    fieldText: string
  ) => {
    return (
      <div className="flex flex-row  gap-2">
        <div className="bg-white rounded-full p-2">
          <Icon />
        </div>
        <div className=" flex flex-col gap-1">
          <p className="text-lg text-blue-500 font-bold">{fieldName}</p>
          <p className="text-base">{fieldText}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2 w-full items-center justify-center">
      <PageImageCover
        imgSrc="/assets/images/customer-support-main.webp"
        alt="Contact-us"
        text="Contact Us"
      />

      <div className="below-680:w-[85%] w-[55%] h-fit flex flex-col justify-center items-center gap-5 flex-wrap">
        <CardWithHeading text={"Get In Touch"}>
          <div className="flex flex-col gap-4 contact-us">
            <div className="flex flex-col items-start gap-6 text-lg below-400:text-base mt-3">
              {getContactField(
                MapPinned,
                "Address",
                "Plot no. 222, B NKV Residency Behind DPG College, Gurgaon, Haryana-122001"
              )}

              {getContactField(Phone, "Phone", "+91-9310774669")}

              {getContactField(Mail, "Email", "aprfacility@gmail.com")}
            </div>
          </div>
        </CardWithHeading>

        <CardWithHeading text={"Find Us"}>
          {/* <MapComponent
            height={200}
            width={"100%"}
            latitude={27.875782}
            longitude={78.073635}
          /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.8843577779217!2d77.01892757532758!3d28.42274607577993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1807dbc49a3d%3A0x2584bbef47ff4c41!2s222%2C%20NKV%20Residency%20Rd%2C%20A-Block%2C%20Sector%2072A%2C%20Sector%2072%2C%20Gurugram%2C%20Haryana%20122004!5e0!3m2!1sen!2sin!4v1731681695862!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location on Google Maps"
          ></iframe>
        </CardWithHeading>
      </div>

      <OurServiceSection heading={"Our Services"} />
    </div>
  );
}
