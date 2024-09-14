import * as React from "react";
import Image from "next/image"; // Import Image from Next.js

const Aboutus: React.FC = () => {
  return (
    <section
      id="about"
      className="flex overflow-hidden flex-col items-center pt-16 pr-24 pb-28 pl-24 w-full bg-slate-50 min-h-[891px] max-md:px-5 max-md:pb-24 max-md:max-w-full"
    >
      <header className="flex flex-col px-3 pb-16 max-w-full text-3xl font-bold text-center text-neutral-800 w-[1320px]">
        <div className="pr-96 pl-96 w-full max-md:px-5 max-md:max-w-full">
          <span className="text-black">About Us</span>
        </div>
      </header>
      <div className="flex flex-col w-full max-w-[1320px] max-md:max-w-full">
        <div className="flex flex-wrap justify-center w-full max-md:max-w-full">
          <article className="flex flex-col flex-1 shrink justify-center pt-4 basis-0 max-w-[1320px] min-w-[240px] max-md:max-w-full">
            <div className="flex flex-col justify-center px-3 w-full min-h-[609px] max-md:max-w-full">
              <Image
                loading="lazy"
                src="/about.png"
                alt="About Us Image"
                className="object-contain max-w-[660px] max-md:max-w-full"
                width={660} // Specify width
                height={688} // Specify height
                layout="intrinsic" // Use intrinsic layout for images with fixed dimensions
              />
            </div>
          </article>
          <article className="flex flex-col flex-1 shrink justify-center pt-4 basis-0 max-w-[1320px] min-w-[240px] max-md:max-w-full">
            <div className="flex flex-col justify-center px-3 py-20 w-full min-h-[609px] max-md:max-w-full">
              <div className="flex flex-col pl-4 w-full max-md:max-w-full">
                <h2 className="w-full text-2xl font-bold leading-8 text-neutral-800 max-md:max-w-full">
                  Company Overview
                </h2>
                <p className="mt-2 w-full text-base leading-6 text-neutral-700 max-md:max-w-full">
                  Welcome to Transcend Business Consultancy, where we transform startups into thriving enterprises. Our mission is to empower startups with the tools and strategies they need to succeed, providing comprehensive support from the initial idea to full-scale operations.
                  <br />
                  Our vision is to be the leading consultancy for startup success, renowned for our integrity, innovation, and excellence.
                </p>
                <div className="flex flex-col pt-7 mt-2 w-full max-md:max-w-full">
                  <div className="flex flex-wrap items-start w-full max-md:max-w-full">
                    <div className="flex flex-col items-start pr-4 min-h-[64px] w-[79px]">
                      <div className="flex justify-center items-center px-5 w-16 h-16 bg-white min-h-[64px] rounded-[50px] shadow-[0px_6px_15px_rgba(0,0,0,0.1)]">
                        <div className="flex flex-col self-stretch my-auto w-6">
                          <Image
                            loading="lazy"
                            src="/Aboutus/2.png"
                            alt="Our Approach Icon"
                            className="object-contain"
                            width={64} // Specify width
                            height={64} // Specify height
                            layout="intrinsic" // Use intrinsic layout for images with fixed dimensions
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col min-w-[240px] w-[520px] max-md:max-w-full">
                      <h3 className="w-full text-lg font-semibold leading-tight text-neutral-800 max-md:max-w-full">
                        Our Approach
                      </h3>
                      <p className="mt-2 w-full text-base text-neutral-700 max-md:max-w-full">
                        At Transcend Business Consultancy, we utilize a comprehensive methodology that includes Lean Startup principles, Agile Development, Market Analysis, and SWOT Analysis. Our approach is tailored to each client’s unique needs, ensuring that we deliver customized solutions that drive success.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-start mt-9 w-full max-md:max-w-full">
                    <div className="flex flex-col items-start pr-4 min-h-[64px] w-[79px]">
                      <div className="flex justify-center items-center px-5 w-16 h-16 bg-white min-h-[64px] rounded-[50px] shadow-[0px_6px_15px_rgba(0,0,0,0.1)]">
                        <div className="flex flex-col self-stretch my-auto w-6">
                          <Image
                            loading="lazy"
                            src="/Aboutus/Container.svg"
                            alt="Our Journey Icon"
                            className="object-contain"
                            width={64} // Specify width
                            height={64} // Specify height
                            layout="intrinsic" // Use intrinsic layout for images with fixed dimensions
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col min-w-[240px] w-[500px] max-md:max-w-full">
                      <h3 className="w-full text-lg font-semibold leading-tight text-neutral-800 max-md:max-w-full">
                        Our Journey
                      </h3>
                      <p className="mt-2 w-full text-base leading-6 text-neutral-700 max-md:max-w-full">
                        Founded in 2019, Transcend Business Consultancy has grown from a small advisory firm to a global player in the startup ecosystem. Over the years, we have assisted over 40 startups in navigating the complexities of business development, securing funding, and achieving sustainable growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
