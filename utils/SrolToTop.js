'use client'
import React, { useEffect, useState } from 'react'


import { FaArrowUp } from "react-icons/fa";

export default function ScrolToTop() {

    const scrollToTop=()=>{
       window.scrollTo({
        top:0,
        behavior:"smooth"
       })
    }

    return (
        <button
          className='py-4 px-4 md:mx-28 mx-2 bg-orange-700 dark:bg-slate-800  text-white rounded-full'
          onClick={scrollToTop}
        >
          <FaArrowUp size={20} />
        </button>

        
      ); 
}
