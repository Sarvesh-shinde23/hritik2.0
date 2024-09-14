import React from 'react';
import Image from 'next/image'; // Import Image from Next.js

interface FeatureCardProps {
  Imagesrc: string;  // URL of the image
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ Imagesrc, title, description }) => {
  return (
    <div className="flex flex-col justify-center w-full max-w-md max-md:max-w-full">
      <div className="flex flex-col px-6 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex justify-center items-center px-6 font-black leading-none text-white whitespace-nowrap rounded-sm h-[60px] min-h-[20px] w-[160px] max-md:px-5">
          <Image
            src={Imagesrc}
            alt={title}
            className="flex-wrap h-full w-full object-cover rounded-sm"
            width={30} // Specify width
            height={20} // Specify height
            layout="intrinsic" // Adjust as needed
          />
        </div>
        <div className="mt-4 text-2xl font-bold leading-tight text-sky-950">{title}</div>
        <div className="mt-2 leading-6 text-zinc-500">{description}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
