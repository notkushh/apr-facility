import ImageCard from "@/components/ImageCard";
import OurServiceSection from "@/components/OurServiceSection";
import PageImageCover from "@/components/PageImageCover";

export default function PantryService() {
  return (
    <div className="flex flex-col justify-center items-center">
      <PageImageCover
        imgSrc="/assets/images/pantry-services-main1.jpg"
        alt="Pantry Services"
        text="Pantry Services"
      />

      <div className="flex flex-col w-[85%] justify-center items-center gap-16 mt-10">
        <div className="flex gap-10 below-680:flex-col w-[100%] justify-between items-center">
          <div className="flex flex-col gap-4 items-center w-[40%] below-680:w-[100%]">
            <p className="font-bold text-blue-500 text-2xl">
              About Pantry Services
            </p>
            <ImageCard
              src={"/assets/images/pantry-services-image1.jpg"}
              alt={"pantry-service"}
              h={200}
              w={"100%"}
              objectFit="cover"
            />
          </div>

          <div className="flex flex-col gap-10 w-[60%] below-680:w-[100%]">
            <p>
              A pantry is an area where Tea / Coffee, Dishes, food or eatables
              are stored and served in an ancillary capacity to the cafeteria.
              The well-trained professional will always be deployed at the
              pantry to maintain it and perform the desired errands. There are
              so many reasons why the Pantry point, where Tea and Coffee service
              is mandatory for any Organization. At first, the professional
              set-up leaves a very positive impression on the minds of the
              clients who visit your office. And most importantly, our job is
              not only to provide professional service but also maintaining
              proper hygiene in the Pantry and its surroundings. We are well
              capable of understanding the different requirements of various
              Corporate setups. Our pantry staff are well trained in different
              dimensions such as operating the vending machines, using of
              dishwashing machines, serving to high designated persons,
              organizing meetings & events etc.
            </p>
          </div>
        </div>
        <div className="flex gap-10 below-680:flex-col w-[100%]">
          <div className="flex flex-col gap-5 w-[100%]">
            <p className="text-blue-500 font-bold text-2xl">
              Our Pantry Services include :
            </p>
            <ul className="list-disc pl-7">
              <li>Serving with elegance & etiquette</li>
              <li>Well-trained professionals</li>
              <li>
                Services that are designed by our experts in such a way that
                clients get the finest results
              </li>
              <li>
                The current market trends and execute these services in the best
                possible way.
              </li>
              <li>
                Excellent Corporate Pantry services characterized by hygiene,
                range & nutritive value.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <OurServiceSection heading="More Services" />
    </div>
  );
}
