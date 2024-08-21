import React, { useState } from 'react'
import { MdLiveTv } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import {guessNum,todo,password,tictak,pwskills, currency } from '../assets/techlogo.js' 


function Projects() {
  const cardItems=[      // array of objects
    // {
    //   id: 1,
    //   name: "portfolio",
    //   gitref: "https://github.com/Nancy-geek/To-Do",
    //   live: "https://nancygupta-portfolio.netlify.app/"

    // },
    {id:2,
      pic:todo,
      name:"To-Do",
      gitref: "https://github.com/Nancy-geek/To-Do",
      live: "https://nancytodo.netlify.app"
    },
    {id:3,
      pic:pwskills,
      name:"Education Site UI Clone",
      gitref: "https://github.com/Nancy-geek/Education-Site",
      live: "https://nancypwskillsclone.netlify.app"
    },
    
    {id:4,
      pic:password,
      name:"Password Generator",
      gitref: "https://github.com/Nancy-geek/Password-Generator",
      live: "https://silly-torrone-2fb753.netlify.app"
    },
    
    {id:5,
      pic: tictak,
      name:"Tic Tak Toe",
      gitref: "https://github.com/Nancy-geek/Tic-Tak-Toe",
      live: "https://tictaktoe-bynancy.netlify.app "
    },
    {id:6,
      pic:guessNum,
      name:"Guess Number",
      gitref: "https://github.com/Nancy-geek/Guess-Number",
      live: "https://silly-torrone-2fb753.netlify.app"
    },
    {id:7,
      pic:currency,
      name:"Currency Convertor",
      gitref: "https://github.com/Nancy-geek/Guess-Number",
      live: "https://silly-torrone-2fb753.netlify.app"
    },
   
    
    
    
  ]

  const [hide, sethide]= useState(false);
  // const hideIt=()=>(
  //   setstop(true)
  // )

  return (
    <>
   <div id="Projects" className='m-1 p-2 mt-3 md:m-4 md:p-4'>
   <h1 className='text-3xl md:text-4xl text-emerald-200 space-x-2 pb-5 underline underline-offset-8 font-Bodoni+Moda+SC  font-semibold'>Projects ..</h1>

   <div className='flex  justify-center  flex-wrap sm:grid sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-3' >
    {                       // curly braces for adding elements ....remember
     cardItems.map(({id,pic,name,gitref, live})=>(

      <div key={id} className=' flex flex-col justify-between min-h-48 max-h-52 max-w-56 border-white border-[2px] shadow-lg rounded-md pt-0 m-2 bg-cover relative overflow-hidden '>
        
        <img className="bg-cover" src={pic} alt="" />

        <div className={`flex w-full  rounded-t-md static bottom-0 space-x-2 z-10 p-1 justify-around bg-sky-200 absolute bottom-0 `}>
          {/* ${hide? 'display:none': "display:flex"}   in above*/} 
          <p className={`flex text-black text-base font-semibold hover:text-fuchsia-700 hover:font-bold cursor-pointer `} onClick={()=>(sethide(true))} >{name}</p>
          <span className='flex justify-end space-x-3'>
          <button className='text-black'><a href={live} target='_blank'><MdLiveTv /></a></button>
          <button className='text-black ' ><a href={gitref} target='_blank'><ImGithub /></a></button>
          </span>

          {/* <div className={`flex justify-center text-sm bottom-0 space-x-2 z-10 p-1 justify-around bg-sky-200 absolute bottom-0 `}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At porro corrupti aliquam modi unde voluptatum ut nihil libero quasi quia, minima odit accusamus magnam asperiores necessitatibus dolorem quaerat in eius.</p>
          </div> */}

          {/* <button className='rounded-md p-1 px-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>View</button>
          <button className='rounded-md p-1 px-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>&lt;Code/&gt;</button> */}
        </div>

      </div>
     ) )
   }
   </div>

   </div>
   <hr className=' border-slate-500 h-[2px] mx-6' />
    </>
  )
}

export default Projects