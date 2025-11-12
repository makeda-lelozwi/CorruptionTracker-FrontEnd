import { useState } from "react";

export function Meeting({ meeting }) {

    const [showSummary, setShowSummary] = useState(false);

    const toggleSummary = () => {
      setShowSummary(!showSummary);
    };
  return (
    <div className="meeting p-4 border rounded-lg">
      <h3 className="font-medium">{meeting.title}</h3>
      <p className="text-gray-200">{meeting.date}</p>
      <div className="flex">
        <button 
        className="text-gray-400 hover:underline cursor-pointer"
        onClick={toggleSummary}
      >
        {showSummary ? "Hide " : "Show"} Meeting Summary
      </button>
      <a 
        href={meeting.video_link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="ml-auto text-blue-400 hover:underline"
      >
        Watch Video
      </a>
      </div>
      

      {showSummary && (
        <p className="mt-2 text-white">{meeting.summary}</p>
      )}
    </div>
  );
}