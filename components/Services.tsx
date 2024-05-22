'use client'
import { serviceTabData } from '@/app/constant'
import Image from 'next/image';
import React, { useState } from 'react'
import CustomButton from './CustomButton';

const Services = () => {    
    const [activeTab, setActiveTab] = useState(0);
  return (
    <div className='flex flex-col gap-5'>
        <div className='text-4xl font-bold'>Service</div>
        <div className='text-sm text-gray6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
        <div className='flex text-black1 justify-between overflow-scroll lg:overflow-hidden gap-5'>
            {serviceTabData.map((tab,idx)=>(
                <div key={idx} className={`cursor-pointer  ${activeTab===idx ? 'font-bold text-primary border-b-4 border-primary':''}`} onClick={()=>setActiveTab(idx)}>{tab.name} </div>
            ))}
        </div>
        <div className='border-b border-black1'></div>
        <div className='flex flex-col-reverse lg:flex-row justify-between gap-10'>
            <div className='flex flex-col gap-5 justify-center'>
                <div className='text-2xl font-bold border-b-2 text-primary border-primary w-fit'>
                    {serviceTabData[+activeTab].name}
                </div>
                <div className='text-sm text-gray6'>Discover sources of buying products by connecting with potential suppliers while keeping an eye on the shipments through the global trade intelligence platform online.</div>
                <CustomButton title='READ MORE ...' buttonStyle='w-fit rounded-md bg-gray2 py-2 px-5 text-white'/>
            </div>
            <Image src="/services-image.png" alt='service image' width={500} height={400}/>

        </div>
    </div>
  )
}

export default Services