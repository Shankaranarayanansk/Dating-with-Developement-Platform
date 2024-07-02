import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Hero from '../assets/Hero.png';

const Home = () => {
  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS once
  }, []);

  return (
    <div className="lg:ml-48 p-4">
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="w-full md:w-1/2 mb-4 md:mb-0" data-aos="fade-left" data-aos-duration="1500">
          <img src={Hero} alt="Image" className="rounded-lg shadow-md" />
        </div>
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-4 md:mb-0" data-aos="fade-right" data-aos-duration="1500">
          <h1 className="text-4xl font-bold mb-4">Gear Up for <span className='text-6xl text-red-600 font-bold md:4'>Success</span>: Your Ultimate Preparation Hub!</h1>
          <p className="text-lg text-gray-700 mb-4">Welcome juniors. Here you'll find a variety of materials and tools to help you with your studies and projects.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
