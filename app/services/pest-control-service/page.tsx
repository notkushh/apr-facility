import ImageCard from "@/components/ImageCard";
import OurServiceSection from "@/components/OurServiceSection";
import PageImageCover from "@/components/PageImageCover";

export default function PestControlService() {
  return (
    <div className="flex flex-col justify-center items-center">
      <PageImageCover
        imgSrc="/assets/images/pest-control-cover.jpg"
        alt="Pest Control"
        text="Pest Control"
      />

      <div className="flex flex-col w-[85%] justify-center items-center gap-16 mt-10">
        <div className="flex gap-10 below-680:flex-col w-[100%] justify-between items-center">
          <div className="flex flex-col gap-4 items-center w-[35%] below-680:w-[100%]">
            <p className="font-bold text-blue-500 text-2xl">
              About Pest Control Services
            </p>
            <ImageCard
              src={"/assets/images/pest-control-image1.jpg"}
              alt={"pest-control-1"}
              h={200}
              w={"100%"}
              objectFit="cover"
            />
          </div>

          <div className="flex flex-col gap-10 w-[60%] below-680:w-[100%]">
            <p>
              Presence of Pests, Rodent & Termite such as flies, bugs, ants,
              roaches, and mice in the premises can cause a lot of problems for
              you. It creates an unhealthy environment around you and causes
              infections and diseases. So, you must do something to get rid of
              such type of an unpleasant atmosphere. Termite treatment should be
              done on a priority basis as it destroys the things slowly and
              builds up their own space. To abolish pests from your space, one
              of the best options is to call a Pest Control Service provider.
            </p>
          </div>
        </div>
        <div className="flex gap-10 below-680:flex-col w-[100%]">
          <div className="flex flex-col gap-5 w-[100%]">
            <p className="text-blue-500 font-bold text-2xl">
              We offer the following Pest Control Services
            </p>
            <ul className="list-disc pl-7">
              <li>Rodent Trappers</li>
              <li>Gum Stickers</li>
              <li>Drilling and injecting chemicals </li>
              <li>
                The control measures will be effective against pests like
                cockroaches, silverfish, black ants, red ants, spiders,
                crickets, rodents, mice & termites.
              </li>
              <li>
                The process involves spraying the entire drainage and
                surrounding area with particular reference to pantries, canteen,
                cupboards, stores, main holes, toilets, etc.
              </li>
              <li>
                Dry chemicals, along with the foodstuff, will be kept in the
                required spots. Rats will be dragged after eating them, which
                gives them a necessary warning, and they will run away.
              </li>
            </ul>

            <p>
              With APR you are totally protected. Our experienced and friendly
              pest control technicians do everything for you is insured and
              guaranteed. We can help you to get rid of the pests & rodents of
              any type with a specific solution.
            </p>
          </div>
        </div>
      </div>
      <OurServiceSection heading="More Services" />
    </div>
  );
}
