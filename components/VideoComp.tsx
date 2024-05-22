'use client'
import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'

const VideoComp = () => {
  return (
    <div className='flex gap-10 lg:px-40 justify-center flex-col lg:flex-row lg:gap-24'>
        <Image src='/video.svg' width={500} height={400} alt='video'/>
        <div className='hidden lg:block border-l border-gray5'></div>
        <div>
        <div className='text-gray6 mb-10'>Get a comprehensive view of international trade between countries to set your businefsfsfsdfsdss in a particular direction and drive growth for your business while keeping up to date with the latest information. Watch the video from Market Inside, providing its introduction with a quick glance at how our services help businesses.</div>
        <div className='flex justify-center'>
        <CustomButton title='SCHEDULE A DEMO' buttonStyle='  rounded bg-primary text-white px-5 py-3' handleClick={()=>{alert("Schedule a demo button is clicked")}}/>
          
        </div>

        </div>
    </div>
  )
}

export default VideoComp