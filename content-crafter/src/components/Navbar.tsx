import React from 'react'
import circle from '../assets/circle.svg'
function Navbar() {
    const links = ['usecase', 'introduction', 'about', 'login']
    return (
        <div className="relative">
        <img className="absolute -top-20" src={circle}/>
  
     
      <div className='flex gap-4 justify-between m-12'>
          
          <div className=' cursor-pointer font-bold text-lg relative m-4'>ContentCrafter</div>
          <div className='flex gap-8'>
          {links.map((link,index) =>(
              <ol className='cursor-pointer m-4'  key={index}>
                  <li >{link}</li>
              </ol>
              
         
          ))}
        </div>
      
      </div>
      </div>
  )
}

export default Navbar