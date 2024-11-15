import ImageCard from "@/components/ImageCard";
import OurServiceSection from "@/components/OurServiceSection";
import PageImageCover from "@/components/PageImageCover";

export default function SecurityService() {
  return (
    <div className="flex flex-col justify-center items-center">
      <PageImageCover
        imgSrc="/assets/images/security-service-main.webp"
        alt="Security"
        text="Security Services"
      />

      <div className="flex flex-col w-[85%] justify-center items-center gap-16 mt-10">
        <div className="flex gap-10 below-680:flex-col w-[100%] justify-between items-center">
          <div className="flex flex-col gap-4 items-center w-[40%] below-680:w-[100%]">
            <p className="font-bold text-blue-500 text-2xl">
              About Security Services
            </p>
            <ImageCard
              src={"/assets/images/security-service-image1.png"}
              alt={"pest-control-1"}
              h={200}
              w={"100%"}
              objectFit="cover"
            />
          </div>

          <div className="flex flex-col gap-5 w-[60%] below-680:w-[100%]">
            <p>
              APR Facility’s Security Services are designed to create a safe and
              welcoming environment for your employees, clients, and visitors.
              Our rigorously trained and highly professional security personnel
              are equipped to handle diverse security challenges with expertise.
              Through robust protocols, advanced solutions like access control
              and CCTV monitoring, and vigilant monitoring, we ensure your
              premises remain secure and protected from unauthorized access or
              risks. By safeguarding your assets and maintaining a secure
              environment, we instill confidence in everyone who enters your
              facility, enabling you to focus on innovation and growth without
              concern.
            </p>
          </div>
        </div>
        <div className="flex gap-10 below-680:flex-col w-[100%]">
          <div className="flex flex-col gap-5 w-[100%]">
            <p className="text-blue-500 font-bold ">You can contact us for:</p>
            <ul className="list-disc pl-7">
              <li>Security Guards (Male / Female)</li>
              <li>Security Gunmen</li>
              <li>Bouncers and</li>
              <li>Personal Security Officers (PSO)</li>
            </ul>

            <p>Your Security is our commitment.</p>
          </div>
        </div>
      </div>

      <OurServiceSection heading="More Services" />
    </div>
  );
}
