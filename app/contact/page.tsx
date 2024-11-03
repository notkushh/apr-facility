import CardWithHeading from "@/components/CardWithHeading";
import MapComponent from "@/components/MapComponent";
import OurServiceSection from "@/components/OurServiceSection";
import PageImageCover from "@/components/PageImageCover";
import { LucideProps } from "lucide-react";
import { MapPinned, Phone, Mail } from "lucide-react";

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
          <p>{fieldText}</p>
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

      <div className="below-680:w-[85%] w-[55%] h-fit flex justify-center items-center">
        <div>
          <MapComponent />
        </div>
        <CardWithHeading text={"Get In Touch"}>
          <div className="flex flex-col gap-4 contact-us">
            <div className="flex flex-col items-start gap-6 text-lg below-400:text-base mt-3">
              {getContactField(
                MapPinned,
                "Address",
                "H.N. 222B, NKV Residency Behind DPG College, Gurgaon, Haryana-122001"
              )}

              {getContactField(Phone, "Phone", "+91-9310774669")}

              {getContactField(Mail, "Email", "aprfacility@gmail.com")}
            </div>
          </div>
        </CardWithHeading>
      </div>

      <OurServiceSection heading={"Our Services"} />
    </div>
  );
}
