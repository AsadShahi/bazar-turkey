'use client'

import Image from 'next/image';
import React from 'react'
import { CiCalculator1 } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";

export default function Hero() {
  return (

    <div className="bg-orange-700 dark:bg-[slate-800] items-center  md:h-[351px] text-white flex flex-col md:flex-row   ">
      {/* Left Column: Text */}
      <div className="md:flex-1 mx-4 md:mx-24 my-8 text-center md:text-left order-2 md:order-1">
        <p className="text-2xl text-right md:text-2xl font-bold">پنل مسافران</p>
        <p className="mt-4 text-base text-right md:text-base  leading-relaxed">
          در طول سفرهای شخصی یا تجاری خود، با به اشتراک گذاشتن فضای خالی چمدان خود با دیگران، علاوه بر تجربه‌ی
          مسافرتی جذاب با روشی نوین و امن کسب درآمد داشته باشند.
        </p>

      
        <button className="flex mt-4 dark:bg-[#25272C] dark:text-white items-center justify-center font-bold w-[221px] h-[56px] rounded-md bg-white text-orange-700 gap-[17px] md:gap-[8px]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.5 7.58V8.58C16.5 9.4 15.83 10.08 15 10.08H9C8.18 10.08 7.5 9.41 7.5 8.58V7.58C7.5 6.76 8.17 6.08 9 6.08H15C15.83 6.08 16.5 6.75 16.5 7.58Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.13612 14H8.14767" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.9955 14H12.007" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.8549 14H15.8664" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.13612 17.5H8.14767" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.9955 17.5H12.007" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.8549 17.5H15.8664" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <p className='hidden sm:block'>برآورد پرداخت مسافر</p>
          <p className='md:hidden sm:block text-sm'>بررسی برآورد هزینه </p>
          <IoIosArrowBack className="mr-2" />
        </button>

      </div>



      {/* Right Column: Images */}
      <div className="container flex justify-end items-center w-full h-[213px]  order-1 md:order-2 w-full md:w-[450px] md:h-[413px] sm:w-[231px] sm:h-[212px] h-auto md:ml-[133px] relative">
        {/* Top Cloud Image */}
        <Image
          src="/images/abr-first.png"
          alt="Cloud"
          width={200}
          height={200}
          className="absolute right-2 sm:right-8 md:right-12 transform md:translate-x-28 sm:translate-x-6 -translate-x-1 md:translate-y-4 sm:translate-y-2 translate-y-16 z-30"
        />

        {/* Main Bug Image */}
        <Image
          width={500}
          height={200}
          src="/images/bug.png"
          alt="Luggage"
          className="relative z-10 translate-y-8 md:translate-y-1 w-[300px] h-[350px] sm:w-[400px] sm:h-[212px]  md:w-[450px] md:h-[440px] mb-2"
        />

        {/* Second Abr Image */}
        <Image
          src="/images/abr.png"
          alt="Second Abr"
          width={200}
          height={200}
          className="absolute z-0 h-10 w-20 -translate-y-3 -translate-x-3 sm:h-16 left-4 sm:left-10 md:left-16 transform md:-translate-x-1/2 sm:-translate-y-3 -translate-y-1"
        />
      </div>



    </div>


  )
}
