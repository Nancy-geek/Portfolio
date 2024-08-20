import React from 'react'
// import Card from './Card.jsx'
// import { IoLogoHtml5 } from "react-icons/io";
import {Html, Css, tailwind, JS, react, flutter,dart,git, github,netlify} from '../assets/techlogo.js'       
// import Pic from '../assets/HTML.png' 



function Skills() {
  return (
    <>
    <div id="Skills" className='m-4 p-4'>
    <h1 className=' text-3xl md:text-4xl text-emerald-200 space-x-2 pb-5 underline underline-offset-8 font-dancingCursive  font-semibold'>Skill-Set..</h1>

    <div class=" z-10 flex justify-center  items-center flex-wrap space-x-5 md:space-x-8 space-y-5 md:space-y-8 md:flex flex-row w-full bg-slate-800 text-white p-6 px-8 mt-4 ">
    {/* <Card/> */}
    {/* no need of making any different jsx file for passing prop here as everything is different in each card , very lil similarities or common things are there so no much of making another file and passing elements as arguments in it */}
    
        {/* <div class="max-w-56 m-2 p-2 rounded-md shadow-gray-400 text-white bg-slate-100 opacity-90 hover:border-2 flex items-center flex-col "> */}
            
            {/* <!-- <i class="fa-solid fa-book" style="color: #f3b735;"> fsldkjfl</i> --> */}
             {/* <img class=" h-20 mb-2" src="https://cdn-icons-png.flaticon.com/512/330/330705.png" alt=""/> */}
             {/* <h1></h1> */}
             {/* <p class="font-bold text-3xl font-bold underline hover:underline-offset-4 ">Frontend</p> */}
             {/* <ul className=' flex flex-wrap  space-x-7 space-y-2 mt-3'> */}
            <div className=' bg-slate-200  rounded-md p-1 w-32 h-32 mt-4 mx-5 border-b-4  shadow-md hover:shadow-slate-200 border-red-400 flex items-baseline'><img src={Html} alt="" className='' /></div>
           
            <div className=' bg-slate-200 rounded-md p-1  w-32 h-32 bg-contain overflow-hidden border-b-4 shadow-md hover:shadow-slate-200 border-blue-400'><img src={Css} alt="" className='w-32 h-32 ' /></div>
            
            <div className=' bg-slate-200 rounded-md p-1  w-32 h-32 bg-contain overflow-hidden border-b-4  shadow-md hover:shadow-slate-200 border-b-blue-400'><img src={tailwind} alt="" className='w-32 h-32 ' /></div>
            
            <div className=' bg-slate-200 rounded-md p-1  w-32 h-32 bg-contain overflow-hidden border-b-4 shadow-md hover:shadow-slate-200 border-yellow-400'><img src={JS} alt="" className='w-32 h-32 ' /></div>
            
            <div className=' bg-slate-200 rounded-md   w-32 h-32 bg-cover overflow-hidden border-b-4 shadow-md hover:shadow-slate-200  border-emerald-400'><img src={react} alt="" className='w-32 h-32 ' /></div>
            
            <div className=' bg-slate-200 rounded-md p-1  w-32 h-32 bg-contain overflow-hidden border-b-4 shadow-md hover:shadow-slate-200 border-sky-400'><img src={flutter} alt="" className='w-32 h-32 ' /></div>
            
            <div className=' bg-slate-200 rounded-md p-1  w-32 h-32 bg-contain overflow-hidden border-b-4 shadow-md hover:shadow-slate-200 border-sky-400'><img src={dart} alt="" className='w-32 h-32 ' /></div>
            
            <div className=' bg-slate-200 rounded-md  w-32 h-32 bg-fit overflow-hidden border-b-4 shadow-md hover:shadow-slate-200 border-red-400'><img src={git} alt="" className='w-32 h-32 ' /></div>
            
            <div className=' bg-slate-200 rounded-md p-1  w-32 h-32 bg-contain overflow-hidden border-b-4 shadow-md hover:shadow-slate-200 border-emerald-500'><img src={github} alt="" className='w-32 h-32 ' /></div>
            
            <div className=' bg-slate-200 rounded-md p-1  w-32 h-32 bg-contain overflow-hidden border-b-4 shadow-md hover:shadow-slate-200 border-indigo-400'><img src={netlify} alt="" className='w-32 h-32 ' /></div>
            
             
             
              {/* </ul> */}
          {/* </div> */}
    </div>
   

    </div>
    <hr className=' border-slate-500 h-[2px] mx-6' />
    </>
  )
}

export default Skills