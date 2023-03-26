import * as React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import bg  from './assets/circle-bg.png';
// import Home from './pages/Home';
// import Usecase from './pages/usecase';
// import About from './pages/about';
function App() {
const Home = React.lazy(() => import('./pages/Home'));
const Usecase = React.lazy(() => import('./pages/usecase'));
const About = React.lazy(() => import('./pages/about'));
const Loading = () => <p>Loading ...</p>;

  return (
    <div className="App">
          <Navbar/>
          <React.Suspense fallback={<Loading/>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/usecase' element={<Usecase/>}/>
        <Route path='/about' element={<About/>}/>
       </Routes>
       </React.Suspense>
   
   
    </div>
  )
}

export default App
