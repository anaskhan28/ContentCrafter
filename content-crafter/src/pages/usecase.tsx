import React from 'react'
import phone from '../assets/phone.png';
import shop from '../assets/shop.png';
import email from '../assets/email.png';
import social from '../assets/social.png';
import ServiceCard from '../components/Card';
import Footer from '../components/Footer';
function usecase() {
  return (
    <div>
       <section className='shop flex flex-col justify-center items-center mb-44'>
       <div className='text-[#84CECF] md:text-xl text-sm pb-4'>USECASE</div>
       <p className='text-[30px] md:text-[50px] font-bold max-w-lg text-center tracking-tight leading-normal'>Awesome Content Tools</p>
       <div className='grid md:grid-cols-3 gap-[8rem] mb-20 mt-20'>
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
       <ServiceCard
        image={shop}
        title='Spell-checkingr'
        description='Correct the spelling errors in the your text and get feedback too.'
        link='/checking'
      />
      <ServiceCard
        image={email}
        title='Cine-moji'
        description='Convert the movie name into emojis. An AI Tool for Converting Movie Titles into Emojis'
        link='/movie'
      />
      <ServiceCard
        image={social}
        title='HashTweet'
        description='Generate tweets with hashtags on any topic and autmoate your social life. '
        link='/tweet'
      />
       </div>
       </section>
       <Footer/>
    </div>
  )
}

export default usecase