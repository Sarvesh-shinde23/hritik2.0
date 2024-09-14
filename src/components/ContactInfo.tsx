import React from 'react';
import Image from 'next/image';

interface ContactInfoProps {
  src: string;
  text: string;
  alt: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ src, text, alt }) => {
  return (
    <div className="flex items-center my-auto">
      <div className="flex flex-col self-stretch my-auto w-3.5">
        <Image src={src} alt={alt} width={14} height={14} className="object-contain w-3.5 aspect-square" />
      </div>
      <div className="self-stretch pl-1.5 my-auto text-sm text-white whitespace-nowrap">
        {text}
      </div>
    </div>
  );
};

export default ContactInfo;