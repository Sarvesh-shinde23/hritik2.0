import React from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";

const ContactSection: React.FC = () => {
  return (
    <div className="flex flex-col px-3 pb-16 mt-9 max-w-full font-bold text-center">
      <div className="self-center px-5 py-2 text-sm tracking-wider leading-tight uppercase whitespace-nowrap bg-blue-600 bg-opacity-10 rounded-full text-zinc-500">
        Contact
      </div>
      <h2 className="mt-2.5 text-3xl leading-10 text-neutral-800 max-md:px-5 max-md:text-2xl">
        Need Help? <span className="text-zinc-500">Contact Us</span>
      </h2>
      <div className="flex flex-col mt-9 max-w-full">
        <div className="flex flex-wrap justify-center items-start w-full">
          <div className="flex flex-col justify-center pt-6 min-h-[561px] max-w-full">
            <div className="flex flex-col px-8 pt-8 pb-24 w-full bg-white shadow-lg">
              {[
                {
                  iconSrc: "/map.svg",
                  title: "Address",
                  description: "12, Palm crest, Main Avenue road, Santacruz w, Mumbai- 400050"
                },
                {
                  iconSrc: "/call.svg",
                  title: "Call Us",
                  description: "+91 98921 02328"
                },
                {
                  iconSrc: "email.svg",
                  title: "Email Us",
                  description: "hhinduja@gmail.com"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start mb-10">
                  <div className="flex items-center justify-center w-11 h-11 bg-blue-600 bg-opacity-10 rounded-full">
                    <Image
                      loading="lazy"
                      src={item.iconSrc}
                      alt={item.title}
                      className="object-contain w-5 h-5"
                      width={20} // Add width for better optimization
                      height={20} // Add height for better optimization
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-neutral-800">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-neutral-700">{item.description}</p>
                  </div>
                </div>
              ))}
              <div className="mt-10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.69859299959!2d72.8341497746652!3d19.076985151942765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c908df7e69c3%3A0xad5b7b0bcc5d3baa!2sPalm%20Crest!5e0!3m2!1sen!2sin!4v1727372380348!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="Google Maps"
                />
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
