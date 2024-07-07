import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

const Entrepreneur = () => {
  const [videoData, setVideoData] = useState([]);
  const [loadingStates, setLoadingStates] = useState([]);
  const [timeoutStates, setTimeoutStates] = useState([]);
  const API_KEY = 'AIzaSyD1YxyeDvK23rTBbCgNofFyvVoy8y0cs20';
  const CHANNEL_HANDLE = '@HOUSEOFMAVERICK'; 

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
        setLoadingStates(new Array(videos.length).fill(true));
        setTimeoutStates(new Array(videos.length).fill(false));
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchChannelId().then(fetchVideos).catch(error => console.error('Error in fetching process:', error));
  }, [API_KEY, CHANNEL_HANDLE]);

  useEffect(() => {
    const timers = videoData.map((_, index) => 
      setTimeout(() => {
        const newTimeoutStates = [...timeoutStates];
        newTimeoutStates[index] = true;
        setTimeoutStates(newTimeoutStates);
      }, 40000) // 40 seconds timeout
    );

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [videoData]);

  const handleLoad = (index) => {
    const newLoadingStates = [...loadingStates];
    newLoadingStates[index] = false;
    setLoadingStates(newLoadingStates);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Entrepreneur Resources</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoData.map((video, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">{video.title}</h2>
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
                src={video.src}
                title={video.title}
                onLoad={() => handleLoad(index)}
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

export default Entrepreneur;
