import React from 'react'
import Pc from '../assets/pc.png'
import boy from '../assets/boy.png';
import circle2 from '../assets/circle2.svg'
import phone from '../assets/phone.png';
import shop from '../assets/shop.png';
import email from '../assets/email.png';
import social from '../assets/social.png';
import {Link} from 'react-router-dom';
import ServiceCard from '../components/Card';
function Home() {
  return (
    <div className='relative'>

        <section className='section flex justify-between m-12 mt-32'>
          <div className='info-side max-w-sm flex flex-col gap-6 ml-16'>
           <div className=' relative text-[50px] font-bold'>Discover And Witness AI Works</div>
           <p>Automated Content Generation for Web and Social Media.</p>
           <div className='flex gap-6 cursor-pointer'>
           <button className=' bg-[#8F8FDB] rounded-full pr-12 pl-12 pt-[15px] pb-[15px]'><Link to='/usecase'>THE TRUTH</Link></button>
           <button className='border-solid rounded-full border-2 pr-8 pl-8 pt-[15px] pb-[15px] '><Link to='/about'>LEARN MORE</Link></button>
           </div>
          </div>
          <div className='img-side -mt-20'>
          <img src={Pc} alt="" />
          </div>
          {/* <img className=' max-w-[50vw] absolute left-[50%] -top-[45%] overflow-x-hidden' src={circle2}/> */}
        </section>
    
       
       <section className='flex justify-between align-baseline mt-24'>
        <img className='' src={boy}/>
          <div className='flex-col pt-20 pr-20'>
          <span className='text-[#84CECF] text-xl pb-4'>Get Started</span>
          <p className='text-[50px] font-bold max-w-md tracking-tight'>Grow your portfolio with the AI enrich content</p>
          <p className='max-w-[350px] pb-8'>The easiest way to create a content with an one click. Just type the word! </p>
          <button className=' rounded-full bg-[#8F8FDB] pr-12 pl-12 pt-[15px] pb-[15px] '><Link to='/usecase'>GET STARTED</Link></button>

          </div>
       </section>

       <section className='flex justify-between align-baseline'>
          <div className='flex-col pl-20'>
          <span className='text-[#84CECF] text-xl pb-4'>Content</span>
          <p className='text-[50px] font-bold max-w-md tracking-tight'>Create Content easily for anything</p>
          <p className='max-w-[350px] pb-8'>The easiest way to create a content with an one click. Just type the word! </p>
          <button className=' rounded-full bg-[#8F8FDB] pr-12 pl-12 pt-[15px] pb-[15px] '><Link to='/usecase'>JUST A CLICK</Link></button>

          </div>
          <img className='mt-[-150px]' src={phone}/>
          
      
       </section>

       <section className='shop flex flex-col justify-center items-center mb-44'>
       <div className='text-[#84CECF] text-lg pb-4'>CREATE</div>
       <p className='text-[50px] font-bold max-w-lg text-center tracking-tight leading-normal'>Awesome Content Simplified</p>
       <div className='flex flex-row gap-8 mt-20'>
       <ServiceCard
        image={shop}
        title='Keyword Extractor'
        description='Write a clear engaging ideas and blogs to generate the outline to help you to get started using AI assistant.'
        link='/extractor'
      />
      <ServiceCard
        image={email}
        title='Sentiment Analyzer'
        description='Write a clear engaging ideas and blogs to generate the outline to help you to get started using AI assistant.'
        link='/sentiment'
      />
      <ServiceCard
        image={social}
        title='Text Summarizer'
        description='Write a clear engaging ideas and blogs to generate the outline to help you to get started using AI assistant.'
        link='/summarize'
      />
       </div>
       </section>
       
       <footer className='mt-20'>
        <div className='h-[2px] bg-gradient-to-r from-sky-500 to-indigo-500'></div>

        <div className='flex flex-row justify-between'>
        <h1 className='cursor-pointer text-lg  m-4'>ContentCrafter</h1>
        <h1 className='cursor-pointer text-lg  m-4 mr-20  flex justify-center items-center text-center'>Made with ❤️ <a href='https://anaskhan28.vercel.app/'>Anas Khan</a></h1>
        </div>
       </footer>

    </div>
  )
}

export default Home