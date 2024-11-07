import OurServiceSection from "@/components/OurServiceSection";
import PageImageCover from "@/components/PageImageCover";
import ClientInfo from "@/utils/data/clientInfo";
import ImageCard from "@/components/ImageCard";

export default function ClientPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center pb-7">
      <PageImageCover
        imgSrc="/assets/images/client-main.avif"
        alt="Client"
        text="Clients"
      />

      <div className="flex flex-col justify-center items-center below-400:w-full w-[80%] p-7 mt-4">
        <p className="text-3xl text-blue-500 font-bold">Our Amazing Clients</p>
        <div className="flex flex-wrap gap-12 justify-center items-center mt-10">
          {ClientInfo.map((client, index) => {
            return (
              <ImageCard
                key={`${client.name}-${index}`}
                src={client.imgSrc}
                alt={client.name}
                h={150}
                w={150}
                objectFit="contain"
              />
            );
          })}
        </div>
      </div>

      <OurServiceSection heading={"Our Services"} />
    </div>
  );
}
