import Image from "next/image";
import React from "react";

interface ImageCardProps {
  src: string;
  alt: string;
  h: number;
  w: number;
}

function ImageCard({ src, alt, h, w }: ImageCardProps) {
  return (
    <div
      style={{
        height: h,
        position: "relative",
        width: w,
      }}
      className="rounded-lg overflow-hidden flex justify-center"
    >
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
  );
}

export default ImageCard;
