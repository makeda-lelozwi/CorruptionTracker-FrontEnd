export default function Nav() {

    return (
        <nav className="p-4 flex flex-col items-end">
           <div className="cursor-pointer hover:border-b-2">
            <h2>Allegations</h2>
           </div>
           <div className="cursor-pointer hover:border-b-2">
            <h2>Key Organisations and Individuals</h2>
           </div>
            <div className="cursor-pointer hover:border-b-2">
            <h2>Testimony</h2>
           </div>
        </nav>
    )
}