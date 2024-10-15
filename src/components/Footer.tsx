import React from 'react';
import Image from 'next/image'; // Import Image from Next.js

const Footer: React.FC = () => {
  const commonImageSrc = "/cross.svg";
  const socialMediaLinks = [
    { src: "/instagram.png", url: "https://www.instagram.com/transcendbc/profilecard/?igsh=MWdiYXAzd201dDk5YQ==" },
    { src: "/Linkedin.png", url: "https://www.linkedin.com" },
    { src: "/facebook.png", url: "https://www.facebook.com" },
    { src: "/twitter.png", url: "https://www.twitter.com" }
  ];

  return (
    <footer className="flex flex-col items-center pb-5 w-full bg-white min-h-[300px]">
      <div className="flex flex-col pt-7 max-w-full w-[1320px]">
        <div className="flex flex-wrap justify-center w-full max-md:max-w-full">
          
          {/* Contact Information */}
          <address className="flex flex-col grow shrink justify-center pt-6 max-w-[1320px] min-w-[240px] w-[396px] max-md:max-w-full not-italic">
            <div className="flex flex-col px-3 w-full max-w-[1320px] min-h-[180px] max-md:max-w-full">
              <h2 className="text-2xl font-semibold whitespace-nowrap text-neutral-800">
                Contact Us
              </h2>
              <div className="flex flex-col pt-4 w-full text-sm text-neutral-700">
                <p>12, Palm crest, Main Avenue road, </p>
                <p className="mt-1.5">Santacruz w, Mumbai- 400050</p>
                <p className="pt-3 mt-1.5 font-bold">
                  Phone: <a href="tel:+155895548855" className="text-blue-600">+91 98921 02328</a>
                </p>
                <p className="mt-1.5 font-bold">
                  Email: <a href="mailto:info@example.com" className="text-blue-600">hhinduja@gmail.com</a>
                </p>
              </div>
            </div>
          </address>

          {/* Useful Links */}
          <nav className="flex flex-col grow shrink justify-center pt-6 pb-8 w-44 max-w-[1320px]">
            <div className="flex flex-col px-3 w-full h-[165px] max-w-[1320px]">
              <h3 className="pb-3 text-base font-bold leading-tight text-neutral-800">Useful Links</h3>
              <ul className="flex flex-col mt-2 w-full">
                {["Home", "About us", "Services", "Terms of service"].map((link, index) => (
                  <li key={index} className="py-2.5">
                    <a href={`#${link.toLowerCase().replace(/\s/g, "-")}`} className="flex items-center text-sm text-neutral-700 text-opacity-80">
                      <Image
                        loading="lazy"
                        src={commonImageSrc}
                        alt={`${link} icon`}
                        width={24} // Provide width
                        height={24} // Provide height
                        className="object-contain w-3 mr-2"
                      />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Our Services */}
          <nav className="flex flex-col grow shrink justify-center pt-6 pb-8 w-44 max-w-[1320px]">
            <div className="flex flex-col px-3 w-full h-[165px] max-w-[1320px]">
              <h3 className="pb-3 text-base font-bold leading-tight text-neutral-800">Our Services</h3>
              <ul className="flex flex-col mt-2 w-full">
                {["Company Incorporation", "Business Strategy Development", "Fundraising and Capital Acquisition", "Sales and Marketing Optimization"].map((service, index) => (
                  <li key={index} className="py-2.5">
                    <a href={`#${service.toLowerCase().replace(/\s/g, "-")}`} className="flex items-center text-sm text-neutral-700 text-opacity-80">
                      <Image
                        loading="lazy"
                        src={commonImageSrc}
                        alt={`${service} icon`}
                        width={24} // Provide width
                        height={24} // Provide height
                        className="object-contain w-3 mr-2"
                      />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Follow Us */}
          <div className="flex flex-col grow shrink justify-center pt-6 max-w-[1320px] min-w-[240px] w-[396px] max-md:max-w-full">
            <div className="flex flex-col px-3 pb-14 w-full max-w-[1320px] max-md:max-w-full">
              <h3 className="pb-8 text-base font-bold leading-tight text-neutral-800">Follow us</h3>
              <p className="mt-2 text-sm text-neutral-700 leading-5">
                Stay updated with our latest news and offers through our social channels.
              </p>
              <div className="flex items-center mt-4 space-x-4"> {/* Align items horizontally */}
                {socialMediaLinks.map((social, index) => (
                  <div className="min-h-[40px] w-[50px]" key={index}>
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      <div className="flex justify-center items-center px-2 py-4 rounded border border-solid border-neutral-700 border-opacity-50">
                        <Image
                          loading="lazy"
                          src={social.src}
                          alt={`Social media icon ${index + 1}`}
                          width={24} // Provide width
                          height={24} // Provide height
                          className="object-contain"
                        />
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
