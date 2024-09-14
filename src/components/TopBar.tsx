import React from 'react';
import ContactInfo from './ContactInfo';
import SocialIcon from './SocialIcon';

interface ContactDetail {
  src: string;
  text: string;
  alt: string;
  link:string
}

interface SocialIconDetail {
  src: string;
  alt: string;
}

const contactDetails: ContactDetail[] = [
  {
    src: "/TopBar/message.png",
    text: 'info@transcendconsulting.com',
    alt: 'Email Icon',
    link:''
  },
  {
    src: "/TopBar/phone.png",
    text: ': +123 456 7890',
    alt: 'Phone Icon',
    link:''
  }
];

const socialIcons: SocialIconDetail[] = [
  {
    src: "/TopBar/twitter.png",
    alt: 'twitter'
  },
  {
    src: "/TopBar/linkedin.png",
    alt: 'linkedin'
  },
  {
    src: "/TopBar/insta.png",
    alt: 'instagram'
  },
  {
    src:"/TopBar/Link copy.png",
    alt: 'facebook'
  }
];

const TopBar: React.FC = () => {
  return (
    <div className="flex justify-center items-center px-24 py-2.5 bg-black max-md:px-5">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-between self-stretch px-3 my-auto w-full basis-0 max-w-[1320px] min-w-[240px] max-md:max-w-full">
        <div className="flex items-center h-full min-w-[240px]">
          {contactDetails.map((detail, index) => (
            <ContactInfo key={index} src={detail.src} text={detail.text} alt={detail.alt} />
          ))}
        </div>
        <div className="flex items-center py-1 h-full">
          {socialIcons.map((icon, index) => (
            <SocialIcon key={index} src={icon.src} alt={icon.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;