import React from 'react';

const videoData = [
  {
    title: 'Flutter Roadmap',
    src: 'https://www.youtube.com/embed/lmD5g6sJEDM?si=h4IHvB2EOTBmOGtA'
  },
  {
    title: 'Flutter Learning 1',
    src: 'https://www.youtube.com/embed/CzRQ9mnmh44?si=spWVWsVKiVykphEJ'
  },
  {
    title: 'Flutter Learning 2',
    src: 'https://www.youtube.com/embed/videoseries?si=TdVxF3SrcWQDfjw-&list=PLlzmAWV2yTgCt-BD-7aZSNzKfvkgLge4G'
  },
  {
    title: 'Flutter Learning 3',
    src: 'https://www.youtube.com/embed/videoseries?si=OOLvUJu_D6-tlPpO&list=PLlzmAWV2yTgAHusjpyJWe4BgUfrbZ7Guw'
  },
  {
    title: 'Flutter Learning 4',
    src: 'https://www.youtube.com/embed/videoseries?si=LkWEPDCsX-HNj5Fz&list=PLlzmAWV2yTgCy-7rFj8l59LQKoqfTUY62'
  },
  {
    title: 'Flutter Learning 5',
    src: 'https://www.youtube.com/embed/videoseries?si=k_0ap93b2z81XTTx&list=PLlzmAWV2yTgB-1LdoO-9vCTgrE-1dyWKP'
  },
  {
    title: 'Flutter Learning 6',
    src: 'https://www.youtube.com/embed/pv4NhV86ZKg?si=aVsa-7D-tgpyi6l0'
  },
  {
    title: 'Flutter Projects 1',
    src: 'https://www.youtube.com/embed/CWvlOU2Y3Ik?si=41Noqrv2sZopbCgW'
  },
  {
    title: 'Flutter Projects 2',
    src: 'https://www.youtube.com/embed/ylJz7N-dv1E?si=O-W_iXG8Iy8CXHdO'
  },
  {
    title: 'Flutter Projects 3',
    src: 'https://www.youtube.com/embed/UE1N1AO0RoY?si=gkCZMmdAXzlDHm93'
  },
  {
    title: 'React Native App Development 1',
    src: 'https://www.youtube.com/embed/ZBCUegTZF7M?si=Cf-siDk7suC3w-DP'
  },
  {
    title: 'React Native App Development 2',
    src: 'https://www.youtube.com/embed/UVZ5LGhiBkY?si=7wi_Yo9pp4uE1aYm'
  },
  {
    title: 'React Native App Development 3',
    src: 'https://www.youtube.com/embed/VozPNrt-LfE?si=eb9ij3HRDQ0jgiKi'
  }
];

const AppDevelopment = () => (
  <div className="bg-gray-100 min-h-screen py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">App Development Resources</h1>

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

export default AppDevelopment;
