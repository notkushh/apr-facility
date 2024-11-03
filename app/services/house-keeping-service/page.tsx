import OurServiceSection from "@/components/OurServiceSection";
import PageImageCover from "@/components/PageImageCover";

export default function HouseKeepingService() {
  return (
    <div>
      <PageImageCover
        imgSrc="/assets/images/house-keeping-services-main1.jpg"
        alt="House Keeping Services"
        text="House Keeping Services"
      />

      <OurServiceSection heading="More Services" />
    </div>
  );
}
