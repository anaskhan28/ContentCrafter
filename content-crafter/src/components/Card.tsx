import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps{
    image: string;
    title: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, link }) =>{
  return (
    <div className='max-w-[400px] h-[200px] rounded-lg bg-[#252D62]'>
         <span className="animate-ping absolute inline-flex h-4 w-4  rounded-full bg-sky-400 opacity-75"></span>
    <img className='mix-blend-luminosity relative bottom-12 left-28' src={image} alt={title} />

    <p className='text-[20px] tracking-wide text-center -mt-10'>{title}</p>
    <p className='max-w-[350px] text-center pb-8'>{description}</p>
    <button className='hover:bg-white hover:text-[#8F8FDB] bg-[#8F8FDB] max-w-12 h-auto p-3 rounded-full relative bottom-4 left-28'>
      <Link to={link}>Generate with AI</Link>
    </button>
  </div>
  )
}

export default Card

