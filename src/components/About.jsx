import React from 'react'
import pic from '../assets/my_photo2.jpg' 
import { FaClipboardList } from "react-icons/fa6";

function About() {
  return (
    <>
  <div id="About" className='m-4 p-4'>
      <h1 className='text-3xl md:text-4xl text-emerald-200 space-x-2 pb-5 underline underline-offset-8 font-dancingCursive  font-semibold'>About ..</h1>
      
    <div className='sm:mt-5 mt-0 flex justify-center items-center sm:space-x-7 text-sm sm:text-base '> 
        <div className='  hidden md:block h-96 w-80 float-left rounded-lg bg-contain overflow-hidden  z-5 shadow-md border-1 hover:shadow-emerald-200 hover:animate-bounce-short shadow-yellow-50'>
        <img className='  rounded-lg' src={pic} alt="" />
        </div>

        <div className=' space-y-3  md:w-3/4 shadow-sm p-3 px-6 flex-col text-justify rounded-md  shadow-indigo-950 '>
        <h2>Greetings !!</h2>
        
        <div className='flex text-pretty shadow-md sm:p-2 rounded-md space-x-3 sm:hover:bg-gradient-to-r from-teal-700  from-2% via-purple-900 via-30%  to-slate-900 to-90% opacity-85 text-white'>
        <div className=' md:hidden flex sm:items-center items-start '><FaClipboardList className='text-cyan-400 h-10 w-10 '/></div>
        <p className=''>
        Being an ambitious and self-driven student My journey in tech has been fueled by a love for exploration and a desire to continuously learn and grow.
           I specialize in frontend development using <b className='text-yellow-100'>HTML, CSS, JavaScript</b> and <b className='text-yellow-100'>React</b> along with a skillset in mobile app development with <b className='text-yellow-100'>Flutter</b>.
        </p>
        </div>

        <div className='flex text-pretty shadow-md p-2 rounded-md space-x-3 sm:hover:bg-gradient-to-r from-teal-700  from-2% via-purple-900 via-30%  to-slate-900 to-90% opacity-85 text-white 
        '>
        <div className=' md:hidden flex sm:items-center items-start '><FaClipboardList className='text-cyan-400 h-10 w-10 '/></div>
        <p className='shadow-md '>
         With a penchant for problem-solving and a knack for turning concepts into code,
         In addition to my technical skills, I am a diligent communicator and finds joy in staying active through sports like table tennis (Professional TT player ) , dancing and drawing. My ability to multitask has allowed me to handle various tasks, ensuring timely and quality outcomes.
        </p>
        </div>

        <div className='flex text-pretty shadow-md p-2 rounded-md space-x-3 sm:hover:bg-gradient-to-r from-teal-700  from-2% via-purple-900 via-30%  to-slate-900 to-90% opacity-85 text-white  '>
        <div className=' md:hidden flex sm:items-center items-start '><FaClipboardList className='text-cyan-400 h-10 w-10 '/></div>
        <p className='shadow-md '>
        Currently, I'm actively seeking internship opportunities where I can apply my skills, contribute to innovative projects, and further develop my expertise. 
        If you're looking for a dedicated and enthusiastic intern or if you simply want to discuss the latest trends in frontend and mobile app development, feel free to reach out.</p>
        </div>
        
        </div>
        
      </div>
      
    </div>

    <hr className=' border-slate-500 h-[2px] mx-6' />
   
    </>

  )
}

export default About