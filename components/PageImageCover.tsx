import React from "react";
import Image from "next/image";

function PageImageCover({
  imgSrc,
  text,
  alt,
}: {
  imgSrc: string;
  text: string;
  alt: string;
}) {
  return (
    <div className="tranparent-black-bg z-1 relative w-full h-[400px] overflow-hidden items-center justify-center flex">
      <Image src={imgSrc} alt={alt} layout="fill" objectFit="cover" />
      <div className="tranparent-black-bg w-full h-full z-[2] items-center justify-center flex">
        <h1 className="absolute text-white font-semibold below-400:text-3xl text-5xl">
          {text}
        </h1>
      </div>
    </div>
  );
}

export default PageImageCover;
