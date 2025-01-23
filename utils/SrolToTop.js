'use client'
import React, { useEffect, useState } from 'react'


import { FaArrowUp } from "react-icons/fa";

export default function ScrolToTop() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <button
      className='hidden sm:block py-3 px-3   dark:bg-[#383A40]  text-white rounded-full'
      style={{ backgroundColor: '#FA5A2A26' }}
      onClick={scrollToTop}
    >
      <svg className='dark:text-orange-700' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" d="M14.6563 5.3125L14.6562 24.0625" stroke="#FA5A2A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.12625 12.875L14.6563 5.3125L22.1875 12.875" stroke="#FA5A2A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>


  );
}
