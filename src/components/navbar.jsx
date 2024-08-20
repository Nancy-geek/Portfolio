import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
import { HiMenuAlt3 } from "react-icons/hi";
import { GiNightSleep } from "react-icons/gi";
import  { IoClose } from "react-icons/io5";
// import {Link, NavLink} from 'react-scroll';

import ReactDom from 'react-dom'             // documentation
import AnchorLink from 'react-anchor-link-smooth-scroll'
// used anchorlink as its easy, simple and lightweight to use when we just need to get to the page via scroll instead of using react-router that is quite used in complex 

function Navbar() {
  // const element = <FontAwesomeIcon icon={byPrefixAndName.fas['house']} />
  const [menu, setMenu]= useState(true);

  // instead of creating a each li element we can use loop over
  const navItems=[
    {id: 1, text: "Home"},
    {id: 2, text: "About"},
    {id: 3, text: "Skills"},
    {id: 4, text: "Projects"},
    {id: 5, text: "Education"},
    {id: 6, text: "Contact"},
    // at text the component name is passed
  ]
  

// ReactDOM.render(element, document.body)
  return (
    <>
    <div class={` w-full h-auto bg-slate-900 text-white p-3 pt-4 flex justify-between  fixed z-20
      bg-opacity-[0.95]
     `}>
      {/* ${menu ? "bg-opacity-95":" opacity-90 z-10 md:bg-opacity-95" }   no much need of this in above div*/}       
     
        <div className='font-bold sticky text-xl  '>
            {/* <img  alt="" />   */}
            <h1 className='flex text-emerald-300 items-center p-2  '> &lt;Nancy/ Portfolio&gt; </h1>
        </div> 
            {/* <!-- <img class="w-40 h-12" src="https://halloffame.pwskills.com/images/PWSkills-white.png" alt="PW SKILLS"> --> */}
            
            <ul class="md:flex mx-5 justify-center hidden font-normal">
            <li class="mx-3 p-2 cursor-pointer hover:underline hover:text-emerald-100 hover:font-medium hover:bg-opacity-10 rounded"><AnchorLink className='anchor-link' href='#About'>About</AnchorLink></li>
            <li class="mx-3 p-2 cursor-pointer hover:underline hover:text-emerald-100 hover:font-medium hover:bg-opacity-10 rounded"><AnchorLink className='anchor-link' href='#Skills'>Skills</AnchorLink></li>
            <li class="mx-3 p-2 cursor-pointer hover:underline hover:text-emerald-100 hover:font-medium hover:bg-opacity-10 rounded"><AnchorLink className='anchor-link' href='#Projects'>Projects</AnchorLink></li>
            <li class="mx-3 p-2 cursor-pointer hover:underline hover:text-emerald-100 hover:font-medium hover:bg-opacity-10 rounded"><AnchorLink className='anchor-link' href='#Education'>Education</AnchorLink></li>
            <li class="mx-3 p-2 cursor-pointer hover:underline hover:text-emerald-100 hover:font-medium hover:bg-opacity-10 rounded"><AnchorLink className='anchor-link' href='#Contact'>Contact </AnchorLink></li>

            <li class=" mx-3 p-2 cursor-pointer hover:underline hover:text-emerald-100 hover:font-medium hover:bg-opacity-10 rounded border-4 border-emerald-300 bg-slate-800" ><button className=''>RESUME</button></li>

             {
            //   navItems.map( ({id,text }) =>(
            //     <li class="mx-3 p-2 cursor-pointer hover:underline hover:text-emerald-100 hover:font-medium hover:bg-opacity-10 rounded " key={id}> 
            //     <AnchorLink  href='#About'>        
            //       {/* this is not working  */}
            //      {text} 
            //      </AnchorLink>
            //      </li>
                 
            //   )
            // )
            } 
        </ul>

        <button  class="text-3xl mx-1 md:hidden hover:text-yellow-100 hover:shadow-sm opacity-100" 
          onClick={()=> setMenu(!menu)}>
          {menu ? <HiMenuAlt3 /> : <IoClose /> }                {/* react icons  */}
        </button>
     
        
      </div>

      <div className={`flex-col  md:hidden justify-self-center items-center m-auto h-full w-full bg-slate-900 text-white z-10 
         ${menu ? "hidden " : "bg-opacity-95  z-50 shadow-lg "}` }>

          
          <ul className='space-y-4 flex-wrap h-screen justify-center text-center  mx-auto py-20 mt-10 '>

          {/* <li class="mx-3 p-2 text-xl cursor-pointer hover:underline hover:text-emerald-100 hover:font-semibold
          hover:bg-opacity-10 rounded">Home</li> */}
          <li class=" mx-3 p-2 text-xl cursor-pointer hover:underline hover:text-emerald-100 hover:font-bold
          hover:bg-opacity-10 rounded duration-150"><AnchorLink onClick={()=>setMenu(!menu)}  className='anchor-link' href='#About'>About</AnchorLink></li>
            <li class="mx-3 p-2  text-xl cursor-pointer hover:underline hover:text-emerald-100 hover:font-bold hover:bg-opacity-10 rounded duration-150"><AnchorLink onClick={()=>setMenu(!menu)}  className='anchor-link' href='#Skills'>Skills</AnchorLink></li>
            <li class="mx-3 p-2  text-xl cursor-pointer hover:underline hover:text-emerald-100 hover:font-bold  hover:bg-opacity-10 rounded duration-150"><AnchorLink onClick={()=>setMenu(!menu)}  className='anchor-link' href='#Projects'>Projects</AnchorLink></li>
            <li class="mx-3 p-2  text-xl cursor-pointer hover:underline hover:text-emerald-100 hover:font-bold  hover:bg-opacity-10 rounded duration-150"><AnchorLink onClick={()=>setMenu(!menu)}  className='anchor-link' href='#Education'>Education</AnchorLink></li>
            <li class="mx-3 p-2  text-xl cursor-pointer hover:underline hover:text-emerald-100 hover:font-bold  hover:bg-opacity-10 rounded duration-150"><AnchorLink onClick={()=>setMenu(!menu)} className='anchor-link' href='#Contact'>Contact</AnchorLink> </li>
          </ul>
          
        </div>
    </>
    
  )
}

export default Navbar