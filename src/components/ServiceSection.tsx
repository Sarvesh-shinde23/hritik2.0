
  import * as React from "react";
  import ServiceProp from "./ServiceProp";
  
  const serviceData = [
    {
      ImageSrc: "/services/7.svg",
      ImageAlt: "Service 1 Icon",
      title: "Company Incorporation",
      description: "We provide comprehensive support for company registration, covering legal compliance, business structure selection (LLP, Pvt Ltd, etc.), and registration filings.",
    },
    {
      ImageSrc: "/services/8.svg",
      ImageAlt: "Business Strategy Development",
      title: "Business Strategy Development",
      description: "We help startups achieve their goals through market research, competitive analysis, and business modeling, offering comprehensive strategic planning services.",
    },
    {
      ImageSrc: "/services/9.svg",
      ImageAlt: "Fundraising and Capital Acquisition",
      title: "Fundraising and Capital Acquisition",
      description: "We help startups secure capital with services including investor pitching, funding round navigation, and financial planning.",
    },
    {
      ImageSrc: "/services/10.svg",
      ImageAlt: "Sales and Marketing Optimization",
      title: "Sales and Marketing Optimization",
      description: "We drive growth with effective sales and marketing strategies, including customer acquisition, sales funnel optimization, and branding.",
    },
    {
      ImageSrc: "/services/11.svg",
      ImageAlt: "Operational Efficiency",
      title: "Operational Efficiency",
      description: "We enhance operational efficiency through process optimization, supply chain management, and technology integration.",
    },
    {
      ImageSrc: "/services/12.svg",
      ImageAlt: "Digital Marketing",
      title: "Digital Marketing",
      description: "We boost your startup's visibility through SEO, social media, content marketing, PPC, and email marketing.",
    },
    {
      ImageSrc: "/services/13.svg",
      ImageAlt: "Accounting Services",
      title: "Accounting Services",
      description: "We keep startups financially healthy with bookkeeping, tax planning, payroll management, and budgeting.",
    },
    {
      ImageSrc: "/services/7.svg",
      ImageAlt: "End-to-End Support for Startups",
      title: "End-to-End Support for Startups",
      description: "We offer complete support for startups, including project management, ongoing advisory, and tailored solutions.",
    },
  ];
  
  const ServiceSection: React.FC = () => {
    return (
      <div id="services" className="flex overflow-hidden flex-col items-center py-8 pr-24 pl-24 bg-white max-md:px-5">
        {/* Title Section */}
        <div className="flex flex-col w-full font-bold text-center max-w-[1320px] max-md:max-w-full">
          <div className="self-center px-5 py-2 text-sm tracking-wider leading-tight uppercase whitespace-nowrap bg-blue-600 bg-opacity-10 rounded-[50px] text-black">
            Services
          </div>
          <div className="mt-2.5 w-full text-3xl pl-[484px] pr-[485px] text-black max-md:px-5 max-md:pl-0 max-md:pr-0">
            Our <span className="text-black">Services</span>
          </div>
        </div>
        
        {/* Service Cards Section */}
        <div className="flex flex-col max-w-full w-[1320px]">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                {serviceData.slice(0, 3).map((service, index) => (
                  <ServiceProp
                    key={index}
                    ImageSrc={service.ImageSrc}
                    ImageAlt={service.ImageAlt}
                    title={service.title}
                    description={service.description}
                  />
                ))}
              </div>
            </div>
          </div>
  
          <div className="max-md:max-w-full mt-6">
            <div className="flex gap-5 max-md:flex-col">
              {serviceData.slice(3, 6).map((service, index) => (
                <ServiceProp
                  key={index}
                  ImageSrc={service.ImageSrc}
                  ImageAlt={service.ImageAlt}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
  
        {/* Last Row of Cards */}
        <div className="max-md:max-w-full mt-6">
          <div className="flex gap-5 max-md:flex-col">
            {serviceData.slice(6).map((service, index) => (
              <ServiceProp
                key={index}
                ImageSrc={service.ImageSrc}
                ImageAlt={service.ImageAlt}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ServiceSection;
  

