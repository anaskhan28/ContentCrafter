import React from 'react'

function Footer() {
  return (
    <footer className='mt-20'>
        <div className='h-[2px] bg-gradient-to-r from-sky-500 to-indigo-500'></div>

        <div className='flex flex-row justify-between'>
        <h1 className='cursor-pointer text-lg  m-4'>ContentCrafter</h1>
        <h1 className='cursor-pointer text-lg  m-0 mr-8 md:m-4 md:mr-20  flex justify-center items-center text-center'>Made with ❤️ <a href='https://anaskhan28.vercel.app/'>Anas Khan</a></h1>
        </div>
       </footer>
  )
}

export default Footer