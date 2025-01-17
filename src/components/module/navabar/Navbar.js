'use client'
import React, { useState ,useEffect } from 'react';
import { CiHome, CiUser } from "react-icons/ci";
import { TiShoppingBag } from 'react-icons/ti'
import { MdOutlinePersonOutline } from "react-icons/md";
import { TbBorderStyle2 } from "react-icons/tb";
import { AiOutlineShoppingCart, AiOutlineGlobal } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoBell } from "react-icons/go";
import { IoLogInOutline, IoMoonOutline, IoCartOutline } from "react-icons/io5";
import { FaFlagUsa } from "react-icons/fa";
import { RiQrScan2Line } from "react-icons/ri";

import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
import ThemeToggle from '../themeToggle/ThemeToggle';


export default function Navbar() {

  return (

    <div className='dark:bg-slate-700'>


      <div className=' mb-0 bg-slate-800 py-3'>

        <div className='flex items-center justify-between space-x-4 mx-8 text-white'>

          <div>

            <p>به وبسایت بازار ترکیه خوش امدید</p>
          </div>


          <div className='flex items-center justify-rounded '>
            <IoIosArrowDown className="ml-2" />
            <p>ایران/تومان</p>
            <FaFlagUsa className='mr-2' />

          </div>


        </div>

      </div>


      {/* top header navbar */}
      <div className="container md:order-1 dark:bg-gray-700 flex flex-wrap md:flex-nowrap items-center justify-between py-4 mx-auto px-6">
        {/* Left Section */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse w-full md:w-auto order-2 md:order-1">
          <Link href="/cart" className="text-orange-600 transition">
            <IoCartOutline className="text-2xl ml-3" />
          </Link>
          
          <button className="text-orange-600 bg-slate-100 p-2 rounded-sm transition">
            <RxHamburgerMenu className="text-2xl" />
          </button>
        </div>

        {/* Middle Section - Search Input */}
        <div className="relative md:order-3 mr-3 w-full md:flex-grow sm:w-full order-3 md:order-2">
          <input
            type="text"
            className="w-full bg-slate-100 px-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-500"
            placeholder="کالای مورد نظر خودرا جستجو کنید"
          />
          <CiSearch className="absolute right-3 text-orange-700 text-lg top-1/2 transform -translate-y-1/2" />
        </div>

        {/* Right Section */}
        <div className="flex md:order-2 items-center space-x-4 rtl:space-x-reverse w-full md:w-auto order-1 md:order-3">
          <Link href="/notifications" className="text-gray-600 mr-3 hover:text-orange-600 transition">
            <GoBell className="text-2xl ml-3" />
          </Link>
          {/* toggle button for dark and lighr mode */}
          <ThemeToggle/>

          <Link
            href="/login"
            className="text-gray-600 bg-orange-600 py-2 px-2 rounded-md text-white transition flex items-center"
          >
            <IoLogInOutline className="mr-2" />
            ورود
          </Link>
          <Link
            href="/register"
            className="text-gray-600 py-2 px-2 rounded-md border-orange-600 border-2 border-indigo-600 text-orange-600 transition flex items-center"
          >
            <CiUser className="mr-2" size={20} />
            عضویت
          </Link>
        </div>
      </div>


      {/* nav buttons */}
      <header className="bg-slate-100 shadow ">

        <nav className="hidden container mb-5 mt-5 py-5 mx-auto md:flex justify-between items-center space-x-6 space-x-reverse">
          
          <ul className="flex items-center space-x-4 space-x-reverse">

            <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-orange-600 transition px-3 flex items-center"
              >
                <CiHome className="ml-1" />
                خانه
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-orange-600 transition px-2 flex items-center"
              >
                <AiOutlineGlobal className="ml-1" />
                بخش های از سایت
                <IoIosArrowDown className="ml-2" />
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="text-gray-600 hover:text-orange-600 transition px-2 flex items-center"
              >
                <TiShoppingBag className="ml-1" />
                فروشنده شوید
              </Link>
            </li>

            <li className='bg-orange-600 px-3 py-1 rounded-sm'>
              <Link
                href="/"
                className="text-white    px-2 flex items-center"
              >
                <MdOutlinePersonOutline className="ml-2" />
                نماینده شوید
              </Link>
            </li>

          </ul>

          
          <div className="flex space-x-4 space-x-reverse border-l pl-4">
            <a
              href="/"
              className="text-gray-600 hover:text-orange-600 transition px-2 flex items-center"
            >
              <RiQrScan2Line className="ml-1" />
              پیگری سفارشات
            </a>
            <a
              href="/"
              className="text-gray-600 hover:text-orange-600 transition px-2 flex items-center"
            >
              <AiOutlineShoppingCart className="ml-1" />
              سبد خرید
            </a>
          </div>
        </nav>


      </header>
    </div>

  );
}
