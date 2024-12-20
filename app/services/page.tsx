import OurServiceSection from "@/components/OurServiceSection";
import PageImageCover from "@/components/PageImageCover";

export default function OurServicePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <PageImageCover
        imgSrc="/assets/images/services-main.jpg"
        alt="Our Services"
        text="Our Services"
      />

      <OurServiceSection heading="More Services" showAllServiceBtn={false} />
    </div>
  );
}
