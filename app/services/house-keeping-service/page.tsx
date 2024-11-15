import ImageCard from "@/components/ImageCard";
import OurServiceSection from "@/components/OurServiceSection";
import PageImageCover from "@/components/PageImageCover";

export default function HouseKeepingService() {
  return (
    <div className="flex flex-col justify-center items-center">
      <PageImageCover
        imgSrc="/assets/images/house-keeping-services-main.jpg"
        alt="House Keeping Services"
        text="House Keeping Services"
      />

      <div className="flex flex-col w-[85%] justify-center items-center gap-16 mt-10">
        <div className="flex gap-10 below-680:flex-col w-[100%] items-center">
          <div className="flex flex-col gap-4 items-center w-[40%] below-680:w-[100%]">
            <p className="font-bold text-blue-500 text-2xl">
              About House Keeping Services
            </p>
            <ImageCard
              src={"/assets/images/house-keeping-image1.jpg"}
              alt={"house-keeping-img1"}
              h={250}
              w={"100%"}
              objectFit="contain"
            />
          </div>

          <div className="flex flex-col gap-10 w-[60%] below-680:w-[100%]">
            <p>
              Housekeeping is the Department that deals essentially with
              cleanliness and all ancillary services attached to that. Our
              professionalism makes us a top-level contender in providing the
              Housekeeping Services. APR’s Housekeeping Services are unique due
              to the depth understanding of the customers’ individual needs. On
              the depth of experience, we have built ourselves with the best
              practices.
            </p>

            <p>
              At APR Facility, we understand that a clean and organized
              workspace is essential for productivity and employee satisfaction.
              Our professional corporate housekeeping services are designed to
              meet the unique needs of businesses, ensuring a pristine and
              welcoming environment for both staff and visitors.
            </p>
          </div>
        </div>

        <div className="flex gap-10 below-680:flex-col w-[100%] items-center">
          <div className="flex flex-col gap-5 w-[60%] below-680:w-full">
            <p className="text-blue-500 font-bold text-2xl">
              Our Services include :
            </p>

            <div className="w-full above-680:hidden h-[300px] below-400:w-full">
              <ImageCard
                src={"/assets/images/house-keeping-image2.jpg"}
                alt={"house-keeping-img1"}
                h={"100%"}
                w={"100%"}
                objectFit="contain"
              />
            </div>

            <ol className="list-decimal list-inside pl-7 below-400:pl-2 flex flex-col gap-3">
              <li className="font-bold">Daily Cleaning Operations :</li>
              <p className="ml-4">
                Comprehensive cleaning of workspaces, including desks, meeting
                rooms, and common areas to maintain a tidy and professional
                appearance. Restroom Sanitization: Regular cleaning and
                disinfecting of restrooms to ensure hygiene and comfort.
              </p>

              <li className="font-bold">Specialized Deep Cleaning :</li>
              <p className="ml-4">
                Intensive cleaning services that tackle hard-to-reach areas,
                carpets, and upholstery to refresh your office environment.
                Window Cleaning: Crystal-clear windows enhance the overall look
                of your corporate space.
              </p>

              <li className="font-bold">Waste Management:</li>
              <p className="ml-4">
                Efficient disposal and recycling services to promote an
                eco-friendly workplace.
              </p>

              <li className="font-bold">Floor Care</li>
              <ul className="list-disc pl-10">
                <li>
                  <b>
                    <i>Hard Floor Maintenance : </i>
                  </b>
                  Sweeping, mopping, and buffing to keep floors spotless and
                  safe.
                </li>
                <li>
                  <b>
                    <i>Carpet Care : </i>
                  </b>
                  Regular vacuuming and deep cleaning to maintain the quality
                  and appearance of your carpets.
                </li>
              </ul>

              <li className="font-bold">Supply Management</li>
              <p className="ml-4">
                Monitoring and replenishing cleaning supplies, restroom
                toiletries, and kitchen essentials to ensure your office runs
                smoothly.
              </p>

              <li className="font-bold">Customized Services</li>
            </ol>
          </div>

          <div className="w-[40%] h-[400px] below-680:hidden">
            <ImageCard
              src={"/assets/images/house-keeping-image2.jpg"}
              alt={"house-keeping-img1"}
              h={"100%"}
              w={"100%"}
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      <OurServiceSection heading="More Services" />
    </div>
  );
}
