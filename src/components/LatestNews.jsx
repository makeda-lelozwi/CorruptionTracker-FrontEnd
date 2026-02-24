import { useQuery } from "@tanstack/react-query";
import { getLatestHeadline } from "../api/Api";

export default function LatestNewsHeadline() {
  const {
    data: news,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["latest-headline"],
    queryFn: getLatestHeadline,
  });

  if (isLoading) {
    return (
      <div className="App">
        <div className="loading">Loading Parliament News...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <div className="error">Error: {error.message}</div>
      </div>
    );
  }

  return (
    <> 
        {news ? (
             <div className="flex flex-col gap-2 justify-center items-center ">
                <h3>{news.title}</h3>
                <p className="italic text-gray-300 text-xs">
                    {new Date(news.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
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
