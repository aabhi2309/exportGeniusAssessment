'use client'
import Image from 'next/image';
import { useState } from 'react';

const Scroller = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        '/stats1.png','/stats2.png','/stats3.png','/stats4.png','/stats1.png','/stats2.png','/stats3.png','/stats4.png'
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="-mx-[5vw] bg-gray-100 py-10 px-10 lg:px-60 ">
            <div className="flex overflow-x-scroll hide-scroll-bar space-x-4">
      {images.map((src, index) => (
        <div key={index} className="flex-none w-64">
          <img
            src={src}
            alt={`Image ${index + 1}`}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      ))}
    </div>
        </div>
    );
};

export default Scroller;
