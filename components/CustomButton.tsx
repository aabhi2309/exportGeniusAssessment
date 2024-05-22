'use client'
import React from 'react';
import Image from 'next/image';
import { CustomButtonProps } from '../types'

const CustomButton = ({title,buttonStyle,handleClick,btnType}:CustomButtonProps) => {
    console.log({buttonStyle});
    
  return (

    <button
        disabled={false}
        type={btnType}
        className={buttonStyle}
        onClick={handleClick}
    >
       <span className={`flex-1`}>{title}</span> 
    </button>
  )
}

export default CustomButton