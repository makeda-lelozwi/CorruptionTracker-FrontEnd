import { useQuery } from "@tanstack/react-query";
import { populateMeetingMinutes } from "../api/meeting-minutes";
import { Meeting } from "../components/Meeting";
import { Link } from "react-router-dom";

const officials = [
 "Lieutenant-General Mkhwanazi",
 "Lt Gen Mkhwanazi",
  "Mr Senzo Mchunu",
  "General Masemola",
  "General Shadrack Sibiya",
  "Minister Senzo Mchunu",
  "Gen Bheki Cele",
  "Deputy Minister Cassel Mathale",
  "Deputy Minister Shela Boshielo",
  "Minister Firoz Cachalia",
  "Adv Andrea Johnson",
  "Adv Shamila Bahoti",
  "SAPS Chief of Staff Cedrick Nkabinde",
  "Mary De Haas",
  "Lt Gen Molefe Fani",
  "Lt Gen Puleng Dimpane",
  "Mr Vusimuzi Matlala",
  "Lt Gen Khomotso Phahlane",
  "Lt. General Dumisani Khumalo",
  "Lt. Gen Dumisani Khumalo",
  "Mr Robert McBride",
  "Mr Julius Mkhwanazi",
  "Oral evidence by Members of the Public",
  "Hon Kohler Barnard",
  "Mr Paul O’Sullivan",
  "Mr Brown Mokgotsi",
  
];

const groupMeetingsByOfficial = (meetings) => {
  const grouped = {};

  officials.forEach((official) => {
    grouped[official] = meetings.filter((meeting) =>
      meeting.title?.includes(official)
    );
  });

  grouped["Others"] = meetings.filter(
    (meeting) =>
      !officials.some((official) => meeting.title?.includes(official))
  );

  return grouped;
};

export function Testimony() {
  const {
    data: groupedMeetings = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["meeting-minutes"],
    queryFn: async () => {
      const data = await populateMeetingMinutes();

      if (!Array.isArray(data)) {
        throw new Error("Failed to load meeting minutes");
      }

      return groupMeetingsByOfficial(data);
    },
  });
  
  return <div className="px-2">
   <div className="cursor-pointer">
      <Link to="/">Back to Home Page</Link>
    </div>
    {isLoading && <div className="flex items-center justify-center min-h-screen"><p className="text-white ">Loading Inquiry Sessions...</p></div>}
    {error && <div className="flex items-center justify-center min-h-screen"><p className="text-red-400">Failed to load inquiry sessions.</p></div>}
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
