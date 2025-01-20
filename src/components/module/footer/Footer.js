'use client'
import React from 'react'
import { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdWifiCalling2 } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import ScrolToTop from '../../../../utils/SrolToTop';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {

    const [quickAccessOpen, setQuickAccess] = useState(false);
    const [importentLinksOpen, setImportentLinks] = useState(false);
    const [contactUsOpen, setContactUs] = useState(false);
    const [isSocialOpen, setIsSocialOpen] = useState(false);


    const toggleQuickAccess = () => setQuickAccess(!quickAccessOpen);
    const toggleImpotentLinks = () => setImportentLinks(!importentLinksOpen);
    const toggleCantact = () => setContactUs(!contactUsOpen);
    const toggleSocials = () => setIsSocialOpen(!isSocialOpen);

    return (

        <footer className="flex flex-col justify-center bg-white  dark:bg-gray-700 dark:text-white text-black py-6">

            <div className='flex justify-end  bg-slate-100  dark:bg-slate-500  translate-y-10  py-14 md:py-20  z-2'>
           {/* button for got top site */}
                <ScrolToTop />
            
            </div>
            {/* emty Background */}

            <div className='flex md:flex-col flex-col w-full max-w-screen-xl z-30 mx-auto'>

                {/* Support Section */}
                <div className="container order-1 sm:1 md:order-1 w-full z-10 relative py-4 mb-3 dark:bg-slate-900 bg-orange-600 flex  mx-auto px-6 justify-between items-center rounded-md">

                    <div className="flex items-center text-center text-sm  sm:mb-0">
                        <p className="hidden sm:block text-white">در خصوص سفارشات نیاز به راهنمایی دارید؟</p>
                        <p className="md:hidden sm:block felx ml-1 whitespace-nowrap text-sm text-white">نیاز به مشاوره دارید؟</p>
                    </div>

                    <div className="flex  sm:flex-row justify-between gap-2 sm:gap-8">
                        {/* whats app */}
                        <Link href={'whatsapp'} className="bg-slate-100 dark:bg-slate-700 text-sm sm:text-sm md:mx-3 flex  sm:flex-row items-center justify-center py-1  px-2 rounded-sm w-full">
                            <p className="text-sm whitespace-nowrap">پشتیبانی آنلاین</p>
                            <FaWhatsapp className="text-green-700" size={20} aria-label="WhatsApp" />
                        </Link>


                        {/* Phone Support */}
                        <div className=" bg-slate-100 py-3 dark:bg-slate-700 flex items-center justify-center  px-1.5  rounded-sm w-full sm:w-auto">
                            <p>۰۲۱-۴۲۵۶</p>
                            <MdWifiCalling2 size={20} aria-label="Phone Support" />
                        </div>
                    </div>


                </div>



                {/* Important Links and Other Links Section */}
                <div className="container order-2 sm:order-3 md:order-2 mx-auto px-4 py-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Quick Access links */}
                        <div className="min-w-[200px]">
                            <h2
                                className="md:hidden sm:block dark:bg-slate-800 flex items-center justify-between py-3 rounded-md px-2 bg-slate-100 text-base font-bold mb-4 cursor-pointer sm:mb-2 sm:block transition-all duration-500 ease-in-out"
                                onClick={toggleQuickAccess}
                            >
                                دسترسی سریع

                                {quickAccessOpen ? (<IoIosArrowUp />) : (<IoIosArrowDown />)}
                            </h2>


                            <h2
                                className="hidden sm:block text-lg font-bold mb-4 cursor-pointer sm:mb-2"

                            >
                                دسترسی سریع
                            </h2>
                            <ul
                                className={`space-y-2 ${quickAccessOpen ? 'block' : 'hidden'} sm:block sm:space-y-1 transition`}
                            >
                                <li><Link href="">رهگیری مرسولات</Link></li>
                                <li><Link href="">سوالات متداول</Link></li>
                                <li><Link href="">قوانین و مقررات</Link></li>
                                <li><Link href="">دربارهما</Link></li>
                            </ul>
                        </div>

                        {/* Important Links */}
                        <div className="min-w-[200px] sm:w-full">
                            <h2
                                className="md:hidden sm:block -mt-5 dark:bg-slate-800 flex items-center justify-between py-3 rounded-md px-2 bg-slate-100 text-base font-bold mb-4 cursor-pointer sm:mb-2 sm:block"
                                onClick={toggleImpotentLinks}
                            >
                                لینک های مهم
                                {importentLinksOpen ? (<IoIosArrowUp />) : (<IoIosArrowDown />)}
                            </h2>


                            <h2
                                className="hidden sm:block text-lg font-bold mb-4 cursor-pointer sm:mb-2"

                            >
                                لینک های مهم
                            </h2>

                            <ul
                                className={`space-y-2 ${importentLinksOpen ? 'block' : 'hidden'} sm:block md:block sm:w-full md:w-auto`} // Full width on mobile (sm) and auto width on larger screens (md+)
                            >
                                <li><Link href="">رهگیری مرسولات</Link></li>
                                <li><Link href="">سوالات متداول</Link></li>
                                <li><Link href="">قوانین و مقررات</Link></li>
                                <li><Link href="">درباره ما</Link></li>
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div className="min-w-[200px] sm:w-full">
                            <h2
                                className="md:hidden sm:block -mt-5 dark:bg-slate-800 flex items-center justify-between py-3 rounded-md px-2 bg-slate-100 text-base font-bold mb-4 cursor-pointer sm:mb-2 sm:block"
                                onClick={toggleCantact}
                            >
                                ارتباط با ما
                                {contactUsOpen ? (<IoIosArrowUp />) : (<IoIosArrowDown />)}
                            </h2>

                            <div
                                className={`dark:bg-slate-800 bg-slate-100 rounded-md p-5 ${contactUsOpen ? 'block' : 'hidden'} sm:block`}
                            >
                                <ul className="space-y-2 text-black dark:text-white">
                                    <li className="border-r-2 border-orange-600 pr-2">
                                        آدرس: تهران، خیابان نلسون ماندلا (جردن سابق)
                                    </li>
                                    <li className="border-r-2 border-orange-600 pr-2">
                                        شماره تماس: ۰۲۱-۲۱۲۳۴ - ۲۱۲۴۱
                                    </li>
                                    <li className="border-r-2 border-orange-600 pr-2">
                                        آدرس ایمیل: sales@tntiran.com
                                    </li>
                                    <li className="border-r-2 border-orange-600 pr-2">
                                        شنبه تا چهارشنبه: 8 الی 16 - پنجشنبه: 8 الی 13
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* social links  */}
                        <div className="block md:hidden min-w-[200px] sm:w-full">
                            <h2
                                className="md:hidden sm:block -mt-5 dark:bg-slate-800 flex items-center justify-between py-3 rounded-md px-2 bg-slate-100 text-base font-bold mb-4 cursor-pointer sm:mb-2 sm:block"
                                onClick={toggleSocials}
                            >
                                شبکه های اجتماعی
                                {isSocialOpen ? (<IoIosArrowUp />) : (<IoIosArrowDown />)}
                            </h2>

                            <div
                                className={`dark:bg-slate-800 bg-slate-100 rounded-md p-5 ${isSocialOpen ? 'block' : 'hidden'} sm:block`}
                            >
                                <div className="flex space-x-4 items-center justify-between">
                                    <Link href={''}>
                                        <FaFacebook className="text-blue-500  mx-3 dark:bg-slate-800 bg-white p-1 rounded-sm" size={30} />
                                    </Link>
                                    <Link href={''}>
                                        <FaTelegram className="text-blue-700 dark:bg-slate-800 bg-white p-1 rounded-sm" size={30} />
                                    </Link>
                                    <Link href={''}>
                                        <FaWhatsapp className="text-green-700 dark:bg-slate-800 bg-white p-1 rounded-sm" size={30} />
                                    </Link>
                                    <Link href={''}>
                                        <FaInstagram className="text-pink-700 dark:bg-slate-800 bg-white p-1 rounded-sm" size={30} />
                                    </Link>
                                </div>


                            </div>
                        </div>


                    </div>
                </div>



                {/* About Section */}

                <div className="container order-1 sm:order-2 md:order-3 w-full md:h-[120px]  grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between mb-6 mt-6 mx-auto px-4">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center  md:justify-start space-x-3">
                            <IoCartOutline className="text-orange-700" size={40} />
                            <h1 className="text-xl md:text-2xl font-bold">شرکت خدمات حمل نقل ران اکسپرس</h1>
                        </div>
                        {/* social icons just show in mobile view  */}
                        <div className="block md:hidden min-w-[200px] sm:w-full ">

                            <div
                                className={`  rounded-md p-5`}
                            >
                                <div className="flex space-x-4 mb-2 items-center justify-between">
                                    <Link href={''}>
                                        <FaFacebook className="text-blue-500  mx-3 dark:bg-slate-800 bg-white p-1 rounded-sm" size={30} />
                                    </Link>
                                    <Link href={''}>
                                        <FaTelegram className="text-blue-700 dark:bg-slate-800 bg-white p-1 rounded-sm" size={30} />
                                    </Link>
                                    <Link href={''}>
                                        <FaWhatsapp className="text-green-700 dark:bg-slate-800 bg-white p-1 rounded-sm" size={30} />
                                    </Link>
                                    <Link href={''}>
                                        <FaInstagram className="text-pink-700 dark:bg-slate-800 bg-white p-1 rounded-sm" size={30} />
                                    </Link>
                                </div>


                            </div>
                        </div>


                        <p className="hidden sm:block mt-3 text-right text-[14px] md:text-base px-6 md:px-0">
                            پست سریع بین المللی تی‌ان‌تی ایران، از سال ۱۹۸۱ فعالیت خود را آغاز کرده و با بیش از چهل سال تجربه،
                            به عنوان یکی از پیشگامان خدمات پستی در ایران شناخته می‌شود. این شرکت دارای نمایندگی‌های فعال در
                            شهرهای مختلف ایران است و خدمات گسترده‌ای را ارائه می‌دهد که شامل راهکارهای نوین زنجیره حمل و نقل می‌شود.
                        </p>
                    </div>

                    {/* logos */}
                    <div className="hidden sm:flex container justify-between items-center gap-6 md:gap-14 w-full max-w-screen-xl  mx-auto ">

                        <Image
                            width={120}
                            height={120}
                            alt="DHL Logo"
                            src="/images/dhl_logo.png"
                            className="max-w-full h-auto mr-24"
                        />


                        <Image
                            width={120}
                            height={120}
                            alt="FedEx Logo"
                            src="/images/fedexpress.png"
                            className="max-w-full h-auto"
                        />


                        <Image
                            width={200}
                            height={120}
                            alt="TNT Logo"
                            src="/images/tnt_logo.png"
                            className="max-w-full h-auto"
                        />
                    </div>


                </div>



            </div>



            {/* Footer Copyright */}
            <div className='gray-color mt-6' style={{ backgroundColor: '#383A40' }} >
                <div className='container mx-auto mt-2 px-4 py-5'>
                    <div className='flex justify-between items-center text-white'>
                        <div>
                            <p className='block sm:hidden flex  text-sm'>
                                تمامی حقوق این سایت متعلق به سایت <span className='text-orange-700 whitespace-nowrap '> ران اکسپرس</span> می باشد.
                            </p>
                            <p className='hidden sm:block sm:text-sm'>تمام حقوق مادی و معنوی این سایت متعلق به ران <span className='text-orange-700'>اکسپرس</span> است</p>
                        </div>


                        <div className="hidden md:flex space-x-4 items-center">
                            <Link href={''}>
                                <FaFacebook className="text-blue-500  mx-3 dark:bg-slate-800 bg-white p-1 rounded-sm" size={30} />
                            </Link>
                            <Link href={''}>
                                <FaTelegram className="text-blue-700 dark:bg-slate-800 bg-white p-1 rounded-sm" size={30} />
                            </Link>
                            <Link href={''}>
                                <FaWhatsapp className="text-green-700 dark:bg-slate-800 bg-white p-1 rounded-sm" size={30} />
                            </Link>
                            <Link href={''}>
                                <FaInstagram className="text-pink-700 dark:bg-slate-800 bg-white p-1 rounded-sm" size={30} />
                            </Link>
                        </div>


                    </div>
                </div>
            </div>


        </footer>


    )
}
