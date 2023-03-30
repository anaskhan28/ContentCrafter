import React from 'react'
import bye from '../assets/bye.png'
function about() {
  return (
    <section className='flex justify-between  '>
    <div className='shop flex flex-col justify-center ml-20 items-center '>
    <div className=' text-[#84CECF] text-2x text-xl  pb-4'>ABOUT</div>
    <p className='text-xl max-w-3xl text-clip tracking-wide leading-loose'>Welcome to our website! We understand that creating high-quality and engaging content can be a time-consuming and challenging task. That's why we offer a range of AI-powered 
    content creation tools and resources to help you streamline your content creation process.</p>
    <p className='text-xl max-w-3xl text-clip  tracking-wide leading-loose mt-6'>Our AI Content Creation section provides you with the tools you need to generate ideas for your blog posts, 
    social media content, and other types of online content.Our tools can also help you optimize your content for search engines, 
    improve its readability, and increase engagement with your target audience. </p>
    <p className='text-xl max-w-3xl text-clip  tracking-wide leading-loose mt-6'>
    With our AI-powered content creation tools, you can create high-quality content in less 
    time and with less effort, leaving you more time to focus on other important aspects of 
    your business.
    </p>
    </div>
    <img className='mt-20' src={bye}/>
    </section>
  )
}

export default about