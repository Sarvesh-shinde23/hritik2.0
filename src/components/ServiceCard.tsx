import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  ImageSrc: string;
  ImageAlt: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ ImageSrc, ImageAlt, title, description }) => {
  return (
    <div className="flex flex-col grow justify-center px-3 pt-6 min-h-[383px] max-md:max-w-full">
      <div className="flex flex-col px-5 py-20 w-full bg-white border border-solid border-neutral-700 border-opacity-10 max-md:py-14 max-md:px-4 max-sm:py-10 max-sm:px-3">
        {/* Icon Container */}
        <div className="flex justify-center items-center self-center px-5 w-16 h-16 rounded bg-black min-h-[64px] max-sm:w-12 max-sm:h-12">
          <Image
            loading="lazy"
            src={ImageSrc}
            alt={ImageAlt}
            width={28}
            height={28}
            className="object-contain w-7 aspect-square max-sm:w-5"
          />
        </div>
        {/* Title */}
        <div className="flex justify-center items-start mt-5 text-2xl font-bold leading-tight text-center text-black max-md:text-xl max-sm:text-lg">
          <div className="flex-1 shrink px-28 w-full min-w-[240px] max-md:px-5 max-sm:px-2">{title}</div>
        </div>
        {/* Description */}
        <div className="px-0.5 mt-3.5 text-sm leading-6 text-center text-neutral-700 max-md:text-base max-sm:text-sm">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
