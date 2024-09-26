import React from 'react';

const Whatsapp = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <a href="https://wa.me/+919892102328" target="_blank" rel="noopener noreferrer">
        <button className="text-white font-bold py-2 px-2 rounded-full shadow-lg bg-white">
          <img 
            src="/whatsapp.svg" 
            alt="WhatsApp Icon" 
            className="w-12 h-12" // You can adjust width and height as per your need
          />
        </button>
      </a>
    </div>
  );
};

export default Whatsapp;
