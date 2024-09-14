import React from 'react';


interface SectionTitleProps {
  subtitle: string;
  title: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title }) => {
  return (
    <div className="flex relative flex-col pb-4 max-w-full font-extrabold text-center w-[600px]">
      <div className="px-52 w-full text-xl leading-6 uppercase text-zinc-500 max-md:px-5 max-md:max-w-full">
        {subtitle}
      </div>
      <div className="px-12 mt-2 w-full text-4xl leading-10 text-sky-950 max-md:px-5 max-md:max-w-full">
        {title}
      </div>
      <div className="flex absolute bottom-0 z-0 max-w-full rounded-sm bg-zinc-500 h-[5px] inset-x-[225px] min-h-[5px] w-[150px]" />
    </div>
  );
};

export default SectionTitle;