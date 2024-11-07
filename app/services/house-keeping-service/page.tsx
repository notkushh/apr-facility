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
        <div className="flex gap-10 below-680:flex-col w-[100%]">
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
              Most Corporations pay vast amount of cash on the infrastructure of
              their Offices. At times, several of them entrust the cleansing and
              maintenance of the pricey interiors to amateurs resulting in the
              fitting deteriorate and also the Company needs to incur further
              expenses on repair and renovation. With the proliferation and
              convenience of a good sort of interior materials, primitive
              amateurs either use the incorrect material, wrong procedure or
              improperly clean the things. Several Corporations that had
              undertaken housework conjointly work with in-house employees have
              slowly completed the necessity to use skilled and square measure
              switch over to professional service organizations for housework.
              APR’s SECURITY & FACILITY SERVICES provide solutions to all of
              your housework service connected issues.
            </p>
          </div>
        </div>
        <div className="flex gap-10 below-680:flex-col w-[100%]">
          <div className="flex flex-col gap-10 w-[60%] below-680:w-[100%]">
            <p>
              Routine executive work services are of comprehensive nature, i.e.,
              we offer employees, machines, and materials for cleanup and
              maintenance of company premises, company guest houses, company
              industries, etc. Our customer’s approach is to confirm each visual
              and sanitary cleanup of the premises the least bit times that is
              applied on a composite daily, weekly, and monthly cleanup basis.
              We tend to deploy trained, tough, clothed, and polite government
              work employees alongside the correct direction of consultants.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center w-[40%] below-680:w-[100%]">
            <ImageCard
              src={"/assets/images/house-keeping-image2.jpg"}
              alt={"house-keeping-img1"}
              h={200}
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
