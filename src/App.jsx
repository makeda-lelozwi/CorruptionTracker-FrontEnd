import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { Testimony } from './pages/Testimony.jsx';
import { Allegations } from './pages/Allegations.jsx';

function App() {
 
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/testimony' element={<Testimony/>}/>
    <Route path='/allegations' element={<Allegations/>}/>
   </Routes>

  )
}

export default App;