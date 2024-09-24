'use client'
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevent page refresh
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle as HTMLFormElement);
    
    fetch(
      "https://script.google.com/macros/s/AKfycbxMJXfYBIWNrf9oL2XWFWYMl5aZWU2UOpssESJHWEmPMyFEvBiD-u3U7XWXdTIUtWZ3/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div id="contact" className="flex flex-col justify-center px-4 pt-6 text-base max-w-[1320px] mx-auto min-h-[623px] text-neutral-700">
      <form 
        className="flex flex-col px-5 pt-1.5 pb-10 w-full bg-white shadow-lg rounded-lg mx-auto max-w-[600px]"
        onSubmit={Submit} // Added onSubmit handler
      >
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold">Your Name</label>
              <input
                id="name"
                name="name" // Added name attribute
                type="text"
                className="mt-2 bg-white border border-neutral-300 rounded-md p-2 h-[42px]"
                aria-label="Your Name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold">Your Email</label>
              <input
                id="email"
                name="email" // Added name attribute
                type="email"
                className="mt-2 bg-white border border-neutral-300 rounded-md p-2 h-[42px]"
                aria-label="Your Email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-semibold">Phone No.</label>
              <input
                id="phone"
                name="phone" // Added name attribute
                type="text"
                className="mt-2 bg-white border border-neutral-300 rounded-md p-2 h-[42px]"
                aria-label="Phone No."
              />
            </div>
          </div>

          {/* Dropdown for Startup Stage */}
          <div className="flex flex-col">
            <label htmlFor="stage" className="block mb-2 text-sm font-medium text-gray-900">
              What is the current stage of your startup?
            </label>
            <select
              id="stage"
              name="stage" // Added name attribute
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option value="" selected disabled>Choose your stage</option>
              <option value="Idea Stage">Idea Stage</option>
              <option value="Early Stage">Early Stage</option>
              <option value="Growth Stage">Growth Stage</option>
              <option value="Established">Established</option>
            </select>
          </div>

          {/* Dropdown for Consultancy Goal */}
          <div className="flex flex-col">
            <label htmlFor="goal" className="block mb-2 text-sm font-medium text-gray-900">
              What is your primary goal for seeking consultancy services?
            </label>
            <select
              id="goal"
              name="goal" // Added name attribute
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option value="" selected disabled>Choose your services</option>
              <option value="Legal and Compliance">Legal and Compliance</option>
              <option value="Business Strategy">Business Strategy</option>
              <option value="Funding">Funding</option>
              <option value="Marketing and Sales">Marketing and Sales</option>
              <option value="Operational Efficiency">Operational Efficiency</option>
              <option value="Digital Presence">Digital Presence</option>
              <option value="Financial Management">Financial Management</option>
            </select>
          </div>

          <button
            type="submit"
            className="text-center text-white bg-zinc-500 rounded-full px-6 py-2 mt-6 w-full hover:bg-zinc-600"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
