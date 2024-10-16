import Image from 'next/image';
import React from 'react';

interface ServicePropProps {
  ImageSrc: string;
  ImageAlt: string;
  title: string;
  description: string;
}

const ServiceProp: React.FC<ServicePropProps> = ({ ImageSrc, ImageAlt, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-5">
        

        <Image src={ImageSrc} alt={ImageAlt} className="w-16 h-16 mx-auto bg-black mb-4" 
        height={16}
        width={16}
        />
      
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceProp;