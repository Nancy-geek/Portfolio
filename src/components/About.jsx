import React from 'react'
import pic from '../assets/my_photo2.jpg' 
import { FaClipboardList } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";

function About() {
  return (
    <>
  <div id="About" className='m-1 p-2 md:m-4 md:p-4'>
      <h1 className='text-3xl md:text-4xl text-emerald-200 space-x-2 pb-5 underline underline-offset-8 font-Bodoni+Moda+SC  font-semibold'>About..</h1>
      
    <div className='sm:mt-5 mt-0 flex justify-center items-center sm:space-x-7 text-sm sm:text-base '> 

        <div className='  hidden md:block h-96 w-80 float-left rounded-lg bg-contain overflow-hidden  z-5 shadow-md border-1 hover:shadow-emerald-200 hover:animate-pulse shadow-yellow-50'>
        <img className='  rounded-lg' src={pic} alt="" />
        </div>

        <div className=' space-y-3 w-full md:w-3/4 shadow-sm p-0 md:p-1  md:px-6 flex-col text-balance rounded-md  shadow-indigo-950 '>
        {/* <h2>Greetings !!</h2> */}
        
        <div className='flex text-pretty shadow-md p-1 sm:p-2 rounded-md space-x-3 hover:bg-gradient-to-r from-teal-700  from-2% via-purple-900 via-30%  to-slate-900 to-90% opacity-85 text-white'>
        <div className=' md:hidden  float-start '> <CiLocationArrow1  className='text-cyan-400 h-5 w-5 '/></div>
        
        <p className='text-pretty'>
        As an ambitious frontend developer from Jaipur,Rajasthan , I specialize  in <b>Frontend Development</b> with <b className='text-yellow-100'>HTML, CSS, JavaScript</b> and <b className='text-yellow-100'>React</b> with additional skills in mobile app development using <b className='text-yellow-100'>Flutter</b>.
        </p>
        </div>

        <div className='flex text-pretty shadow-md p-1 sm:p-2 rounded-md space-x-3 hover:bg-gradient-to-r from-teal-700  from-2% via-purple-900 via-30%  to-slate-900 to-90% opacity-85 text-white 
        '>
        <div className=' md:hidden flex sm:items-center items-start '><CiLocationArrow1  className='text-cyan-400 h-5 w-5 '/></div>
        <p className='text-pretty'>
        I possess a keen interest in leveraging <b className='text-yellow-100'>Data Structures and Algorithms</b> using <b className='text-yellow-100'>Java</b> with an unwavering enthusiasm for coding and problem-solving.
        
        In addition to my technical skills, I am a diligent <b >Communicator</b> and finds joy in staying active through <b>Sports</b> like table tennis, dancing and drawing. 
        </p>
        </div>

        <div className='flex text-pretty shadow-md p-1 sm:p-2 rounded-md space-x-3 hover:bg-gradient-to-r from-teal-700  from-2% via-purple-900 via-30%  to-slate-900 to-90% opacity-85 text-white  '>
        <div className=' md:hidden flex sm:items-center items-start '><CiLocationArrow1  className='text-cyan-400 h-5 w-5 '/></div>
        <p className='text-pretty'>
         Currently, I'm actively seeking internship opportunities where I can apply my skills, contribute to innovative projects, and further develop my expertise.
        </p>
        </div>
        
        </div>
        
      </div>
      
    </div>

    <hr className=' border-slate-500 h-[2px] mx-6' />
   
    </>

  )
}

export default About