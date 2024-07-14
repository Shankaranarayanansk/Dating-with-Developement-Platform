import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaYoutube } from 'react-icons/fa';
import P1 from '../assets/Tech/P1.jpg';
import P2 from '../assets/Tech/P2.jpg';
import P3 from '../assets/Tech/P3.jpg';
import P4 from '../assets/Tech/P4.jpg';
import P5 from '../assets/Tech/P5.jpg';
import P6 from '../assets/Tech/P6.jpg';
 
const testimonials = [
  {
    image: P1,
    name: 'Curios Freaks',
    year: 'An IT Corporate',
    text: 'A Software Engineer working at top tech, trying to post everything that I learn and which I feel will help people grow!!!',
    linkedin: 'https://www.linkedin.com/in/pradhive/',
  },
  {
    image: P2,
    name: 'HOUSE OF MAVERICK',
    year: 'Digital Marketing',
    text: 'Providing information on current updates and producing valuable content for adults.',
    linkedin: 'https://www.youtube.com/@HOUSEOFMAVERICK',
  },
  {
    image: P3,
    name: 'Rahul M',
    year: 'Entrepreneur',
    text: "Hi there, I'm Rahul, a former software engineer and a creator turned entrepreneur. I'm passionate about empowering and mentoring.",
    linkedin: 'https://www.linkedin.com/in/avanthika2663/',
  },
  {
    image: P4,
    name: 'A2d Gaming',
    year: 'Ex-Gaming Developer',
    text: 'An experienced and knowledgeable person delivering content about hardware, software, and IT companies.',
    linkedin: 'https://www.linkedin.com/in/gokul-m-p-289a56257/',
  },
  {
    image: P5,
    name: 'Google Students',
    year: 'Google Working Professionals',
    text: "I'm proud to be an alumna of this institution. The network and skills I developed here are priceless.",
    linkedin: 'https://www.linkedin.com/in/anish-anish/',
  },
  {
    image: P6,
    name: 'Ted Talks',
    year: 'Attractive Speech',
    text: "I'm proud to be an alumna of this institution. The network and skills I developed here are priceless.",
    linkedin: 'https://www.linkedin.com/in/muruganantham-s/',
  },
];

const Testimonial = ({ image, name, year, text, linkedin }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full sm:w-80 mx-2 mb-6" >
    <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4 object-cover" />
    <p className="text-gray-600 mb-4 text-sm text-center h-24 overflow-hidden">{text}</p>
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="text-sm text-gray-500">{year}</p>
    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="mt-2 text-red-500 hover:text-red-600 flex items-center">
      <FaYoutube size={24} className="mr-2" />
      Follow
    </a>
  </div>
);

const Undergraduate = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="main-content bg-gray-100 min-h-screen lg:ml-40" data-aos="fade-up">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Life Skills</h1>
        <p className="text-center mb-12 text-gray-600">Have tips and motivation from these YouTubers</p>
        <div className="overflow-hidden">
          <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Undergraduate;


