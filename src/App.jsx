
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
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
        setNews(data.news || []);
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
    <div className="App">
      <header className="App-header">
        <h1>Ad Hoc Tracker </h1>
        <h2>Tracking progress of the Ad Hoc Committee on Allegations Made by Lt Gen Mkhwanazi</h2>
      </header>
      
      <main className="news-container">
        {/* <p className="total">Total Articles: {news.length}</p> */}
        
        {news.length === 0 ? (
          <p>No articles found</p>
        ) : (
          <div className="news-grid">
            {news.map((article, index) => (
              <div key={index} className="news-card">
                <h3>{article.title}</h3>
                <p className="date">📅 {article.date}</p>
                <a 
                  href={article.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="read-more"
                >
                  Read Full Article →
                </a>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;