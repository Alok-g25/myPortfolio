import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";





function Contact() {
  return (
    <>
      <div className='max-w-screen-2xl mx-auto md:px-20 px-4' id='contact'>
          <h2 className='text-2xl md:text-4xl underline text-center uppercase my-7'>Contact me</h2>
          <div data-aos="zoom-in-up"
                  data-aos-duration="2000"
                   className='flex justify-center items-center gap-5'>
          
            <a href="#" target='_blank' className='p-4 bg-slate-800 rounded-full border-[2px] border-yellow-300 hover:shadow-md hover:shadow-yellow-300 duration-300 hover:scale-105 hover:text-yellow-500 hover:bg-slate-100'>
              <FaSquareInstagram className='text-2xl md:text-4xl'/>
            </a>
            <a href="https://www.linkedin.com/in/alok-gupta-68b3a7253/" target='_blank' className='p-4 bg-slate-800 rounded-full border-[2px] border-yellow-300 hover:shadow-md hover:shadow-yellow-300 duration-300 hover:scale-105 hover:text-yellow-500 hover:bg-slate-100'>
              <FaLinkedin className='text-2xl md:text-4xl'/>
            </a>
            <a href="https://github.com/Alok-g25" target='_blank' className='p-4 bg-slate-800 rounded-full border-[2px] border-yellow-300 hover:shadow-md hover:shadow-yellow-300 duration-300 hover:scale-105 hover:text-yellow-500 hover:bg-slate-100'>
              <FaGithubSquare className='text-2xl md:text-4xl'/>
            </a>
            <a href="https://wa.me/6392190896" target='_blank' className='p-4 bg-slate-800 rounded-full border-[2px] border-yellow-300 hover:shadow-md hover:shadow-yellow-300 duration-300 hover:scale-105 hover:text-yellow-500 hover:bg-slate-100'>
              <FaSquareWhatsapp className='text-2xl md:text-4xl'/>
            </a>
            <a href="mailto:alokkumar9506492158@gmail.com" target='_blank' className='p-4 bg-slate-800 rounded-full border-[2px] border-yellow-300 hover:shadow-md hover:shadow-yellow-300 duration-300 hover:scale-105 hover:text-yellow-500 hover:bg-slate-100'>
              <IoMdMail className='text-2xl md:text-4xl'/>
            </a>
          </div>
      </div>
    </>
  )
}

export default Contact