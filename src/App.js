import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Interests from './Components/Interests';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const switchMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
   <>
    <Router>
      <Navbar mode = {mode} switchMode={switchMode}/>
        <Routes>
        <Route path="/" element={<Home mode = {mode} switchMode={switchMode}/>}> 
        </Route>
        <Route path="/Interests" element={<Interests mode = {mode}/>}>
        </Route>
        </Routes>
      </Router>
      <Footer mode={mode}/>
   </>
  );
}

export default App;
