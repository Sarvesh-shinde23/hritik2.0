import * as React from "react";
import Image from "next/image"; // Importing Next.js Image component

interface CardProps {
  ImageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ ImageSrc, altText, title, description }) => {
  return (
    <div className="flex flex-col px-8 py-12 bg-white min-w-[240px] shadow-[0px_0px_25px_rgba(0,0,0,0.1)] max-md:px-5">
      <div className="flex flex-col items-start pt-2 pb-2.5 w-full">
        <div className="flex items-start w-9">
          <Image
            src={ImageSrc}
            alt={altText}
            width={36}  // Provide width and height for Next.js Image
            height={36}
            className="object-contain w-9 aspect-square"
          />
        </div>
      </div>
      <div className="mt-2.5 w-full text-xl font-bold leading-tight text-neutral-800">
        {title}
      </div>
      <div className="pt-1.5 mt-2.5 w-full text-sm leading-6 text-neutral-700">
        {description}
      </div>
    </div>
  );
};

export default Card;
