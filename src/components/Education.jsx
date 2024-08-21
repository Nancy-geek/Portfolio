import React from 'react'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';          
// this import imports the basics middle line timeline structure for react timeline
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";


function Education() {
  return (
    <>
    <div id="Education" className=' m-1 p-2 mt-3 md:m-3 md:p-4'>
        <h1 className='text-3xl md:text-4xl text-emerald-200 space-x-2 pb-5 underline underline-offset-8 font-Bodoni+Moda+SC  font-semibold'>Education ..</h1>

        <div className='md:ml-40 '>
        <VerticalTimeline animate={true} layout='1-column-left'  lineColor='grey'  >

        <VerticalTimelineElement 
        className=' vertical-timeline-element--education text-black capitalize lg:w-4/5 '
        contentStyle={
          { border: '1mm solid rgba(211, 220, 50, .6)' }   }       // in object
        contentArrowStyle={{ borderRight: '20px solid  white' }}
        date="-march 2020"
        icon={<RiGraduationCapFill/>}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#FFFF00' }} animate={true} 
        >
          <h2 className='font-bold underline'>Swami Keshvanand Institute of Technology Management and Gramothan (SKIT)</h2>
          <p>grade: CGPA: 8.9</p>
          <span className=' flex'>
         <span className='font-semibold text-sm sm:text-base'> Activities and societies: &nbsp;</span> table tennis , team management,
         <br />JEE percentile (2023 partial dropper): 96%ile
         </span>
         
         
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className=' vertical-timeline-element--education text-black capitalize lg:w-4/5 '
        contentStyle={
          { border: '1mm solid rgba(211, 220, 50, .6)' }}          // in object
        contentArrowStyle={{ borderRight: '20px solid  white' }}
        date="april 2020 - july 2022"
        icon={<FaSchool /> }
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#FFFF00' }} animate={true} 
        >
          <h2 className='font-bold underline'>children academy convent school</h2>
          <p>grade: 12th : 88%</p>
          <span className=' flex'>  
         <span className='font-semibold text-sm sm:text-base'> others: &nbsp;</span> JEE percentile (2022): 93.15%ile
         </span>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className=' vertical-timeline-element--education text-black capitalize lg:w-4/5  '
        contentStyle={
          { border: '1mm solid rgba(211, 220, 50, .6)', marginBottom: "2" } }         // in object
        contentArrowStyle={ { borderRight: '20px solid  white'}  }
        date="-march 2020"
        icon={<FaSchoolCircleCheck/>}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#FFFF00' }} animate={true} 
        >
          
          <h2 className='font-bold underline'>silver oak school</h2>
          <p>grade: 10th- 94.6%</p>
          <span className=' flex '>
         <span className='font-semibold text-sm sm:text-base'> Activities and societies: &nbsp;</span> Indian State Player(Table Tennis) , Art , Dance
         </span>
         
        </VerticalTimelineElement>


        </VerticalTimeline>
        </div>
    </div>

    <hr className=' border-slate-500 h-[2px] mx-6' />
    </>
  )
}

export default Education