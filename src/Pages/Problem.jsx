import React from "react";

const resources = [
  {
    title: "Programming in Python",
    src: "https://www.youtube.com/embed/m67-bOpOoPU?si=mLXiLWXcJPO3Cw9W",
  },
  {
    title: "Programming in C++",
    src: "https://www.youtube.com/embed/videoseries?si=a77AT8d4286SAa3M&amp;list=PLdo5W4Nhv31YU5Wx1dopka58teWP9aCee",
  },
  {
    title: "Programming in Java",
    src: "https://www.youtube.com/embed/videoseries?si=QE68xfu_O23zlpLA&amp;list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
  },
  {
    title: "Problem Solving Roadmap",
    src: "https://www.youtube.com/embed/aYAZUlArVEY?si=wNdwY1hVnCfPwAVh",
  },
  {
    title: "Maths For DSA",
    src: "https://www.youtube.com/embed/lmSpZ0bjCyQ?si=y8UtuIQUM4Qzf9f6",
  },
  {
    title: "Algorithm Concepts",
    src: "https://www.youtube.com/embed/videoseries?si=lZ9pY0FNDiVvqdr0&amp;list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O",
  },
  {
    title: "Problem Solving Approches",
    src: "https://www.youtube.com/embed/videoseries?si=69comVBT0EunMmFD&amp;list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",
  },
  {
    title: "Dyanamic Programming",
    src: "https://www.youtube.com/embed/videoseries?si=FcCI1CkRFQZHbkIL&amp;list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go",
  },
  {
    title: "Hard Coding Challenges",
    src: "https://www.youtube.com/embed/videoseries?si=vzbLI4gb44nNQNz7&amp;list=PLliXPok7Zonn3pcQp2TzNYnIKq1jPoLM8",
  },
  {
    title: "Leetcode Guide",
    src: "https://www.youtube.com/embed/yf_68nHyjZc?si=njF8mC87Il4jBMEi",
  },
  {
    title: "Codeforce Guide",
    src: "https://www.youtube.com/embed/8ytTfMEsW40?si=zPJN8RHx2qlTkKL8",
  },
  {
    title: "Geeks For Geeks Guide",
    src: "https://www.youtube.com/embed/6tWKcKJo-5g?si=-r1jY0tNs_ogQirR",
  },
];

const ProblemSolving = () => (
  <div className="bg-gray-100 min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Logical Programming Resources
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{resource.title}</h2>
            <iframe
              width="100%"
              height="315"
              src={resource.src}
              title={resource.title}
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

export default ProblemSolving;
