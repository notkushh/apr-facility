import React from "react";
import Image from "next/image";
import { LucideProps } from "lucide-react";
import Link from "next/link";

interface CardProp {
  src: string;
  alt: string;
  icon: React.FC<LucideProps>;
  width: number;
  height: number;
  title: string;
  href: string;
}

function Cards(props: CardProp) {
  return (
    <Link href={props.href}>
      <div
        style={{
          width: props.width,
          height: props.height,
        }}
        className="relative rounded-lg overflow-hidden flex justify-center items-center"
      >
        <Image
          src={props.src}
          alt={props.alt}
          layout="fill"
          objectFit="cover"
        />

        <div className="tranparent-black-bg w-full h-full z-10 flex justify-center items-center">
          <div className="absolute bottom-[30%] left-[10%]">
            <div className="bg-white w-fit p-3 rounded-full mb-7">
              <props.icon />
            </div>
            <div className="text-2xl text-white font-semibold">
              {props.title}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Cards;
