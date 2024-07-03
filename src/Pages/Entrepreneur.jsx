import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Undergraduate = () => {
  const [videoData, setVideoData] = useState([]);
  const API_KEY = 'AIzaSyD1YxyeDvK23rTBbCgNofFyvVoy8y0cs20';
  const CHANNEL_IDS = [
    '@siddahmed', // Channel 1 ID
    '@Blacksheepgoofficial', // Channel 2 ID
    '@HOUSEOFMAVERICK', // Channel 3 ID
    '@theRahulM', // Channel 4 ID
  ];

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoPromises = CHANNEL_IDS.map(channelId =>
          axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
              part: 'snippet',
              channelId: channelId,
              maxResults: 6,
              order: 'date',
              type: 'video',
              key: API_KEY
            }
          }).then(response => response.data.items.map(item => ({
            title: item.snippet.title,
            src: `https://www.youtube.com/embed/${item.id.videoId}`
          })))
        );

        const videoResults = await Promise.all(videoPromises);
        const allVideos = videoResults.flat();
        setVideoData(allVideos);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchVideos();
  }, [API_KEY, CHANNEL_IDS]);

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">IT Tech Resources</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoData.map((video, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">{video.title}</h2>
              <iframe
                width="100%"
                height="315"
                src={video.src}
                title={video.title}
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
};

export default Undergraduate;

