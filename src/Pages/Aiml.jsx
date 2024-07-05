import React from "react";

const resources = [
  {
    title: "Introduction to AI",
    src: "https://www.youtube.com/embed/kWmX3pd1f10?si=xdYq2g3rUmsHdsAk",
  },
  {
    title: "Machine Learning Basics",
    src: "https://www.youtube.com/embed/GwIo3gDZCVQ?si=LQEXNUHUKuOCwKoM",
  },
  {
    title: "Deep Learning Introduction",
    src: "https://www.youtube.com/embed/aircAruvnKk?si=9eCe2PTrKDlFWgRc",
  },
  {
    title: "AI in Practice",
    src: "https://www.youtube.com/embed/aVId8KMsdUU?si=pUGj9v4oXk5E23v4",
  },
  {
    title: "Neural Networks",
    src: "https://www.youtube.com/embed/aircAruvnKk?si=Wy2F2x1WbiURy5CZ",
  },
  {
    title: "AI and Ethics",
    src: "https://www.youtube.com/embed/qpp1G0iEL_c?si=J6QqzJ7Yy4gM8l27",
  },
  {
    title: "TensorFlow Tutorial",
    src: "https://www.youtube.com/embed/tPYj3fFJGjk?si=ZQF6Ql4I53uZjI8J",
  },
  {
    title: "PyTorch Tutorial",
    src: "https://www.youtube.com/embed/V_xro1bcAuA?si=gQ0AIoHPKxZHyGMm",
  },
  {
    title: "Introduction of Open CV",
    src: "https://www.youtube.com/embed/oXlwWbU8l2o?si=a5CDWWDu_P5ORyL2",
  },
  {
    title: "AI Project 1",
    src: "https://www.youtube.com/embed/x0AnCE9SE4A?si=Y7UiY6GldkFG8iMP",
  },
  {
    title: "AI Project 2",
    src: "https://www.youtube.com/embed/videoseries?si=_sLQejX88AvVfbwz&amp;list=PLMoSUbG1Q_r8jFS04rot-3NzidnV54Z2q",
  },
  {
    title: "AI Project 3",
    src: "https://www.youtube.com/embed/dXxQ0LR-3Hg?si=WLm_kAM2WhLXUc_8",
  },
];

const Aiml = () => (
  <div className="bg-gray-100 min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">AI/ML Resources</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{resource.title}</h2>
            <iframe
              width="100%"
              height="315"
              src={resource.src}
              title={resource.title}
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

export default Aiml;
