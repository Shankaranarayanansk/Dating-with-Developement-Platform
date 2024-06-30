import React, { useEffect, useState } from 'react';

const Trending = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingArticles = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=IT&apiKey=bdec419fc147404ca876a88be151951e');
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        setArticles(data.articles.slice(0, 4)); // Limit to 4 articles
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTrendingArticles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-2 lg:ml-64">
      <h1 className="text-2xl font-bold mb-4">Trending</h1>
      <p className="mb-4">Stay updated with the latest trends in technology.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden h-[400px] flex flex-col">
            <div className="h-48 overflow-hidden">
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="w-full h-full object-cover" />
              )}
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h2>
              <p className="text-gray-600 mb-4 flex-grow overflow-hidden line-clamp-3">{article.description}</p>
              <a href={article.url} className="text-blue-500 hover:underline mt-auto" target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;