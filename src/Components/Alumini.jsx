import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import P1 from '../assets/Alumini/P1.jpeg';
import P2 from '../assets/Alumini/P2.jpeg';
import P3 from '../assets/Alumini/P3.jpeg';

const testimonials = [
  {
    image: P1,
    name: 'Pradhive',
    year: '2024 Passed Out',
    text: 'An talented Student with 9.2 cgpa and proficient in java and Problem solving more than 1000+ problems and working at Zscalar for 19LPA',
    linkedin: 'https://www.linkedin.com/in/pradhive/'
  },
  {
    image: P2,
    name: 'Ragul PR',
    year: '2024 Passed Out',
    text: 'The supportive community and rigorous curriculum prepared me well for the challenges of the professional world.',
    linkedin: 'https://www.linkedin.com/ragulpr'
  },
  {
    image: P3,
    name: 'Avanthika',
    year: 'Class of 2019',
    text: 'I\'m grateful for the opportunities and connections I made during my time here. It\'s been crucial to my success.',
    linkedin: 'https://www.linkedin.com/prabhakard'
  },
  {
    image: '/path/to/alumini4.jpg',
    name: 'Rahul S',
    year: 'Class of 2021',
    text: 'The experiences and knowledge I gained here have set a strong foundation for my professional journey.',
    linkedin: 'https://www.linkedin.com/rahuls'
  },
  {
    image: '/path/to/alumini5.jpg',
    name: 'Priya M',
    year: 'Class of 2017',
    text: 'I\'m proud to be an alumini of this institution. The network and skills I developed here are priceless.',
    linkedin: 'https://www.linkedin.com/priyam'
  },
];

const Testimonial = ({ image, name, year, text, linkedin }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-80 mx-4 mb-6">
    <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4 object-cover" />
    <p className="text-gray-600 mb-4 text-sm text-center h-24 overflow-hidden">{text}</p>
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="text-sm text-gray-500">{year}</p>
    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500 hover:text-blue-600 flex items-center">
       {/* Adjusted size with text-xl */}
       <FaLinkedin size={5} className='m-2' />
      Connect
    </a>
  

  </div>
);

const Alumini = () => (
  <div className="bg-gray-100 min-h-screen lg:ml-40">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Alumini </h1>
      <p className="text-center mb-12 text-gray-600">Hear from our successful graduates about their experiences.</p>
      
      <div className="overflow-x-hidden">
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4">Join Our Alumini Network</h2>
        <p className="mb-6">Stay connected with your alma mater and fellow graduates.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          Register Now
        </button>
      </div>
    </div>
  </div>
);

export default Alumini;
