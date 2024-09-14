import * as React from "react";
import Card from "./Card";


const cardsData = [
  {
    ImageSrc: "/mycomponent/company.svg",
    altText: "Company Registration Icon",
    title: "Company Registration",
    description: "Navigate the legal landscape with ease."
  },
  {
    ImageSrc: "/mycomponent/bank.svg",
    altText: "Fundraising Icon",
    title: "Fundraising",
    description: "Secure the capital you need to grow."
  },
  {
    ImageSrc: "/mycomponent/growth.svg",
    altText: "Growth Strategy Icon",
    title: "Growth Strategy",
    description: "Develop strategies to scale your business."
  },
  {
    ImageSrc: "/mycomponent/efficiency.svg",
    altText: "Efficiency Optimization Icon",
    title: "Efficiency Optimization",
    description: "Maximize your operational efficiency."
  },
  {
    ImageSrc: "/mycomponent/support.svg",
    altText: "End-to-End Support Icon",
    title: "End-to-End Support",
    description: "Providing solutions at every stage of your startup journey."
  }
];

const MyComponent: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center pt-9 pr-24 pb-16 pl-24 bg-white max-md:px-5">
      <div className="flex flex-col w-full max-w-[1320px] max-md:max-w-full">
        <div className="flex flex-wrap justify-center w-full max-md:max-w-full">
          {cardsData.slice(0, 4).map((card, index) => (
            <div key={index} className="flex flex-col flex-1 shrink justify-center pt-6 basis-0 max-w-[1320px] min-w-[240px]">
              <div className="flex pr-1 pl-3 w-full min-h-[251px]">{/* Adjust pl-3 or pr-3 based on position if needed */}
                <Card {...card} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center pt-6 w-full max-w-[1320px] min-h-[275px] max-md:max-w-full">
          <div className="flex justify-center px-3 w-full min-h-[251px] max-md:max-w-full">
            <Card {...cardsData[4]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;