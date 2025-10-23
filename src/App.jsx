import './App.css';
import LatestNewsHeadline from './components/LatestNews';
import Timeline from './components/Timeline';
import Nav from './components/Nav';

function App() {
 
  return (
    <div className="min-h-screen flex flex-col">
      < Nav />
    <div className='flex-1 flex items-center justify-center'>
      <LatestNewsHeadline/>
    </div>
    <Timeline/>
    </div>
    

  )
}

export default App;