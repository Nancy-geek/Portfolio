import React,{useState} from 'react'
import pic from '../assets/my_pic.jpg' 
import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { RiTwitterXLine } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
// import { IoIosContact } from "react-icons/io";
import { ReactTyped } from "react-typed";


function Home() {
  const [stop, setstop]= useState(false);
  const handleMouseOver = () => {
    // onmouseenter=()=>(setstop(true)),
    // onmouseleave=()=> setstop(false)
    setstop(true);
  };
  const handleMouseStop=()=>(
    setstop(false)
  )
  
  return (
    <>
    <div id="Home" className='max-w-screen-2xl  p-3 sm:p-4 flex mt-12 md:mt-24' >
    
    <div className=' flex flex-col-reverse md:flex-row  flex-shrink md:justify-start h-1/2  mx-auto w-full my-4 text-xl '>
       
       {/* name div */}
      <div className=' m-1 p-4 px-2 px-6 md:w-1/2 flex flex-col justify-center md:justify-start max-w-full md:ml-7  space-y-2'>
      <h1 className='flex  justify-center md:justify-start'> Hi &#128075;,  I am </h1>
      <h1 className=' flex justify-center md:justify-start  font-bold  text-4xl sm:text-5xl text-green-200'> Nancy Gupta. </h1>
      <br />
       
       <span className='flex items-baseline justify-center md:justify-start '>a&#160;
        {/* <h2 className='text-green-200 text-4xl'>Frontend Developer</h2> */}
        <ReactTyped className='text-green-200 text-3xl sm:text-4xl'
         strings={["Frontend Developer "]} 
         typeSpeed={100}
         backSpeed={70}
         backDelay={1000}
          loop={true} />  
         </span>
           
       {/* can pass even array of string for displaying multiple strings in loop */}
       <br />
       <p className=' tracking-tight md:tracking-wide mt-4   text-base text-pretty'>With a penchant for <b className='text-yellow-100'>problem-solving</b> and a knack for turning concepts into code, I specialize in <b className='text-yellow-100'>frontend development</b>  along with a skillset in mobile app development with <b className='text-yellow-100'>Flutter.</b></p>
       <br />

       <div className='space-y-5 md:px-3 flex flex-col items-center md:place-items-start'>

        <div >
        <h1 className=" font-bold  text-red-200 hover:text-emerald-300 flex justify-center" 
        onMouseEnter={handleMouseOver} onMouseLeave={handleMouseStop}> Available on</h1>

        <div className={`bg-slate-100 h-[1.2px]  w-24 mt-1 mx-3 flex justify-center 
         ${stop? "animate-none " :"animate-ping ease-in-out infinite bg-red-400"}`}>
          </div>     
        {/* above div for underline creating  */}
        </div>

        <ul className=" flex space-x-4 px-1 md:text-2xl" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseStop} >
          <li className='hover:text-blue-300'><a href="https://www.linkedin.com/in/nancy-gupta-70a28027a/" target='_blank'><BsLinkedin /></a></li>
          <li className='hover:text-yellow-100'><a href="https://github.com/Nancy-geek" target='_blank'><ImGithub /></a></li>
          <li className='hover:text-yellow-100'><a href=" https://x.com/NancyGupta2005?t=LyEm-k5FtcoxVp-eR-nQ9Q&s=08" target='_blank'><RiTwitterXLine /></a></li>
          <li className='hover:text-pink-400'><a href="https://www.instagram.com/gupta_nancy23?igsh=OG9pamowMm05emZj" target='_blank'><FaSquareInstagram /></a></li>
          {/* <li><IoIosContact /></li>           */}
          {/* thinking of in this adding copying my contact on clipboard */}
        </ul>
       </div>

      </div>
      
      {/* pic div */}
      <div className='md:w-1/2 flex justify-center mt-4 '>
      <div className='flex'>
      <div className=' p-1 max-h-[18rem] max-w-[18rem] sm:max-h-[19rem] sm:max-w-[19rem] rounded-full bg-cover overflow-clip bg-gray-700 border-solid  border-white border-x-2 animate-fade-in shadow-lg z-10 shadow-slate-600 hover:shadow-slate-500 '>
      <img className='flex' src={pic} alt="Image" />
      </div>
      </div>
      </div>

    </div>
    
    </div>
    <hr className=' border-slate-500 h-[2px] mx-6' />
   
    </>
  )
}

export default Home