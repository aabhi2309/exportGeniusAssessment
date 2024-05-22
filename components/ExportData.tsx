'use client'
import { exportData } from '@/app/constant';
import Image from 'next/image';
import React, { useState } from 'react'
import Dropdown from './ui/Dropdown';


const ExportData = () => {
    const [activeTab, setActiveTab] = useState(0);
    
    return (
        <div>
            <div className='flex flex-col gap-5 lg:gap-3 p-5'>
            <div className='text-3xl text-gray7 font-bold'>
                195+ <br></br> Countries
            </div>
            <div className='text-4xl font-bold'> IMPORT EXPORT DATA ONLINE</div>
            <div className='text-gray6 text-sm'>Market Inside Limited has one of the largest online searchable databases of importing and exporting countries, covering over 195 Countries which consist of 54 Detailed Countries, 29 Exclusive Countries, 33 Statistical, 184 Mirror Data, 109 Suez Canal Bill Of Lading Data, 02 Bill Of Lading Data, 190+ Transit Data and 190+ Cargo BL Data countries.</div>
            </div>
            <div className='hidden  lg:flex'>
                <div className='flex flex-col'>
                    {exportData.tabs.map((tab,idx)=>(
                        <div key={idx} className={`cursor-pointer text-sm py-5 px-10 w-60 border-primary   ${activeTab===idx ?'rounded-xl border-l-2 border-y-2 border-primary text-black1 font-bold' : ' border-r-2 text-gray8' }`} onClick={()=>setActiveTab(idx)}>{tab.name}</div>
                    ))}
                </div>
                <div className='w-full rounded-r-xl border-r-2 border-y-2 border-primary flex flex-col justify-center items-center'>
                    <Image src="/map.png" alt='map' width={500} height={400}/>
                    <Image src="/countriesData.png" alt='map' width={800} height={300}/>
                </div>
            </div>
            <div className='lg:hidden rounded border border-primary p-10 flex flex-col justify-center items-center gap-10' >
                <Dropdown options={exportData.tabs}/>
                <Image src="/map.png" alt='map' width={400} height={300}/>
                <div className='flex flex-col gap-4'>
                    {exportData.dropdown.map((opt,idx)=>(
                        <div key={idx} className='flex gap-4 text-sm'><Image src="/tick.svg" alt='map' width={15} height={15}/> {opt}</div>
                    ))}
                </div>


                

            </div>
            
        </div>

    )
}

export default ExportData