import React from 'react';


const HeroSection = () => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url(hero-bg.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-black"></div>
      <div className="hero-content flex flex-col justify-center items-start text-neutral-content text-left w-full lg:w-1/2 lg:order-1 p-0" data-aos="zoom-out"> 
        <div className="max-w-md">
          <h1 className=" blue-600 mb-5 text-5xl font-bold ">"Transforming Startups into Successful Enterprises"</h1>
          <p className="mb-5">
          Comprehensive Support from Inception to Expansion
          </p>
          <a href="#contact" className="btn btn-primary">
  Learn More
</a>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;