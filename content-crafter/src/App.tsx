import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import bg  from './assets/circle-bg.png';
import Home from './pages/Home';
function App() {


  return (
    <div className="App">
       <Navbar/>
       <Home/>
   
    </div>
  )
}

export default App
