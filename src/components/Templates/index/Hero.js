'use client'

import Image from 'next/image';
import React from 'react'
import { CiCalculator1 } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";

export default function Hero() {
  return (

    <div className="relative bg-[#FA5A2A]   dark:bg-[slate-800] items-center max-h-[375px] md:h-[351px] text-white flex flex-col md:flex-row   "

    >

{/* for all view in this header */}


<svg className='absolute w-full md:top-[0] md:w-[687px] md:h-[125px]  '  viewBox="0 0 687 125" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.779297" y="-9.67029" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="133.869" y="-9.67032" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="266.959" y="-9.67032" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="400.049" y="-9.67032" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="533.141" y="-9.67032" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="666.23" y="-9.67032" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
          </svg>

<svg className='absolute block md:hidden w-full top-[80px] md:top-[160px]  md:w-[600px] md:h-[136px]' viewBox="0 0 687 136" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.779297" y="1.41943" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="133.869" y="1.41943" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="266.959" y="1.41943" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="400.049" y="1.41943" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="533.141" y="1.41943" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="666.23" y="1.41943" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
          </svg>




          

 {/* right Column: Text */}

      <div
        className="  relative overflow-hidden z-0 sm:flex overflow-x-hidden -translate-y-6 md:-translate-y-0   sm:flex-col max-h-[128px]  max-w-[341px]  md:max-w-[700px]  gap-[12px] md:max-h-[350px] md:flex-1  md:mx-24  text-center md:text-left order-2 md:order-1 px-12 "
        style={{
          background: "linear-gradient(180deg, #FA5A2A 0%, rgba(250, 90, 42, 0.7) 71.35%, rgba(250, 90, 42, 0) 100%)",
        }}
      >

          <svg className='w-full md:w-[687px] md:h-[125px]   '  viewBox="0 0 687 125" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.779297" y="-9.67029" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="133.869" y="-9.67032" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="266.959" y="-9.67032" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="400.049" y="-9.67032" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="533.141" y="-9.67032" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="666.23" y="-9.67032" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
          </svg>


          <svg className='w-full md:w-[687px] md:h-[136px]' viewBox="0 0 687 136" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.779297" y="1.41943" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="133.869" y="1.41943" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="266.959" y="1.41943" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="400.049" y="1.41943" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="533.141" y="1.41943" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="666.23" y="1.41943" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
          </svg>

          <svg  className='w-full md:w-[687px] md:h-[96px]' viewBox="0 0 687 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.779297" y="1.50916" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="133.869" y="1.5092" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="266.959" y="1.5092" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="400.049" y="1.5092" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="533.141" y="1.5092" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
            <rect x="666.23" y="1.5092" width="133.09" height="133.09" rx="14.6858" stroke="#FF744A" strokeWidth="1.37679" />
          </svg>



          <p className="absolute  sm:text-[16px] md:text-[24px]   font-bold z-10 top-[0] md:top-[94px] px-auto md:px-2 transform  translate-x-12 md:translate-x-2 ">
            پنل مسافران
          </p>

          <p className="absolute md:break-words md:p-6 w-full mt-4 text-[12px] text-right md:text-[16px]  z-10 top-[40px] md:top-[150px]  transform translate-x-12 md:translate-x-6  -translate-y-1/2">
            در طول سفرهای شخصی یا تجاری خود، با به اشتراک گذاشتن فضای خالی چمدان خود با دیگران، علاوه بر تجربه‌ی
            مسافرتی جذاب با روشی نوین و امن کسب درآمد داشته باشند.
          </p>

          <button className="absolute  flex mt-4 dark:bg-[#25272C] dark:text-white items-center justify-center z-10 top-[60px]  md:top-[201px]  transform translate-x-12 md:translate-x-2 translate-y-3 font-bold w-[177px] md:w-[221px] h-[40px] md:h-[56px] rounded-md bg-white text-orange-700 gap-[8px]">
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

            <p className='hidden sm:block text-[12px] md:text-[16px]'>برآورد پرداخت مسافر</p>
            <p className='md:hidden sm:block text-[12px] md:text-[16px]'>بررسی برآورد هزینه </p>
            <IoIosArrowBack className="mr-2" />
          </button>

        </div>

{/* end rigt section  */}




      {/* Right Column: Images */}
      <div className="container  flex justify-end items-center  w-[231px] md:w-[450px] h-[213px] md:h-[413px]   order-1 md:order-2   md:ml-[133px] relative">
        {/* Top Cloud Image */}
        <Image
          src="/images/abr-first.png"
          alt="Cloud"
          width={200}
          height={200}
          className="absolute right-2 sm:right-8 md:right-12 transform md:translate-x-28 sm:translate-x-6 translate-x-12 md:translate-y-4 sm:translate-y-2 translate-y-4 z-30"
        />

        {/* Main Bug Image */}
        <Image
          width={500}
          height={200}
          src="/images/bug.png"
          alt="Luggage"
          className="relative z-10 -translate-y-1 -translate-x-16 md:-translate-x-0 md:translate-y-2.5 w-[375px]  md:w-[450px] h-[250px] md:h-[440px] "
        />

        {/* Second Abr Image */}

        
        <Image
          src="/images/abr.png"
          alt="Second Abr"
          width={200}
          height={200}
          className="absolute  z-0 h-10 w-20 -translate-y-12 -translate-x-20 sm:h-16 sm:left-10 md:left-8 transform md:-translate-x-14 sm:-translate-y-3 -translate-y-1"
        />
      </div>



    </div>


  )
}