import React from 'react'
import phone from '../assets/phone.png';
import shop from '../assets/shop.png';
import email from '../assets/email.png';
import social from '../assets/social.png';
function usecase() {
  return (
    <div>
       <section className='shop flex flex-col justify-center items-center mb-44'>
       <div className='text-[#84CECF] text-lg pb-4'>USECASE</div>
       <p className='text-[50px] font-bold max-w-lg text-center tracking-tight leading-normal'>Awesome Content Tools</p>
       <div className='grid grid-cols-3 gap-[8rem] mb-20 mt-20'>
       <div className= 'max-w-[400px] h-[200px] rounded-lg bg-[#252D62]'>
       <img className=' mix-blend-luminosity relative bottom-12 left-28 ' src={shop}/>
       <p className='text-[20px] tracking-wide text-center -mt-10'>Content Idea</p>
          <p className='max-w-[300px] pl-12 text-center pb-8'>
         Get Latest Content Idea on any topic help you to get started using AI assistant. </p>
          <button className='  bg-[#8F8FDB] max-w-12 h-auto p-2 rounded-full  relative bottom-4 left-28'>Generate with AI</button>
       </div>
       <div className= 'max-w-[400px] h-[200px] rounded-lg bg-[#252D62]'>
       <img className=' mix-blend-luminosity relative bottom-12 left-28 ' src={email}/>
       <p className='text-[20px] tracking-wide text-center -mt-10'>Cold Emails</p>
          <p className='max-w-[350px]  text-center pb-8'>
          Write a clear engaging emails to  
          generate the outline to help you to get started using AI assistant. </p>
          <button className='  bg-[#8F8FDB] max-w-12 h-auto p-2 rounded-full  relative bottom-4 left-28'>Generate with AI</button>
       </div>
       <div className= 'max-w-[400px] h-[200px] rounded-lg bg-[#252D62]'>
       <img className=' mix-blend-luminosity relative bottom-12 left-28 ' src={social}/>
       <p className='text-[20px] tracking-wide text-center -mt-10'>Articles</p>
          <p className='max-w-[350px]  text-center pb-8'>
          Write a clear engaging articles or blogs to  
          generate the outline to help you to get started using AI assistant. </p>
          <button className='  bg-[#8F8FDB] max-w-12 h-auto p-2 rounded-full  relative bottom-4 left-28'>Generate with AI</button>
       </div>
       <div className= 'max-w-[400px] h-[200px] rounded-lg bg-[#252D62]'>
       <img className=' mix-blend-luminosity relative bottom-12 left-28 ' src={social}/>
       <p className='text-[20px] tracking-wide text-center -mt-10'>Social Media</p>
          <p className='max-w-[300px] pl-12 text-center pb-8'>
          Write awesome content for social media and get journey started with the AI assistant. </p>
          <button className='  bg-[#8F8FDB] max-w-12 h-auto p-2 rounded-full  relative bottom-4 left-28'>Generate with AI</button>
       </div>
       <div className= 'max-w-[400px] h-[200px] rounded-lg bg-[#252D62]'>
       <img className=' mix-blend-luminosity relative bottom-12 left-28 ' src={shop}/>
       <p className='text-[20px] tracking-wide text-center -mt-10'>Product Summary</p>
          <p className='max-w-[300px] pl-12 text-center pb-8'>
          Write a clear engaging product description help you to get started using AI assistant. </p>
          <button className='  bg-[#8F8FDB] max-w-12 h-auto p-2 rounded-full  relative bottom-4 left-28'>Generate with AI</button>
       </div>
       <div className= 'max-w-[400px] h-[200px] rounded-lg bg-[#252D62]'>
       <img className=' mix-blend-luminosity relative bottom-12 left-28 ' src={social}/>
       <p className='text-[20px] tracking-wide text-center -mt-10'>Funny Content</p>
          <p className='max-w-[350px]  text-center pb-8'>
          Write a clear engaging ideas and blogs to  
          generate the outline to help you to get started using AI assistant. </p>
          <button className='  bg-[#8F8FDB] max-w-12 h-auto p-2 rounded-full  relative bottom-4 left-28'>Generate with AI</button>
       </div>
       </div>
       </section>
    </div>
  )
}

export default usecase