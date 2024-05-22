'use client'
import { productData } from '@/app/constant'
import Image from 'next/image'
import React, { useState } from 'react'

const Product = () => {
    const [activeHT, setActiveHT] = useState(0)
    const [activeVT, setActiveVT] = useState(0)
  return (
    <div className='flex flex-col gap-5'>

        <div className='font-bold text-4xl'>
            OUR PRODUCTS
        </div>
        <div className='text-sm text-gray6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
        <div className='hidden lg:flex gap-5 justify-between'>
            <div className='flex flex-col gap-8 border rounded-xl p-5 text-sm w-[20%]'>
                {productData.verticalTabs.map((tab,idx)=>(
                    <div key={idx} className={`cursor-pointer ${activeVT===idx?'border-b-2 border-primary text-primary':''}`} onClick={()=>setActiveVT(idx)}>{tab}</div>
                ))}
            </div>
            <div className='w-[80%] border rounded-xl p-5 flex flex-col gap-20'>
                <div className='bg-gray9 rounded-xl py-5 px-10 text-xl text-center'>
                    Technological advancements provide a competitive edge
                </div>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex gap-10'>
                            {productData.horizontalTabs.map((tab,idx)=>(
                            <div key={idx} className={`cursor-pointer py-2 px-5 ${activeHT===idx?'border rounded border-primary text-primary':''}`} onClick={()=>setActiveHT(idx)}>{tab}</div>
                            ))}
                        </div >
                        <div className='text-sm'>Gather information on international trade in a visually appealing way. Learn about the market trends easily and get all the essential information on the import and export of a country in the form of interactive graphics.</div>
                    </div>
                    <Image src='/productImg.png' alt="productImage" width={300} height={250}/>
                </div>
                            
            </div>
        </div>
        <div className='lg:hidden'>
            <div>
            <div className='flex flex-col gap-5'>

                {productData.verticalTabs.map((tab,idx)=>(
                    <>
                    <div key={idx} className="rounded border border-gray11 bg-gray10 w-full p-2 font-bold text-primary" onClick={()=>setActiveVT(idx)}>{tab}</div>
                    {activeVT === idx &&
                        <div className='flex flex-col gap-5'>
                        {productData.horizontalTabs.map((tab,i)=>(
                            <div key={i}>
                        <div className={`w-[80%] cursor-pointer py-1 px-3 border rounded border-primary text-black1 flex justify-between items-center` } onClick={()=>setActiveHT(i)}>{tab} {activeHT===i? <Image src='/a-u.svg' alt="productImag" width={20} height={20}/>  : <Image src='/a-d.svg' alt="productImag" width={20} height={20}/>} </div>
                        {activeHT===i && <div>
                            <Image src='/productImg.png' alt="productImage" width={300} height={250}/>
                            <div className='text-sm'>Gather information on international trade in a visually appealing way. Learn about the market trends easily and get all the essential information on the import and export of a country in the form of interactive graphics.</div>

                            </div>}
                        </div>
                        ))}
                    </div >}
                    </>
                ))}
                

            </div>
            </div>
        </div>
    </div>
  )
}

export default Product