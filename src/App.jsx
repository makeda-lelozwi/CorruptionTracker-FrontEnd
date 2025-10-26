import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { Testimony } from './pages/Testimony.jsx';

function App() {
 
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/testimony' element={<Testimony/>}/>
   </Routes>

  )
}

export default App;