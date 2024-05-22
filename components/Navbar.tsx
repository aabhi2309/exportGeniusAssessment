'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { nav_links } from '@/app/constant'
import CustomButton from './CustomButton'

const Navbar = () => {
    const [mobileOptionOpen, setMobileOptionOpen] = useState(false)
    const [activeTab, setActiveTab] = useState(0)
    const [hoveredTab, setHoveredTab] = useState('');
    const loginFn = () => {
        alert("Login Button Click");
    }
    const letsTalkFn = () => {
        alert("Login Button Click");
    }
    return (
        <>
            <nav className='flex justify-between items-center'>
                <div>
                    <Image
                        src="/mi-logo.png"
                        width={200}
                        height={100}
                        alt="mi_logo" />
                </div>
                <div className='hidden lg:flex gap-20'>
                    <div className='flex items-center gap-5'>
                        {nav_links.map((link, idx) => (
                            <div key={idx} className='flex gap-1 cursor-pointer' onMouseEnter={() => setHoveredTab(link.title)} onMouseLeave={() => setHoveredTab('')} >{link.value} {(link.title === "solutions" || link.title === "product") && <Image src='/arrow_down.svg' width={10} height={10} alt='icons' />}</div>
                            
                        ))}
                        {hoveredTab == 'solutions' &&<Image src="/option1.jpg" width={1300} height={800} alt="mi_logo" className=' absolute left-24 top-40' />}
                        {hoveredTab == 'product' && <Image src="/option2.jpg" width={1300} height={800} alt="mi_logo" className='absolute left-24 top-40' />}

                        
                        
                    </div>

                    <div className='flex gap-3'>
                        <CustomButton
                            title='LOGIN'
                            buttonStyle='bg-primary text-white rounded px-6 py-2'
                            handleClick={loginFn}
                        />
                        <CustomButton
                            title='LETS TALK'
                            buttonStyle='bg-black1 text-white rounded px-6 py-2'
                            handleClick={letsTalkFn}
                        />
                    </div>
                </div>
                <div className='lg:hidden md:flex flex-col' onClick={() => { setMobileOptionOpen(!mobileOptionOpen) }}>
                    {mobileOptionOpen ? <b className='text-xl'>X</b> : <Image src='/burger-menu.svg' width={25} height={25} alt='icons' />}
                </div>

            </nav>
            {mobileOptionOpen && <nav className='flex flex-col gap-10'>
                {nav_links.map((link, idx) => (
                    <div key={idx}>  
                        <div className={`${activeTab==idx ? 'rounded-md bg-gray1 p-4 text-white':''}`}>
                            <div key={idx}  onClick={()=>{setActiveTab(idx)}} className={`cursor-pointer flex justify-between px-4 font-bold ${activeTab==idx ? 'rounded-md bg-gray2 p-5':''} `}> <div className='flex gap-2'> <Image src={`/${link.title}.svg`} width={25} height={25} alt='icons' /> {link.value} </div> {activeTab == idx ? <Image src='/arrowD-w.svg' width={20} height={20} alt='icons' /> : <Image src='/arrow_down.svg' width={20} height={20} alt='icons' />}</div>
                            {activeTab==idx && link.hasSubLinks && <div className='flex flex-col gap-3 mt-5'>
                                {link.subLinks?.map((sl,i)=>(
                                    <div key={i} className=' cursor-pointerflex justify-between bg-primary p-5  rounded-lg font-bold gap-20'>{sl.value} <Image src='/arrowU-w.svg' width={20} height={20} alt='icons' /></div>
                                ))}</div>
                            }
                        </div>               
                        
                        {idx != 4 && activeTab!=idx && <div className='border-b border-black1'/>}
                    </div>
                ))}

            <div className='flex gap-3 rounded-md bg-gray1 p-4 justify-center'>
                        <CustomButton
                            title='LOGIN'
                            buttonStyle='bg-primary text-white rounded px-6 py-2'
                            handleClick={loginFn}
                        />
                        <CustomButton
                            title='LETS TALK'
                            buttonStyle='bg-black1 text-white rounded px-6 py-2'
                            handleClick={letsTalkFn}
                        />
                    </div>
                
            </nav>}
        </>

    )
}

export default Navbar