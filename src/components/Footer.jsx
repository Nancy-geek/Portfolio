import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { RiTwitterXLine } from "react-icons/ri";

function Footer() {
  return (
    <>
    <div className=' flex justify-between p-3  w-full bg-slate-950 text-white h-14'>
        <p className='mx-12 hover:underline hover:underline-offset-4'>Developed with ❤️ by Nancy Gupta</p>

        <div className=' hidden sm:flex space-x-4 mr-4 p-1 '>
          <ul className=" flex space-x-4 px-1 md:text-2xl">
        <li className='hover:text-blue-300'><a href="https://www.linkedin.com/in/nancy-gupta-70a28027a/" target='_blank'><BsLinkedin /></a></li>
          <li className='hover:text-yellow-100'><a href="https://github.com/Nancy-geek" target='_blank'><ImGithub /></a></li>
          <li className='hover:text-yellow-100'><a href=" https://x.com/NancyGupta2005?t=LyEm-k5FtcoxVp-eR-nQ9Q&s=08" target='_blank'><RiTwitterXLine /></a></li>
          </ul>
        </div>
    </div>
    </>
  )
}

export default Footer