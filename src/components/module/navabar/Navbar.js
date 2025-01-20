'use client';
import React from 'react';
import { CiHome, CiUser, CiSearch } from "react-icons/ci";
import { TiShoppingBag } from 'react-icons/ti';
import { MdOutlinePersonOutline } from "react-icons/md";
import { AiOutlineShoppingCart, AiOutlineGlobal } from "react-icons/ai";
import { IoLogInOutline, IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

import { GoBell } from "react-icons/go";
import { FaFlagUsa } from "react-icons/fa";
import { RiQrScan2Line } from "react-icons/ri";
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import './Navbar.module.css';
import { BiSolidCategoryAlt } from "react-icons/bi";
import WorldFlag from 'react-world-flags'; // Import WorldFlag component


export default function Navbar() {
  return (
    <div className="dark:bg-slate-700">
      {/* Top Announcement Bar */}
      <div className="flex items-center h-[58px] bg-gray-800 text-white px-4 md:px-8">
        <div className="flex justify-between items-center w-full">
          <p className="text-sm md:text-base">به وبسایت بازار ترکیه خوش امدید</p>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <IoIosArrowDown className="ml-1" />
              <p className="text-sm md:text-base">ایران/تومان</p>
            </div>

            <WorldFlag code='IR'  width={20} height={20}/>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-4 md:px-8">
        {/* Left Section */}
        <div className=" flex items-center  space-x-4 ">
          
          <Link href="/cart" className=" order-2 sm:order-1 text-orange-600">
            <IoCartOutline className="text-2xl sm:ml-2"size={40} />
          </Link>

          <button className="order-1 sm:order-2   dark:bg-slate-800 text-orange-600  bg-gray-100  p-2 rounded transition">
            <RxHamburgerMenu className="text-2xl  " />
          </button>
        </div>

        {/* Middle Section - Search Bar */}
        <div className="relative  flex items-center mt-2  md:mt-auto w-full md:w-[782px] md:h-[48px] order-2 md:order-1">
          <input
            type="text"
            className="w-full dark:bg-slate-700 dark:text-white bg-gray-100 px-10 mx-2 py-2 rounded-lg border border-gray-300 focus:outline-none "
            placeholder="کالای مورد نظر خود را جستجو کنید"
          />
          <CiSearch size={25} className="absolute  dark:text-white right-3 text-orange-700 text-xl top-1/2 transform -translate-y-1/2" />
        </div>


        {/* right section  */}
        <div className="flex items-center justify-between space-x-4 rtl:space-x-reverse order-1 md:order-2">
          {/* Notifications Icon */}
          <div className='md:hidden sm:block flex items-center justify-center mx-auto'>
            <p className='dark:text-white'>BazarTurkey</p>

          </div>
          <Link href="/notifications" className="text-gray-600 dark:text-orange-700 hover:text-orange-600 transition border-l-2 pl-1">
            <GoBell className="text-2xl" />
          </Link>

         

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Desktop Links (Login and Register) */}
          <div className="hidden sm:flex items-center space-x-4">
            <Link
              href="/login"
              className="flex items-center dark:bg-slate-800 text-white bg-orange-600 mx-2 px-3 py-2 rounded-md transition"
            >
              <IoLogInOutline className="ml-2" />
              ورود
            </Link>

            <Link
              href="/register"
              className="flex items-center  dark:bg-slate-800 text-orange-600 border border-orange-600 px-3 py-2 rounded-md transition"
            >
              <CiUser className="ml-2" size={20} />
              عضویت
            </Link>
          </div>

          {/* Mobile Link (Menu Icon) */}
          <div className="sm:hidden ">
            <Link
              href="/register"
              className="flex items-center border-0 outline-0 text-orange-600 border border-orange-600 px-3 py-2 rounded-md transition"
            >
              <BiSolidCategoryAlt className="ml-2  text-2xl" size={30} />
            </Link>
          </div>
        </div>


      </div>


      {/*nav links  */}
      <div className="hidden sm:flex bg-slate-100 dark:bg-slate-700 h-[64px] border-b-2 items-center">
        <nav className="container mx-auto flex justify-between items-center px-4 space-x-reverse">
          <ul className="flex flex-wrap items-center space-x-4 rtl:space-x-reverse">
            <li>
              <Link
                href="/"
                className="text-gray-600 dark:text-white hover:text-orange-600 transition px-3 flex items-center"
              >
                <CiHome className="ml-1" />
                خانه
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-gray-600 dark:text-white hover:text-orange-600 transition px-2 flex items-center"
              >
                <AiOutlineGlobal className="ml-1" />
                بخش های از سایت
                <IoIosArrowDown className="ml-2" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-600 dark:text-white hover:text-orange-600 transition px-2 flex items-center"
              >
                <TiShoppingBag className="ml-1" />
                فروشنده شوید
              </Link>
            </li>
            <li className="bg-orange-600  dark:bg-slate-800 dark:text-white px-3 py-1 rounded-sm">
              <Link
                href="/"
                className="text-white px-2 flex items-center"
              >
                <MdOutlinePersonOutline className="ml-2" />
                نماینده شوید
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <a
              href="/"
              className="text-gray-600 dark:text-white hover:text-orange-600 border-l-2 border-slate-300 transition px-2 flex items-center"
            >
              <RiQrScan2Line className="ml-1" />
              پیگیری سفارشات
            </a>
            <a
              href="/"
              className="text-gray-600 dark:text-white hover:text-orange-600 transition px-2 flex items-center"
            >
              <AiOutlineShoppingCart className="ml-1" />
              سبد خرید
            </a>
          </div>
        </nav>
      </div>

    </div>
  );
}
