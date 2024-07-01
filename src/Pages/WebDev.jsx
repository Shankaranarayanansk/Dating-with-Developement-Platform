import React from 'react';

const videoData = [
  {
    title: 'Logical Reasoning',
    src: 'https://www.youtube.com/embed/ORSrxVQ9SjM?si=uBZJFd6z8c18bikB'
  },
  {
    title: 'Quantitative Aptitude',
    src: 'https://www.youtube.com/embed/videoseries?si=VEldtgjbG2MQGLOJ&amp;list=PLjLhUHPsqNYkcq6YOfiywbTfnvf_TN7i9'
  },
  {
    title: 'Verbal Ability',
    src: 'https://www.youtube.com/embed/videoseries?si=0dTPAuI3wUcjqS5o&amp;list=PLpyc33gOcbVBbD8Vfy-gCbivjSSHbMpUX'
  },
  {
    title: 'Data Interpretation',
    src: 'https://www.youtube.com/embed/videoseries?si=dhAFnnSxuMlFjxKK&amp;list=PL1lPSVzW89HbjJYYcO8On93-I2UsTnoqD'
  },
  {
    title: 'Analytical Reasoning',
    src: 'https://www.youtube.com/embed/videoseries?si=3s5mFXj6zo4tcl6r&amp;list=PLm_TIgLG6QUc2WLJ-H2EtHZCQUy2TgXxB'
  },
  {
    title: 'Math Tricks',
    src: 'https://www.youtube.com/embed/X98-TJRMZRk?si=dpfsLUHDNu2V6zAM'
  },
  {
    title: 'Comunicational Skills',
    src: 'https://www.youtube.com/embed/videoseries?si=f57lDnmC3OYYtHxh&amp;list=PLOaeOd121eBEEWP14TYgSnFsvaTIjPD22'
  },
  {
    title: 'Resume Building',
    src: 'https://www.youtube.com/embed/imdfVam4Yb4?si=gwC0G-SPkqRTi_Uq'
  },
  {
    title: 'Coding Round',
    src: 'https://www.youtube.com/embed/videoseries?si=2_V2VAL8V3Mpck3i&amp;list=PLWKjhJtqVAblv09G3sFgRMSeR0jnKQmJ9'
  }
];

const Aptitude = () => (
  <div className="bg-gray-100 min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">Aptitude Resources</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videoData.map((video, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{video.title}</h2>
            <iframe
              width="100%"
              height="315"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Aptitude;
