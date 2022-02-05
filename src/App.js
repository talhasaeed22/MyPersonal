import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

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
    <Navbar mode = {mode} switchMode={switchMode}/>
    <Home mode = {mode} switchMode={switchMode}/>
    <Footer/>
   </>
  );
}

export default App;
