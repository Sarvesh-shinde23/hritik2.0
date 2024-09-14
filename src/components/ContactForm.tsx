'use client'
import React, { useState } from "react";


const ContactForm: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  return (
    <div id="contact" className="flex flex-col justify-center px-4 pt-6 text-base max-w-[1320px] mx-auto min-h-[623px] text-neutral-700">
      <form className="flex flex-col px-5 pt-1.5 pb-10 w-full bg-white shadow-lg rounded-lg mx-auto max-w-[600px]">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold">Your Name</label>
              <input
                id="name"
                type="text"
                className="mt-2 bg-white border border-neutral-300 rounded-md p-2 h-[42px]"
                aria-label="Your Name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold">Your Email</label>
              <input
                id="email"
                type="email"
                className="mt-2 bg-white border border-neutral-300 rounded-md p-2 h-[42px]"
                aria-label="Your Email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-semibold">Phone No.</label>
              <input
                id="phone"
                type="text"
                className="mt-2 bg-white border border-neutral-300 rounded-md p-2 h-[42px]"
                aria-label="Phone No."
              />
            </div>
          </div>

          <div className="relative">
            <button 
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
              onClick={() => toggleDropdown('dropdownStage')}
              aria-expanded={dropdownOpen === 'dropdownStage'}
            >
             What is the current stage of your startup?
              <svg className="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>

            <div id="dropdownStage" className={`absolute top-full left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-full ${dropdownOpen === 'dropdownStage' ? 'block' : 'hidden'}`}>
              <ul className="py-14 text-sm text-gray-700">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Idea Stage</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Early Stage</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Growth Stage</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Established</a></li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <button 
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
              onClick={() => toggleDropdown('dropdownGoal')}
              aria-expanded={dropdownOpen === 'dropdownGoal'}
            >
           What is your primary goal for seeking consultancy services?
              <svg className="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
          
            <div id="dropdownGoal" className={`absolute top-full left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-full ${dropdownOpen === 'dropdownGoal' ? 'block' : 'hidden'}`}>
              <ul className="py-2 text-sm text-gray-700">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Legal and Compliance</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Business Strategy</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Funding</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Marketing and Sales</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Operational Efficiency</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Digital Presence</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Financial Management</a></li>
              </ul>
            </div>
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
