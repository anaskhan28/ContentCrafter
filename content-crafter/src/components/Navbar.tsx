import React from 'react'
import circle from '../assets/circle.svg'
import {Link} from 'react-router-dom';
function Navbar() {
    
    return (
        <div className="relative">
        <img className="absolute -top-20" src={circle}/>
  
     
      <div className='flex gap-4 justify-between m-12'>
          
          <div className=' cursor-pointer font-bold text-lg relative m-4'>ContentCrafter</div>
          <div className='flex gap-8'>
          
              <ol className='cursor-pointer m-4  gap-8 flex flex-row'>
                  <li><Link to='/'>home</Link></li>
                  <li ><Link to='/usecase'>usecase</Link></li>
                  <li ><Link to='/about'>about</Link></li>
              </ol>
              
         
       
        </div>
      
      </div>
      </div>
  )
}

export default Navbar