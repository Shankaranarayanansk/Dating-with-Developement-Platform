import React from 'react';

const Home = () => (
  <div className="lg:ml-48 p-4">
    <h1 className="text-4xl font-bold mb-4">Gear Up for <span className='text-6xl font-bold md-4'>Success</span>: Your Ultimate Preparation Hub!
    </h1>
    <p className="text-lg text-gray-700 mb-4">Welcome juniors. Here you'll find a variety of materials and tools to help you with your studies and projects.You have the connection of well versed seniors help for you</p>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
      <p className="text-gray-600 mb-2">Begin your journey with our comprehensive guides and tutorials:</p>
      <ul className="list-disc list-inside pl-4">
        <li><a href="/guides" className="text-blue-500 hover:underline">Guides</a></li>
        <li><a href="/tutorials" className="text-blue-500 hover:underline">Tutorials</a></li>
        <li><a href="/videos" className="text-blue-500 hover:underline">Video Lessons</a></li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Resources</h2>
      <p className="text-gray-600 mb-2">Check out these resources to deepen your understanding:</p>
      <ul className="list-disc list-inside pl-4">
        <li><a href="/articles" className="text-blue-500 hover:underline">Articles</a></li>
        <li><a href="/books" className="text-blue-500 hover:underline">Recommended Books</a></li>
        <li><a href="/tools" className="text-blue-500 hover:underline">Tools</a></li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Community</h2>
      <p className="text-gray-600 mb-2">Connect with peers and mentors:</p>
      <ul className="list-disc list-inside pl-4">
        <li><a href="/forums" className="text-blue-500 hover:underline">Forums</a></li>
        <li><a href="/meetups" className="text-blue-500 hover:underline">Meetups</a></li>
        <li><a href="/mentorship" className="text-blue-500 hover:underline">Mentorship Programs</a></li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Projects</h2>
      <p className="text-gray-600 mb-2">Engage in hands-on learning with these projects:</p>
      <ul className="list-disc list-inside pl-4">
        <li><a href="/projects" className="text-blue-500 hover:underline">Project Ideas</a></li>
        <li><a href="/showcase" className="text-blue-500 hover:underline">Student Showcase</a></li>
        <li><a href="/collaborate" className="text-blue-500 hover:underline">Collaborate with Peers</a></li>
      </ul>
    </section>
  </div>
);

export default Home;
