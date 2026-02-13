import React from 'react'
import { motion } from 'framer-motion'
import ErjonaImg from '../image/Erjona.jpeg'

type Props = {}

function About({}: Props) {
  return (
    <div className='px-6'>
        <div className='uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl text-center mb-10'>
            About
        </div>

        <div className="flex justify-center items-center gap-5 flex-col lg:flex-row">
            <img src={ErjonaImg.src} className='w-[300px] h-auto'/>

            <div className="w-full lg:w-[40%]">
                <div className="text-xl md:text-4xl font-semibold mb-5 lg:mb-10">Here is a  <span className='underline decoration-[#F7AB0A]/50'>little</span>{"  "} background</div>

                <div className='text-sm md:text-base'>
                I am a passionate Frontend Developer with a knack for creating visually appealing and user-friendly web applications. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and interactive interfaces that enhance user experiences. I thrive in collaborative environments, working closely with designers and backend developers to bring ideas to life. My attention to detail and commitment to clean code ensure that every project I undertake is of the highest quality. Whether it's developing new features or optimizing existing ones, I am dedicated to delivering exceptional results that exceed expectations.
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default About