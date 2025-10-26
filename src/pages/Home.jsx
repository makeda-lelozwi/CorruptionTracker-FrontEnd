import LatestNewsHeadline from '../components/LatestNews';
import Timeline from '../components/Timeline';
import Nav from '../components/Nav';

export default function Home() {
  return (
     <div className="min-h-screen flex flex-col">
      < Nav />
    <div className='flex-1 flex items-center justify-center'>
      <LatestNewsHeadline/>
    </div>
    <Timeline/>
    </div>
    
  );
}