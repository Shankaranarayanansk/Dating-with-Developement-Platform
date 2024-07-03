import React, { useEffect, useState } from 'react';

const Undergraduate = () => {
  const [videoData, setVideoData] = useState([]);
  const API_KEY = 'AIzaSyD1YxyeDvK23rTBbCgNofFyvVoy8y0cs20';
  const CHANNEL_HANDLE = '@TED'; 

  useEffect(() => {
    const fetchChannelId = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${CHANNEL_HANDLE}&type=channel&key=${API_KEY}`);
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          return data.items[0].id.channelId;
        } else {
          console.error('Channel not found');
        }
      } catch (error) {
        console.error('Error fetching channel ID:', error);
      }
      return null;
    };

    const fetchVideos = async (channelId) => {
      if (!channelId) return;
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=5&order=date&type=video&key=${API_KEY}`);
        const data = await response.json();
        const videos = data.items.map(item => ({
          title: item.snippet.title,
          src: `https://www.youtube.com/embed/${item.id.videoId}`
        }));
        setVideoData(videos);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchChannelId().then(fetchVideos).catch(error => console.error('Error in fetching process:', error));
  }, [API_KEY, CHANNEL_HANDLE]);

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Communicational Development Resources</h1>

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
