import { useEffect, useState } from "react"

export default function LatestNewsHeadline() {
   const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_URL = 'https://corruptiontracker-1.onrender.com/';
    
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setNews(data.news[0] || []);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="App">
        <div className="loading">Loading Parliament News...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  return (
    <> 
        {news ? (
             <div className="flex flex-col gap-2 justify-center items-center ">
                <h3>{news.title}</h3>
                <p className="italic text-gray-300 text-xs">{news.date}</p>
                <a 
                  href={news.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="read-more"
                >
                  Read Full Article →
                </a>
              </div>
        ): (
          <p>No articles found</p>
        ) }
     
    </>
  );
}