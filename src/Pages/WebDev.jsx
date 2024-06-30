import React from 'react';

const WebDevelopment = () => (
  <div className="bg-gray-100 min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">Web Development Resources</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* HTML Step by Step Guide */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">HTML Step by Step Guide</h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/FYErehuSuuw?si=84rILmVYvh6vQixN"
            title="HTML Step by Step Guide"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-lg"
          ></iframe>
        </div>

        {/* CSS Step by Step Guide */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">CSS Step by Step Guide</h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/vfs1wBDoqBY?si=akLDpE0hUaFHR06T"
            title="CSS Step by Step Guide"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-lg"
          ></iframe>
        </div>

        {/* JavaScript Step by Step Guide */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">JavaScript Step by Step Guide</h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/jnfyH1k2c38?si=tNkd5MGll_W-hHu2"
            title="JavaScript Step by Step Guide"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-lg"
          ></iframe>
        </div>

        {/* React.js Step by Step Guide */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">React.js Step by Step Guide</h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/hVWhsHOQbXM?si=qVtE4W63hKdksqnm"
            title="React.js Step by Step Guide"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Version Control Step by Step Guide */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Version Control Step by Step Guide</h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/WzO6VynQ7UM?si=rxzdTqn0O9Bybsuj"
            title="Version Control Step by Step Guide"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Deployment Step by Step Guide */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Deployment Step by Step Guide</h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/96Mz6EQa09Q?si=jQC9Pqw8j7CYO_fs"
            title="Deployment Step by Step Guide"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
);

export default WebDevelopment;
