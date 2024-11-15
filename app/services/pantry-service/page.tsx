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
              At <b>APR</b>, we recognize the importance of a well-maintained
              pantry in creating a professional and efficient workplace. A
              clean, organized, and fully functional pantry not only enhances
              the daily experience of employees but also leaves a lasting
              positive impression on visiting clients. Our experienced team
              provides comprehensive pantry services tailored to meet the unique
              needs of corporate environments.
            </p>
            <p>
              We prioritize hygiene and cleanliness while ensuring smooth daily
              operations. From managing vending machines and dishwashers to
              serving high-profile guests and supporting meetings and events, we
              deliver excellence at every step. By taking care of every detail,
              we allow you to focus on your core business priorities, ensuring a
              seamless and professional experience for both employees and
              visitors.
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
