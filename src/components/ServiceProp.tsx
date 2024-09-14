import React from "react";
import Image from "next/image"; // Assuming you're using Next.js

interface ServiceCardProps {
  ImageSrc: string;
  ImageAlt: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ ImageSrc, ImageAlt, title, description }) => {
  return (
    <div className="flex flex-col grow justify-center px-3 pt-6 min-h-[383px] max-md:max-w-full">
      <div className="flex flex-col px-5 py-20 w-full bg-white border border-solid border-neutral-700 border-opacity-10">
        {/* Icon Container */}
        <div className="flex justify-center items-center self-center px-5 w-16 h-16 rounded bg-black min-h-[64px]">
          <Image
            loading="lazy"
            src={ImageSrc}
            alt={ImageAlt}
            width={28} // Set width for better optimization
            height={28} // Set height for better optimization
            className="object-contain w-7 aspect-square"
          />
        </div>
        {/* Title */}
        <div className="flex justify-center items-start mt-5 text-2xl font-bold leading-tight text-center text-black">
          <div className="flex-1 shrink px-28 w-full min-w-[240px] max-md:px-5">{title}</div>
        </div>
        {/* Description */}
        <div className="px-0.5 mt-3.5 text-sm leading-6 text-center text-neutral-700">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
