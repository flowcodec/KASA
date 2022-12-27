import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '@/components/Banner/Banner';
import Home from './pages/Home/Home.js';
import About from '@/pages/About/About';
import Accommodation from '@/pages/Accommodation/Accommodation';
import Error from '@/pages/Error/Error';
import Footer from '@/components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/accommodation/:id" element={<Accommodation/>}/>
          <Route path="/*" element={<Error/>} />
        </Routes>
        <Footer /> 
  </div>
  );
}

export default App;