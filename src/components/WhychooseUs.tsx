import Image from "next/image";
import {
  AiFillCamera,
  AiOutlineFileSearch,
  AiTwotoneHome,
} from "react-icons/ai";
import { FaPlaneDeparture } from "react-icons/fa";

import React from "react";

const WhychooseUs = () => {
  return (
    <>
      {/* Section containing content */}
      <section className="flex max-w-screen-2xl m-auto px-8 py-20 flex-col lg:flex-row justify-center overflow-x-hidden gap-5 lg:gap-0">
        {/* Left-side content */}
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center items-start lg:py-0 py-6 lg:px-14 px-2 w-full lg:w-2/4 gap-2"
        >
          {/* Section title */}
          <span className="text-[#00aaff]">WHY US?</span>

          {/* Main headline */}
          <h1 className="text-[1.6rem] sm:text-[1.7rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2rem] leading-10 duration-200">
            Why choose us?
          </h1>

          {/* Description */}
          <p className="py-2">
            Our team is composed of experienced industry veterans and subject
            matter experts, bringing decades of startup consultancy expertise.
            We use proven methodologies like Lean Startup, Agile Development,
            and SWOT Analysis to deliver customized, effective solutions that
            meet the unique needs of each client, driving growth and success
          </p>
          <p>
            With a global perspective and an extensive network, we help startups
            navigate international challenges and seize opportunities. Our
            comprehensive support spans the entire startup journey, from
            inception to expansion, ensuring you have the guidance and resources
            needed at every stage.
          </p>

          {/* Icons and text sections */}
          <div className="flex flex-wrap items-center gap-5 mt-3">
            <span className="flex gap-4 items-center w-52">
              {/* Camera icon */}
              <AiFillCamera className="shadow-xl text-5xl text-[#3369e7] rounded-full p-3" />{" "}
              Photograpy
            </span>
            <span className="flex gap-3 items-center w-52">
              {/* File search icon */}
              <AiOutlineFileSearch className="shadow-xl text-5xl text-[#3369e7] rounded-full p-3" />{" "}
              Find it here
            </span>
            <span className="flex gap-3 items-center w-52">
              {/* Home icon */}
              <AiTwotoneHome className="shadow-xl text-5xl text-[#3369e7] rounded-full p-3" />{" "}
              Inspire Photography
            </span>
            <span className="flex gap-3 items-center w-52">
              {/* Plane departure icon */}
              <FaPlaneDeparture className="shadow-xl text-5xl text-[#3369e7] rounded-full p-3" />{" "}
              Fly Your Dreams
            </span>
          </div>
        </div>

        {/* Right-side content with an image */}
        <div data-aos="fade-left">
          {/* Image component */}
          <Image src="/whychooseus/feature.png" width={648} height={400} alt={""} />
        </div>
      </section>
    </>
  );
};

export default WhychooseUs;
