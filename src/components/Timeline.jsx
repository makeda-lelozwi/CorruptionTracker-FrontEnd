export default function Timeline() {
  const steps = [
    {
      id: "01",
      title: "IMC on Political Killings Established",
      date: "14 May 2018",
      description:
      "IMC sets up by President Cyril Ramaphosa to address political killings in KwaZulu-Natal.",   
      link:"https://www.sabcnews.com/sabcnews/ministerial-committee-to-look-into-kzn-political-killings/?utm_source=chatgpt.com" 
    },
    {
      id: "02",
      title: "Political Killings Task Team Created ",
      date: "July 2018",
      description:
        "Formation of the Political Killings Task Team (PKTT) to coordinate investigations and enforcement actions.",
    },
    {
      id: "03",
      title: "Media Briefing",
      date: "06 July 2025",
      description:
      "By Lt Gen. Mkhwanazi on criminality, political interference, and corruption within the SAPS afftecting PKTT." ,
    },
    {
      id: "04",
      title: "Madlanga Commission Day 1",
      date: "17 September 2025",
      description:
        "The first day of the Madlanga Commission hearings into political killings and institutional accountability.",
    },
    {
      id: "05",
      title: "Ad Hoc Committee",
      date: "8 October 2025",
      description:
        "Begins hearing evidence. Starting with testimony from Provincial Commissioner Lt. Gen. Mkhwanazi.",
    },
  ];

  return (
    <div className="flex items-end justify-center px-4 py-6">
      <div className="w-full max-w-9xl ">
        <div className="flex justify-between items-center relative">
          {/* horizontal line */}
          <div className="absolute top-1/2 left-0 right-0 h-px  bg-zinc-800"></div>

          {steps.map((step, index) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full border-2 border-zinc-700 flex items-center justify-center bg-black text-white text-lg font-semibold">
                {index + 1}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-200">
                {step.title}
              </h3>
              <p className="text-xs text-gray-400">{step.date}</p>
              <p className="text-xs text-gray-500 mt-1 max-w-48">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
