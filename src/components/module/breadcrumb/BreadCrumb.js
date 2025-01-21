'use client'
import React from 'react';
import Link from 'next/link';
import { MdOutlineChevronLeft } from "react-icons/md";

export default function BreadCrumb() {
  return (


    <div className=" bg-slate-100 dark:bg-slate-700 flex items-center h-[64px] border-b">
    <div className="container mx-auto flex flex-wrap items-center justify-between mx-auto py-3 px-7">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center  space-x-2 rtl:space-x-reverse">
        <Link
          href="/"
          className="text-slate-700  dark:text-white hover:text-orange-700 font-medium transition"
        >
          خانه
        </Link>
        <MdOutlineChevronLeft className="text-gray-500  dark:text-white mx-2" />
        <Link
          href="/passenger-panel"
          className="text-slate-700  dark:text-white hover:text-orange-700 font-medium transition"
        >
          پنل مسافران
        </Link>
      </div>
    </div>
  </div>
  
  );
}
