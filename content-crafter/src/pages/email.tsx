import React from 'react'
import mail from '../assets/mail.png';
function Email() {
  return (
    <div>
        <div className='max-w-[852px] max-h-[1180px] bg-gradient-to-r from-blue-700 to-cyan-500'>
          <h1 className='underline text-center relative text-2xl font-bold'>Generate Cold Emails</h1>
          <img src={mail}/>
          <div className='flex flex-col justify-center items-center -mt-16'>
            <input type='text' placeholder='Enter the topic of mail' />
            <button className='bg-black text-white pt-2 pb-2 pr-6 pl-6 rounded-md mt-12'>GET AI ANSWER</button>
          </div>
          <textarea placeholder='The content will be arrive here' ></textarea>
        </div>
    </div>
  )
}

export default Email