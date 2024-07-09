import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { FaLinkedin } from 'react-icons/fa';
import P1 from '../assets/Seniors/P1.jpg';
import P2 from '../assets/Seniors/P2.jpg';
import P3 from '../assets/Seniors/P3.jpeg';
import P4 from '../assets/Seniors/P4.jpg';
import P5 from '../assets/Seniors/P5.jpg';
import P6 from '../assets/Seniors/P6.png';

const fellows = [
  {
    image: P1,
    name: 'Sowmiya Dharshini',
    year: 'Final Year',
    text: 'An talented Student with 8.2 cgpa and proficient in Python and Problem solving ,App development and currently learning the Cyber Security',
    linkedin: 'https://www.linkedin.com/in/sowmiya-dharshini-k-aa9534275/',
  },
  {
    image: P2,
    name: 'Shankaranarayananask',
    year: 'Final Year',
    text: 'An Aspiring Developer and motivated student, who has mastered the MERN stack bypassing traditional academic routes in favor of hands-on learning',
    linkedin: 'https://www.linkedin.com/in/shankaranarayanansk/',
  },
  {
    image: P3,
    name: 'Harish Kumar',
    year: 'Final Year',
    text: "I'm an Aspiring AI Developer and proficient in Deep Learning, Machine Learning, and Problem Solving at Leetcode using Java, Python, Pandas and currently learning DSA",
    linkedin: 'https://www.linkedin.com/in/harizh/',
  },
  {
    image: P4,
    name: 'Irfan Ahamed',
    year: 'Final Year',
    text: "Hey there! I'm proficient in Java and Python, and have solved more than 600+ problems using Java. Currently learning React for value-driven progression",
    linkedin: 'https://www.linkedin.com/in/irfan-ahamed-s-b0a414255/',
  },
  {
    image: P5,
    name: 'Sudarsana V',
    year: 'Final Year',
    text: "Hello there! I'm passionate about Frontend Development and Problem Solving using Java. Currently learning the MERN stack for flexible development",
    linkedin: 'https://www.linkedin.com/in/sudarshana-v/',
  },
  {
    image: P6,
    name: 'Siva V',
    year: 'Final Year',
    text: "I'm proud to be an alumini of this institution. The network and skills I developed here are priceless.",
    linkedin: 'https://www.linkedin.com/in/codersiva/',
  },
];

const People = ({ image, name, year, text, linkedin }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full sm:w-80 mx-2 mb-6"  >
    <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4 object-cover" />
    <p className="text-gray-600 mb-4 text-sm text-center h-24 overflow-hidden">{text}</p>
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="text-sm text-gray-500">{year}</p>
    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500 hover:text-blue-600 flex items-center">
      <FaLinkedin size={24} className="mr-2" />
      Connect
    </a>
  </div>
);

const Seniors = () => {
  useEffect(() => {
    // AOS.init({
    //   duration: 1000,
    //   easing: 'ease-out-in',
    //   once: true,
    // });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen lg:ml-40">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Seniors</h1>
        <p className="text-center mb-12 text-gray-600">Here are some aspiring Engineers currently in placements</p>
        <div className="overflow-hidden">
          <div className="flex flex-wrap justify-center">
            {fellows.map((guy, index) => (
              <People key={index} {...guy} />
            ))}
          </div>
        </div>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold mb-4">Join Our College Network</h2>
          <p className="mb-6">Stay connected with your Seniors and fellow graduates.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Click to Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seniors;
