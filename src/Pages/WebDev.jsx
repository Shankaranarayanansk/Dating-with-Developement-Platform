import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

const resources = [
  {
    title: 'HTML Step by Step Guide',
    src: 'https://www.youtube.com/embed/FYErehuSuuw?si=84rILmVYvh6vQixN',
  },
  {
    title: 'CSS Step 1',
    src: 'https://www.youtube.com/embed/vfs1wBDoqBY?si=akLDpE0hUaFHR06T',
  },
  {
    title: 'CSS Step 2',
    src: 'https://www.youtube.com/embed/jnfyH1k2c38?si=tNkd5MGll_W-hHu2',
  },
  {
    title: 'CSS Step 3',
    src: 'https://www.youtube.com/embed/hVWhsHOQbXM?si=qVtE4W63hKdksqnm',
  },
  {
    title: 'CSS Step 4',
    src: 'https://www.youtube.com/embed/YJsqKbqgpEY?si=Tg0Ky05jbCRgydH7',
  },
  {
    title: 'JavaScript Step 1',
    src: 'https://www.youtube.com/embed/videoseries?si=dAP397fcsumMRg31&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP',
  },
  {
    title: 'JavaScript Step 2',
    src: 'https://www.youtube.com/embed/videoseries?si=JRguvGTiBY78t-JF&list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX',
  },
  {
    title: 'Project Building 1',
    src: 'https://www.youtube.com/embed/videoseries?si=iwztuOJnkAIbrG-O&list=PL4unWLKFsZfcx5algbuhyQDGtCN1j97Ul',
  },
  {
    title: 'Project Building 2',
    src: 'https://www.youtube.com/embed/videoseries?si=sUolUTDulRbzOcLk&list=PLDeyqbIrSi94DpxPdxa_38L-i7vBfaytn',
  },
  {
    title: 'Tailwind CSS 1',
    src: 'https://www.youtube.com/embed/q4nhEyFMzVg?si=8i5ZPMw-jlY4B95-',
  },
  {
    title: 'Tailwind CSS 2',
    src: 'https://www.youtube.com/embed/videoseries?si=jufGXiY9XZbRqXGf&list=PLXCfOoPnFIbtcyk6OYaSlVKfSJ1A24Qhp',
  },
  {
    title: 'React.js',
    src: 'https://www.youtube.com/embed/videoseries?si=t5_cMtZyJhtdpaCP&list=PL5mydh8SndyNMhrcuQqY1VY_cVTaoJC5C',
  },
  {
    title: 'Version Control',
    src: 'https://www.youtube.com/embed/WzO6VynQ7UM?si=rxzdTqn0O9Bybsuj',
  },
  {
    title: 'Deployment 1',
    src: 'https://www.youtube.com/embed/96Mz6EQa09Q?si=jQC9Pqw8j7CYO_fs',
  },
  {
    title: 'Deployment 2',
    src: 'https://www.youtube.com/embed/hiqsYwW7-jA?si=clb7yTx5Cjeu7qIx',
  },
];

const WebDevelopment = () => {
  const [loadingStates, setLoadingStates] = useState(
    new Array(resources.length).fill(true)
  );
  const [timeoutStates, setTimeoutStates] = useState(
    new Array(resources.length).fill(false)
  );

  const handleLoad = (index) => {
    const newLoadingStates = [...loadingStates];
    newLoadingStates[index] = false;
    setLoadingStates(newLoadingStates);
  };

  useEffect(() => {
    const timers = resources.map((_, index) => 
      setTimeout(() => {
        const newTimeoutStates = [...timeoutStates];
        newTimeoutStates[index] = true;
        setTimeoutStates(newTimeoutStates);
      }, 10000) // 10 seconds timeout
    );

    // Cleanup timeouts if component unmounts
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Web Development Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">{resource.title}</h2>
              {loadingStates[index] && !timeoutStates[index] && (
                <div className="flex justify-center items-center h-80">
                  <ReactLoading type="spin" color="#36D7B7" height={50} width={50} />
                </div>
              )}
              {timeoutStates[index] && (
                <div className="flex justify-center items-center h-80 text-red-500">
                  <p>Loading is taking longer than expected...</p>
                </div>
              )}
              <iframe
                width="100%"
                height="315"
                src={resource.src}
                title={resource.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className={`rounded-lg ${loadingStates[index] ? 'hidden' : ''}`}
                onLoad={() => handleLoad(index)}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
