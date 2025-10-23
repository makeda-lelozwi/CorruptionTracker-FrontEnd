import './App.css';
import LatestNewsHeadline from './components/LatestNews';
import Timeline from './components/Timeline';

function App() {
 
  return (
    <div className="min-h-screen flex flex-col">
    <div className='flex-1 flex items-center justify-center'>
      <LatestNewsHeadline/>
    </div>
    <Timeline/>
    </div>
    

  )
}

export default App;