"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-base-100 shadow-md">
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link href="/">
            <Image
              height={60}
              width={80}
              src="/vector.svg"
              alt="Tech Company Logo"
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="#services" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link href="#about" className="text-gray-700 hover:text-blue-600">About Us</Link>
  
          <Link href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</Link>
        
          <Link href="#contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <ul className="flex flex-col space-y-4">
            <li><Link href="#services" className="text-gray-700 hover:text-blue-600">Service</Link></li>
            <li><Link href="#about" className="text-gray-700 hover:text-blue-600">About Us</Link></li>
         
            <li><Link href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</Link></li>
           
            <li><Link href="#contact" className="text-gray-700 hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
