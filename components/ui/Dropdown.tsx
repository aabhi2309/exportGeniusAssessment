'use client';

import { useState } from 'react';

export default function Dropdown({ options }:any) {
return (
    <div>
        <select className='border border-primary w-60 rounded'>
            {options.map((opt:any,idx:number)=>(
                <option>{opt.name}</option>
            ))}          
            
        </select>
    </div>
)
}
