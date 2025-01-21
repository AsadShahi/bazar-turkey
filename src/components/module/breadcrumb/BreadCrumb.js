'use client'
import React from 'react';
import Link from 'next/link';
import { MdOutlineChevronLeft } from "react-icons/md";

export default function BreadCrumb() {
  return (


    <div className="bg-slate-100 dark:bg-slate-700 flex items-center h-[64px] border-b">
      <div className="container mx-auto flex flex-wrap items-center justify-between mx-auto py-3 px-7">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center  space-x-2 rtl:space-x-reverse">
          <Link
            href="/"
            className="text-slate-700  dark:text-white hover:text-orange-700 font-medium transition"
          >
            خانه
          </Link>
          <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.83926 7.50592C5.16469 7.18049 5.16469 6.65285 4.83926 6.32741L2.51184 4L4.83926 1.67259C5.16469 1.34715 5.16469 0.819516 4.83926 0.494079C4.51382 0.168642 3.98618 0.168641 3.66074 0.494079L0.744078 3.41074C0.418641 3.73618 0.418641 4.26382 0.744078 4.58926L3.66074 7.50592C3.98618 7.83136 4.51382 7.83136 4.83926 7.50592Z" stroke='#fff' fill="#4D4D4D" />
          </svg>
          <Link
            href="/passenger-panel"
            className="text-slate-700  dark:text-white hover:text-orange-700 font-medium transition"
          >
            <p className='md:hidden sm:block'>ثبت محصول</p>
            <p className='md:block hidden'> پنل مسافران</p>
          </Link>
        </div>
      </div>
    </div>

  );
}
