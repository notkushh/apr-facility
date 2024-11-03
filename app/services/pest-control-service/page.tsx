import OurServiceSection from "@/components/OurServiceSection";
import PageImageCover from "@/components/PageImageCover";

export default function PestControlService() {
  return (
    <div>
      <PageImageCover
        imgSrc="/assets/images/pest-control-cover.jpg"
        alt="Pest Control"
        text="Pest Control"
      />

      <OurServiceSection heading="More Services" />
    </div>
  );
}
