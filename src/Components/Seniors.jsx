import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import P1 from '../assets/Seniors/P1.jpg';
import P2 from '../assets/Seniors/P2.jpg';
import P3 from '../assets/Seniors/P3.jpeg';
import P4 from '../assets/Seniors/P4.jpg';
import P5 from '../assets/Seniors/P5.jpeg';
import P6 from '../assets/Seniors/P6.png';

const testimonials = [
  {
    image: P1,
    name: 'Sowmiya Dharshini',
    year: 'Final Year',
    text: 'An talented Student with 8.2 cgpa and proficient in Python and Problem solving ,App development and currently learning the Cyber Security  ',
    linkedin: 'https://www.linkedin.com/pradhive'
  },
  {
    image: P2,
    name: 'Shankaranarayananask',
    year: 'Final Year',
    text: 'An Aspiring Developer and motivated student , who has mastering the MERN bypassing traditional academic routes in favor of hands-on learning',
    linkedin: 'https://www.linkedin.com/ragulpr'
  },
  {
    image: P3,
    name: 'Thulasidhara RV',
    year: 'Final Year',
    text: 'I\'m a problem solving Proficient solved 500+ problem using java and MySql in Leetcode and Hackerrank and currently i\' mastering the Data Structure and Algorithm.',
    linkedin: 'https://www.linkedin.com/prabhakard'
  },
  {
    image: P4,
    name: 'Irfan Ahamed',
    year: 'Final Year',
    text: 'Hey there I\'m proficient in java and python and had solved more than 600 + problem using java and currenty learning the React for value driven progression',
    linkedin: 'https://www.linkedin.com/rahuls'
  },
  {
    image: P5,
    name: 'Sudarsana V',
    year: 'Final Year',
    text: 'Hello there I\'m passionate in about Frontend and Problem Solving using java and currenty learning the React for value',
    linkedin: 'https://www.linkedin.com/priyam'
  },
  {
    image: P6,
    name: 'Siva V',
    year: 'Final Year',
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

const Seniors = () => (
  <div className="bg-gray-100 min-h-screen lg:ml-40">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Seniors </h1>
      <p className="text-center mb-12 text-gray-600">Here is some aspiring Engineers Currently in Placements</p>
      
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

export default Seniors;
