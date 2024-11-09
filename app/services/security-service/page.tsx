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
              About Pantry Services
            </p>
            <ImageCard
              src={"/assets/images/security-service-image1.png"}
              alt={"pest-control-1"}
              h={200}
              w={"100%"}
              objectFit="cover"
            />
          </div>

          <div className="flex flex-col gap-10 w-[60%] below-680:w-[100%]">
            <p>
              SSOS provides Security Services to corporates and individuals. We
              have professional and trained Security Guards to protect your
              property from fire, theft, attacks, demolition and illegal
              activities. Our security team works under the guidance of senior
              ex-army officers. Our guards’ physique will match to the army
              standards and their communication skills are excellent. We provide
              personnel to maintain high security at Offices, Buildings,
              Shopping Malls, Banks, Hospitals, Educational Institutions,
              Hotels, ATMs, and Parking lot etc. We also provide digital
              security devices and metal detectors for checking and verification
              at entry point of the premises.
            </p>
          </div>
        </div>
        <div className="flex gap-10 below-680:flex-col w-[100%]">
          <div className="flex flex-col gap-5 w-[100%]">
            <p className="text-blue-500 font-bold ">You can contact us for:</p>
            <ul className="list-disc pl-7">
              <li>Security Guards (Male / Female)</li>
              <li>Security Gunmen</li>
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
