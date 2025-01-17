'use client'
import React from 'react';
import Link from 'next/link';
import { MdOutlineChevronLeft } from "react-icons/md";

export default function BreadCrumb() {
  return (

    <div className='bg-slate-100 ' >

    <div className="container flex items-center mx-auto py-3 px-16">

      <Link href="/" className="text-slate-700  hover:text-blue-700 font-medium">
        خانه
      </Link>
     
      <MdOutlineChevronLeft className="text-gray-500 mx-2" />
      
      <Link href="/passenger-panel" className="text-slate-700 hover:text-blue-800 font-medium">
        پنل مسافران
      </Link>
    </div>

    </div>
  );
}
