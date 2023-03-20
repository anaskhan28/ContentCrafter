import React from 'react'
import Pc from '../assets/pc.png'
function Home() {
  return (
    <div className='mt-[10rem]'>
        <div className='section flex justify-between m-12'>
          <div className='info-side max-w-sm flex flex-col gap-6 ml-16'>
           <div className=' relative text-[50px] font-bold'>Discover And Witness AI Works</div>
           <p>Automated Content Generation for Web and Social Media.</p>
           <div className='flex gap-6 cursor-pointer'>
           <button className=' bg-[#8F8FDB] rounded-full pr-12 pl-12 pt-[15px] pb-[15px]'>SIGN UP</button>
           <button className='border-solid rounded-full border-2 pr-8 pl-8 pt-[15px] pb-[15px] '>LEARN MORE</button>
           </div>
          </div>
          <div className='img-side -mt-20'>
          <img src={Pc} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Home