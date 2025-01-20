'use client'

import Image from 'next/image';
import React from 'react'
import { CiCalculator1 } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";

export default function Hero() {
  return (
    
    <div className="bg-orange-600 dark:bg-slate-800 items-center md:h-[351px] text-white flex flex-col md:flex-row sm:h-[314px]  ">
      {/* Left Column: Text */}
      <div className="md:flex-1 mx-4 md:mx-24 my-8 text-center md:text-left order-2 md:order-1">
        <p className="text-2xl text-right md:text-2xl font-bold">پنل مسافران</p>
        <p className="mt-4 text-base text-right md:text-base  leading-relaxed">
          در طول سفرهای شخصی یا تجاری خود، با به اشتراک گذاشتن فضای خالی چمدان خود با دیگران، علاوه بر تجربه‌ی
          مسافرتی جذاب با روشی نوین و امن کسب درآمد داشته باشند.
        </p>
  
        <button className="flex mt-4 dark:bg-slate-700 dark:text-white items-center justify-center font-bold w-[221px] h-[56px] rounded-md bg-white text-orange-700">
          <CiCalculator1 className="ml-2" />
          <p className='hidden sm:block'>برآورد پرداخت مسافر</p>       
          <p className='md:hidden sm:block text-sm'>بررسی برآورد هزینه </p>       
          <IoIosArrowBack className="mr-2" />
        </button>

      </div>



      {/* Right Column: Images */}
      <div className="container flex justify-end  items-center w-full h-[231px] order-1 md:order-2 w-full md:w-[450px] md:h-[413px] sm:w-[231px] sm:h-[212px] h-auto md:ml-[133px] relative">
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
          className="relative z-10 translate-y-8 -translate-x-1 w-[300px] h-[350px] mb-2 sm:w-[400px] sm:h-[212px] md:w-[450px] md:h-[440px]"
        />

      
        <Image
          src="/images/abr.png"
          alt="Second Abr"
          width={200}
          height={200}
          className="absolute  z-0 h-10 w-20 -translate-y-3 -translate-x-3 sm:h-16 left-4 sm:left-10 md:left-16 transform md:-translate-x-1/2 sm:-translate-y-3 -translate-y-1 "
        /> 


        
      </div>



    </div>


  )
}
