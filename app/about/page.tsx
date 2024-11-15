import PageImageCover from "@/components/PageImageCover";
import Tabs from "@/components/Tabs";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center shadow-pageSaprating pb-7">
      <PageImageCover
        imgSrc="/assets/images/about-us-cover.jpg"
        alt="About Us"
        text="About Us"
      />

      <div className="below-400:w-full w-[80%] pl-7 pr-7 mt-8 text-lg text-gray-500">
        <div className="flex flex-col mb-12 w-full">
          <div className="flex gap-12 below-400:flex-col w-full mb-8">
            <div className="flex flex-col gap-5 w-[35%] below-400:w-full">
              <p className="text-2xl text-blue-500 font-bold">
                About APR Facilities Private Limited
              </p>
              <p>
                Founded in the year 2024, it is one of the most progressing
                independent service partners in India, having a head office in
                Gurgaon with a PAN India spread. We are engaged in the field of
                Facility Management & HR Solutions.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-[65%] below-400:w-full">
              <p>
                The thrust of APR has been for the most part outlined and
                embodied by the dedicated and tireless pursuit of excellence by
                Senior Ex-Defense personnel and a dedicated team of principal
                consultants. APR’s assets include dedicated personnel and a team
                of execs powering the expansion within the different verticals
                of the cluster operations. We’ve gone to get on the highest by
                interrupting the winning culture, operational within the highest
                standards of ethics and values and trying for excellence in
                client services and quality. Our journey ahead is full of
                enthusiasm and immense potential we tend to. We stay committed
                to constructing a distinction for every one of our shoppers and
                the sectors we serve. We bring our experience to work
                collaboratively with our Clients to deliver the support they
                need for the future.
              </p>

              <p>
                We help you to achieve the maximum efficiency of productivity as
                per your strategic goals.
              </p>
            </div>
          </div>

          <div>
            <p className="text-4xl below-400:text-2xl text-blue-500 font-bold">
              Why Choose Us?
            </p>

            <ul className="list-disc pl-12 below-400:pl-8 mt-5 mb-10">
              <li>
                APR understands that every customer is unique, hence, we provide
                excellent customized customer service.
              </li>
              <li>
                APR adjusts all capabilities of its service delivery according
                to its customers’ needs.
              </li>
              <li>
                We believe in a robust impeccable value model for our customers
                with the approach of integrity, transparency, and
                customer-centricity.
              </li>
              <li>
                Through the use of local resources and global expertise, APR can
                optimize its service schedule by incorporating the best
                available resources.
              </li>
              <li>
                Local resources are given priority to optimize and economize the
                project costs.
              </li>
              <li>
                APR’s dedicated personnel are available to assist with the
                project support and execution to ensure the utmost satisfaction.
              </li>
            </ul>

            <p>
              We regard ourselves as committed to serving the community as
              responsible citizens.
            </p>
          </div>
        </div>

        <Tabs />
      </div>
    </div>
  );
}
