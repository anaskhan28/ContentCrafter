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
import Footer from '../components/Footer';
function Home() {
  return (
    <div className='relative overflow-hidden'>

        <section className='section flex flex-col m-2 md:justify-between md:m-12 mt-32  md:flex-row'>
          <div className='info-side max-w-sm flex flex-col gap-6 ml-8 md:ml-16'>
           <div className=' relative text-[30px] md:text-[50px] font-bold'>Discover And Witness AI Works</div>
           <p>Automated Content Generation for Web and Social Media.</p>
           <div className='flex gap-6 cursor-pointer'>
           <button className='hover:bg-white hover:text-[#8F8FDB] bg-[#8F8FDB] rounded-full pr-8 pl-8 pt-[15px] pb-[15px] text-sm sm:text-base'><Link to='/usecase'>THE TRUTH</Link></button>
        <button className='hover:bg-[#8F8FDB] hover:text-white border-solid rounded-full border-2 pr-6 pl-6 pt-[15px] pb-[15px] text-sm sm:text-base'><Link to='/about'>LEARN MORE</Link></button>
           </div>
          </div>
          <div className='img-side -mt-20'>
          <img className='animate-pulse ease-in duration-300  md:w-full mt-44 md:mt-0 w-[300px] mx-auto ' src={Pc} alt="" />
          </div>
          {/* <img className=' max-w-[50vw] absolute left-[50%] -top-[45%] overflow-x-hidden' src={circle2}/> */}
        </section>
    
       
       <section className='flex flex-col justify-center md:flex-row m-2 md:justify-between align-baseline mt-24'>
        <img className='animate-pulse mt-24 md:mt-0 hidden md:block'  src={boy}/>
          <div className='flex-col justify-center  pt-20 pl-8 md:pl-0 md:pr-20'>
          <span className='text-[#84CECF] md:text-xl text-sm pb-4'>Get Started</span>
          <p className='text-[30px] md:text-[50px] font-bold max-w-md tracking-tight'>Grow your portfolio with the AI enrich content</p>
          <p className='md:max-w-[350px] pb-8'>The easiest way to create a content with an one click. Just type the word! </p>
          <button className=' hover:bg-white hover:text-[#8F8FDB] rounded-full pr-8 pl-8 pt-[10px] pb-[10px] bg-[#8F8FDB] md:pr-12 md:pl-12 md:pt-[15px] md:pb-[15px] '><Link to='/usecase'>GET STARTED</Link></button>

          </div>
          <div className='img-side -mt-20'>
          <img className='animate-pulse  md:hidden mt-44 md:mt-0 flex -ml-[40px] max-w-md mx-auto ' src={boy} alt="" />
          </div>
       </section>

       <section className='flex flex-col justify-center md:flex-row m-2 md:justify-between align-baseline'>
          <div className='flex-col justify-center  pt-20 pl-8  md:pl-20'>
          <span className='text-[#84CECF] md:text-xl text-sm pb-4'>Content</span>
          <p className='text-[30px] md:text-[50px] font-bold max-w-md tracking-tight'>Create Content easily for anything</p>
          <p className='md:max-w-[350px] pb-8'>The easiest way to create a content with an one click. Just type the word! </p>
          <button className='hover:bg-white hover:text-[#8F8FDB] rounded-full pr-8 pl-8 pt-[10px] pb-[10px] bg-[#8F8FDB] md:pr-12 md:pl-12 md:pt-[15px] md:pb-[15px]'><Link to='/usecase'>JUST A CLICK</Link></button>

          </div>
          <img className=' animate-pulse mt-[20px] md:mt-[-150px]' src={phone}/>
          
      
       </section>

       <section className='shop flex flex-col justify-center items-center mb-44'>
       <div className='text-[#84CECF] md:text-xl text-sm pb-4'>CREATE</div>
       <p className='text-[30px] md:text-[50px] font-bold max-w-lg text-center tracking-tight leading-normal'>Awesome Content Simplified</p>
       <div className='flex flex-col md:flex-row gap-36 md:8 mt-20'>
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
       
      <Footer/>

    </div>
  )
}

export default Home