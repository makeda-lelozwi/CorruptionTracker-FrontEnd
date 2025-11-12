import { Link } from "react-router-dom";
export function Allegations() {
    return (
        <>
        <Link to="/">Back to Home Page</Link>
        <div className="p-8">
             
            <div className="flex items-center mb-6 justify-center">
                <h1 className="text-2xl mb-4 ">Allegations made by Lt-Gen Mkhwanazi on 6 July 2025</h1>
            </div>
           
            <p className="mb-6 uppercase text-lg text-pretty">A sophisticated criminal syndicate has infiltrated law enforcement and intelligence structures in South Africa</p>
            <div className="flex flex-col gap-4">
                <h2 className="underline">1. The Political Killings Task Team Disbandment</h2>
                <p> The Minister of Police allegedly interfered with sensitive police investigations and colluded with business people, including a murder accused, to disband the Political Killings Task Team based in KwaZulu-Natal.</p>
                
                <h2 className="underline">2. Existence and operation of a sophisticated crimimal syndicate involving public servants and politicians.  </h2>
                <p>A police investigation by the task team in Gauteng unmasked a syndicate controlled by a drug cartel, which involves politicians, law enforcement officials from the SAPS, metro police and correctional services, prosecutors and the judiciary, as well as business people.</p>
            </div>
        </div>
        </>
        
    );
}