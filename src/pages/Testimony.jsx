import { useEffect, useState } from "react";
import { populateMeetingMinutes } from "../api/meeting-minutes";
import { Meeting } from "../components/Meeting";
import { Link } from "react-router-dom";

export function Testimony() {
  const [groupedMeetings, setGroupedMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const officials = [
    "Lieutenant-General Mkhwanazi",
    "Lt Gen Mkhwanazi",
    "Mr Senzo Mchunu",
    "General Masemola",
    "General Shadrack Sibiya",
    "Minister Senzo Mchunu",
    "Gen Bheki Cele",
    
  ];

    const groupMeetingsByOfficial = (meetings) => {
    const grouped = {};
    
    officials.forEach(official => {
      grouped[official] = meetings.filter(meeting => 
        meeting.title.includes(official)
      );
    });

    // Add an "Others" category for meetings that don't match any official
    grouped["Others"] = meetings.filter(meeting => 
      !officials.some(official => meeting.title.includes(official))
    );

    return grouped;
  };
  
  const fetchData = async () => {
      const data = await populateMeetingMinutes();
      const grouped = groupMeetingsByOfficial(data);
      console.log("Grouped Meetings:", grouped);
      setLoading(false);
      setGroupedMeetings(grouped);
    };
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 5000);
  }, []);
  
  return <div className="px-2">
   <div className="cursor-pointer hover:border-b-2">
      <Link to="/">Back to Home Page</Link>
    </div>
    {loading && <div className="flex items-center justify-center min-h-screen"><p className="text-white ">Loading Inquiry Sessions...</p></div>}
    {officials.map(official => (
        groupedMeetings[official]?.length > 0 && (
          <div key={official} className="official-group">
            <h2 className="text-xl font-bold mt-6 mb-4">{official}</h2>
            <div className="grid gap-4">
              {groupedMeetings[official]?.map((meeting, index) => (
                <Meeting key={index} meeting={meeting}/>
              ))}
            </div>
          </div>
        )
      ))}

     
     {groupedMeetings["Others"]?.length > 0 && (
        <div className="official-group">
          <h2 className="text-xl font-bold mt-6 mb-4">Others</h2>
          <div className="grid gap-4">
            {groupedMeetings["Others"]?.map((meeting, index) => (
              <Meeting key={index} meeting={meeting}/>
            ))}
          </div>
        </div>
      )}

  </div>;
}