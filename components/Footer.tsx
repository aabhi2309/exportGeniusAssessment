'use client'
import React, { useState } from 'react'
import Image from 'next/image' 
import CustomButton from './CustomButton'
import { footerLinks } from '@/app/constant'

const Footer = () => {
  const [open, setOpen] = useState(0);
  // const [activeFH, setActiveFH ] = useState(0)
  return (
    <div className='-mx-[5vw]'>
    <div className="relative w-full h-80">
      <Image
        src="/footerImg.jpg"
        alt="Background Image"
        fill

        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 text-black1 flex flex-col gap-5 items-center justify-center z-10 font-bold">
        <div className="text-2xl lg:3xl ">SET YOUR BUSINESS</div>
        <div className="text-xl lg:2xl text-center">IN MOTION WITH VALUEABLE INSIGHTS! </div>
        <CustomButton title='SCHEDULE A DEMO' buttonStyle=' rounded bg-primary text-white px-5 py-3 ' handleClick={()=>{alert("Schedule a demo button is clicked")}}/>
      </div>
    </div>
  <footer className='relative  px-[15vw] pb-[10vh] lg:px-[5vw] bg-black1 w-full flex flex-col lg:flex-row gap-10 lg:gap-40'>
    <div className='absolute -top-12'>
      <Image src="/m_logo.svg" alt='m-logo' width={270} height={270}/>
      <div className='text-white mt-5'>copyright © 2022 market inside. <br/> All rights reserved.</div>
      
    </div>
    <div className='h-48 w-0 lg:w-72'>
    </div>
    <div>
    <div className='flex flex-col lg:flex-row gap-10 py-20 lg:gap-40'>
      {footerLinks.map((link,idx)=>(
        <div key={idx}>
          <div className='text-white font-bold flex items-baseline gap-5'> <div>{link.title}</div> <div className='block lg:hidden' onClick={()=>setOpen(idx)}>{open=== idx ? <Image src='/arrowD-w.svg' width={20} height={20} alt='icons' /> : <Image src='/arrowU-w.svg' width={20} height={20} alt='icons' /> }</div></div>
          <ul className={`${open === idx ? 'block' :'hidden' } lg:block`}>{link.links.map((subLink,i)=>(
            <li key={i} className=' mt-5 text-gray3 text-sm hover:text-white'>{subLink.title}</li>
          ))}</ul>
        </div>
      ))}
    </div> 
    <div className='flex flex-col lg:flex-row gap-10 lg:gap-20'> 
      <CustomButton title='SCHEDULE A DEMO' handleClick={()=>alert("Schedule a demo button clicked")} buttonStyle=' rounded-md border-2 border-white text-white py-2 px-5'/>
      <div className='flex gap-5'>
      <Image src='/facebook.svg' width={40} height={40} alt='icons' />
      <Image src='/linkedin.svg' width={40} height={40} alt='icons' />
      <Image src='/youtube.svg' width={40} height={40} alt='icons' />
      <Image src='/skype.svg' width={40} height={40} alt='icons' />
      <Image src='/x.svg' width={40} height={40} alt='icons' />

      </div>
    </div>
    </div>
    
    


  </footer>
  </div>
  )
}

export default Footer