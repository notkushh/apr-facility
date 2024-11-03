import OurServiceSection from "@/components/OurServiceSection";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex flex-col gap-2 w-full items-center justify-center">
        {children}

        <OurServiceSection heading={"Our Services"} />
      </div>
    </section>
  );
}
