import * as React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import {KeywordsExtractor, TextSummarize, SentimentAnalyzer} from './pages/tools/Tools';
import Home from './pages/Home';
import Usecase from './pages/usecase';
import About from './pages/about';
function App() {


  return (
    <div className="App">
          <Navbar/>
         
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/usecase' element={<Usecase/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/extractor' element={<KeywordsExtractor/>}/>
        <Route path='/summarize' element={<TextSummarize/>}/>
        <Route path='/sentiment' element={<SentimentAnalyzer/>}/>
       </Routes>
      
   
   
    </div>
  )
}

export default App
