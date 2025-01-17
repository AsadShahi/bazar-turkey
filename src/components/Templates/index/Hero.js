'use client'

import Image from 'next/image';
import React from 'react'
import { CiCalculator1 } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";

export default function Hero() {
  return (
    <div className="bg-orange-600 text-white md:py-8 flex flex-col md:flex-row items-center md:h-52">
    {/* Left Column: Text */}
    <div className="md:flex-1 mx-4 md:mx-24 my-8 text-center md:text-left order-2 md:order-1">
      <p className="text-2xl text-right md:text-2xl font-bold">پنل مسافران</p>
      <p className="mt-4 text-sm text-right md:text-base leading-relaxed">
        در طول سفرهای شخصی یا تجاری خود، با به اشتراک گذاشتن فضای خالی چمدان خود با دیگران، علاوه بر تجربه‌ی
        مسافرتی جذاب با روشی نوین و امن کسب درآمد داشته باشند.
      </p>
      <button className="flex mt-4  items-center justify-center px-4 py-3 rounded-md bg-white text-orange-700">
        <CiCalculator1 className="ml-2" />
        برآورد پرداخت مسافر
        <IoIosArrowBack className="mr-2" />
      </button>
    </div>
  
    {/* Right Column: Images */}
    <div className="relative   w-full md:w-1/2 h-64 md:h-auto flex justify-center items-center order-1 md:order-2 overflow-hidden">
      {/* Background Image (abr-first) */}
      <Image
        src="/images/abr-first.png"
        alt=" Cloud"
        width={200}
        height={200}
        className="absolute w-32 h-16 sm:w-40 sm:h-20 right-8 sm:right-12 transform md:translate-x-2 translate-y-4 sm:translate-y-6 z-30"
      />
  
      {/* Main Luggage or Image bug */}
      <Image
        src="/images/bug.png"
        alt="Luggage"
        width={300}
        height={250}
        className="relative    z-10"
      />
  
      {/* Top Image (abr) */}
      <Image
        src="/images/abr.png"
        alt="second abr"
        width={200}
        height={200}
        className="absolute z-0 h-12 sm:h-16 left-8 sm:left-12 transform md:translate-x-1/2 -translate-y-4"
      />
    </div>
  </div>
  

  )
}
