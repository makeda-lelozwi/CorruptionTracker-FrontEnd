import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { Testimony } from './pages/Testimony.jsx';
import { Allegations } from './pages/Allegations.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
  <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/testimony' element={<Testimony/>}/>
      <Route path='/allegations' element={<Allegations/>}/>
    </Routes>
  </QueryClientProvider>
  )
}

export default App;