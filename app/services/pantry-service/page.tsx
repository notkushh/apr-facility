import OurServiceSection from "@/components/OurServiceSection";
import PageImageCover from "@/components/PageImageCover";

export default function PantryService() {
  return (
    <div>
      <PageImageCover
        imgSrc="/assets/images/pantry-services-main1.jpg"
        alt="Pantry Services"
        text="Pantry Services"
      />

      <OurServiceSection heading="More Services" />
    </div>
  );
}
