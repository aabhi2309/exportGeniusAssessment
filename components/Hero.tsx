'use client'
import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'

const Hero = () => {
  return (
    <div className='flex gap-32'>
    <div className='hidden lg:flex shrink-0'>
        <Image src='/globe.png' width={600} height={600} alt='global' />
    </div>
    <div className='flex flex-col gap-10'>
    <div className='text-4xl lg:text-7xl tracking-widelg:text-left font-bold'>
        <span className='text-black1'>GET ACCESS OF</span> <span className='text-primary'>MARKET INTELLIGENCE PLATFORM</span>  
    </div>
    <div className="w-full border-t-2 border-dashed border-black"></div>
    <div className='font-bold text-2xl lg:text-4xl'>GROW YOUR BUSINESS</div>
    <div className='flex justify-between text-sm'>
        <input type="text" className='w-[60%] rounded border border-solid border-gray3 py-3 px-5 lg:px-8' placeholder='ENTER YOUR EMAIL' />
        <CustomButton title='FREE TRAIL' buttonStyle='rounded bg-gray2  py-3 text-white px-5 lg:px-8' handleClick={()=>{alert("free trail button click")}}/>
    </div>
    <div className='flex gap-5'>
    <Image src='/rating1.png' width={200} height={30} alt='global' />
    <Image src='/rating2.png' width={120} height={30} alt='global' />
    </div>
    </div>
</div>

  )
}

export default Hero