import React from 'react';
import Image from 'next/image';

interface SocialIconProps {
  src: string;
  alt: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => {
  return (
    <div className="flex flex-col items-start self-stretch pl-5 my-auto w-[34px]">
      <div className="flex flex-col w-full max-w-[14px]">
        <div className="flex items-start w-full">
          <Image src={src} alt={alt} width={14} height={14} className="object-contain w-3.5 aspect-square" />
        </div>
      </div>
    </div>
  );
};

export default SocialIcon;