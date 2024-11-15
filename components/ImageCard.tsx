import Image from "next/image";
import React from "react";

interface ImageCardProps {
  src: string;
  alt: string;
  h: number | string;
  w: number | string;
  objectFit: string;
}

function ImageCard({ src, alt, h, w, objectFit }: ImageCardProps) {
  return (
    <div
      style={{
        height: h,
        position: "relative",
        width: w,
      }}
      className="rounded-lg overflow-hidden flex justify-center"
    >
      <Image src={src} alt={alt} layout="fill" objectFit={objectFit} />
    </div>
  );
}

export default ImageCard;
