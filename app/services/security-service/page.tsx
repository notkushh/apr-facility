import OurServiceSection from "@/components/OurServiceSection";
import PageImageCover from "@/components/PageImageCover";

export default function SecurityService() {
  return (
    <div>
      <PageImageCover
        imgSrc="/assets/images/security-service-main.webp"
        alt="Security"
        text="Security Services"
      />

      <OurServiceSection heading="More Services" />
    </div>
  );
}
