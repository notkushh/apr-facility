import React from "react";

function CardWithHeading({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full relative border-t border-gray-300 mt-6 mb-10 max-w-full min-w-full">
      <div className="absolute p-[5px] pr-[10px] bg-white top-[-20px] z-[2] font-bold font-sans">
        {text}
      </div>
      <div className="pt-[20px] pl-1">{children}</div>
    </div>
  );
}

export default CardWithHeading;
