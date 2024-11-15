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
                Established in 2024, APR Facility was founded on the belief that
                quality facility management is essential for a thriving business
                environment. Our goal is to provide reliable, top-tier services
                that address all aspects of facility management under one roof.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-[65%] below-400:w-full">
              <p>
                APR Facility Services Pvt. Ltd. is dedicated to providing
                high-quality, comprehensive facility management solutions
                tailored to meet the unique needs of our clients. From
                housekeeping and pantry services to security and pest control,
                we offer a one-stop solution that ensures your workspace is
                clean, safe, and efficient. With a focus on operational
                excellence and customer satisfaction, we strive to make your
                environment hassle-free and conducive to productivity. Our team
                is committed to eco-friendly practices, using green products and
                sustainable methods that support a healthier workspace and
                reduce environmental impact.
              </p>

              <p>
                Our customer-centric approach drives us to listen closely to
                client needs, create tailored solutions, and build long-lasting
                relationships. With a presence across major cities in India and
                24/7 support, we’re here to support your business whenever and
                wherever you need us.
              </p>
            </div>
          </div>

          <div>
            <p className="text-4xl below-400:text-2xl text-blue-500 font-bold">
              Why Choose Us?
            </p>

            <ul className="list-disc pl-12 below-400:pl-8 mt-5 mb-10">
              <li>
                We have a strong track record of delivering consistent,
                high-quality services across various industries.
              </li>
              <li>
                Our team is highly experienced and regularly trained to ensure
                professional and reliable service.
              </li>
              <li>
                We provide a comprehensive range of tailored facility management
                services, including housekeeping, security, pantry, and pest
                control.
              </li>
              <li>
                With a nationwide presence and 24/7 support, we are always
                available to meet your needs.
              </li>
              <li>
                All our services are handled in-house, ensuring strict quality
                control and accountability.
              </li>
              <li>
                We prioritize eco-friendly practices, using sustainable products
                and methods for a healthier environment.
              </li>
              <li>
                Our customer-focused approach ensures we listen and adapt to
                your specific needs, fostering long-term relationships.
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
