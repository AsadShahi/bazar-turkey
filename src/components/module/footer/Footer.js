'use client'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdWifiCalling2 } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (

        <footer className="flex flex-col justify-center bg-white mt-10 dark:bg-gray-700 dark:text-white text-black py-6">

            {/* emty Background */}
            <div className='container bg-slate-100 -mt-14  py-14  z-2'></div>

            <div className='w-full max-w-screen-xl z-30 mx-auto'>

                {/* Support Section */}
                <div className="container w-full z-10 relative py-4 mb-3 bg-orange-600 flex flex-col sm:flex-row mx-auto px-6 justify-between items-center rounded-md">
                    <div className="text-center sm:text-left mb-4 sm:mb-0">
                        <p className="text-white">در خصوص سفارشات نیاز به راهنمایی دارید؟</p>
                    </div>

                    <div className='flex flex-col sm:flex-row sm:space-x-4 w-full sm:w-auto justify-between sm:items-center space-y-4 sm:space-y-0'>

                        <div className='bg-slate-100 text-sm sm:text-base md:mx-3 flex items-center py-3 px-4 space-x-2 rounded-sm w-full sm:w-auto'>
                            <p>پشتیبانی آنلاین</p>
                            <FaWhatsapp className="text-green-700" size={20} aria-label="WhatsApp" />
                        </div>

                        <div className='bg-slate-100 py-3  flex items-center px-4 space-x-2 rounded-sm w-full sm:w-auto'>
                            <p>۰۲۱-۴۲۵۶</p>
                            <MdWifiCalling2 size={20} aria-label="Phone Support" />
                        </div>

                    </div>
                </div>



                {/* Important Links Section */}
                <div className="container mx-auto px-4 py-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                        {/* Quick Access */}
                        <div>
                            <h2 className="text-lg font-bold mb-4">دسترسی سریع</h2>
                            <ul className="space-y-2">
                                <li><Link href="">رهگیری مرسولات</Link></li>
                                <li><Link href="">سوالات متداول</Link></li>
                                <li><Link href="">قوانین و مقررات</Link></li>
                                <li><Link href="">درباره ما</Link></li>
                            </ul>
                        </div>

                        {/* Important Links */}
                        <div>
                            <h2 className="text-lg font-bold mb-4">لینک های مهم</h2>
                            <ul className="space-y-2">
                                <li><Link href="">صفحه اصلی</Link></li>
                                <li><Link href="">فروشگاه</Link></li>
                                <li><Link href="">فروشنده شوید</Link></li>
                                <li><Link href="">وبلاگ</Link></li>
                            </ul>
                        </div>

                        {/* Another Important Links */}
                        <div>
                            <h2 className="text-lg font-bold mb-4">لینک های مهم</h2>
                            <ul className="space-y-2">
                                <li><Link href="">صفحه اصلی</Link></li>
                                <li><Link href="">فروشگاه</Link></li>
                                <li><Link href="">فروشنده شوید</Link></li>
                                <li><Link href="">وبلاگ</Link></li>
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-slate-100 rounded-md p-5">
                            <ul className="space-y-2 text-black">
                                <li>آدرس: تهران، خیابان نلسون ماندلا (جردن سابق)</li>
                                <li>شماره تماس: ۰۲۱-۲۱۲۳۴ - ۲۱۲۴۱</li>
                                <li>آدرس ایمیل: sales@tntiran.com</li>
                                <li>شنبه تا چهارشنبه: 8 الی 16 - پنجشنبه: 8 الی 13</li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* About Section */}
                <div className="container w-full h-[120px] grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between mb-6 mt-6 mx-auto px-4">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start space-x-3">
                            <IoCartOutline className="text-orange-700" size={40} />
                            <h1 className="text-xl md:text-2xl font-bold">شرکت خدمات حمل نقل ران اکسپرس</h1>
                        </div>

                        <p className="mt-3 text-right text-[14px] md:text-base px-6 md:px-0">
                            پست سریع بین المللی تی‌ان‌تی ایران، از سال ۱۹۸۱ فعالیت خود را آغاز کرده و با بیش از چهل سال تجربه،
                            به عنوان یکی از پیشگامان خدمات پستی در ایران شناخته می‌شود. این شرکت دارای نمایندگی‌های فعال در
                            شهرهای مختلف ایران است و خدمات گسترده‌ای را ارائه می‌دهد که شامل راهکارهای نوین زنجیره حمل و نقل می‌شود.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-between gap-4 md:gap-6">
                        <Image width={120} height={120} alt='DHL Logo' src='/images/dhl_logo.png' />
                        <Image width={120} height={120} alt='FedEx Logo' src='/images/fedex_logo.jfif' />
                        <Image width={120} height={120} alt='TNT Logo' src='/images/tnt_logo.jfif' />
                    </div>
                </div>

            </div>

            {/* Footer Copyright */}
            <div className='gray-color mt-6' style={{ backgroundColor: '#383A40' }} >
                <div className='container mx-auto mt-2 px-4 py-5'>
                    <div className='flex justify-between items-center text-white'>
                        <div>
                            <p>تمام حقوق مادی و معنوی این سایت متعلق به ران <span className='text-orange-700'>اکسپرس</span> است</p>
                        </div>
                        <div className='flex space-x-4'>
                            <Link href={''}> <FaFacebook className="text-blue-500 mx-3 bg-white p-1 rounded-sm" size={30} /></Link>
                            <Link href={''}> <FaTelegram className="text-blue-700 bg-white p-1 rounded-sm" size={30} /></Link>
                            <Link href={''}> <FaWhatsapp className="text-green-700 bg-white p-1 rounded-sm" size={30} /></Link>
                            <Link href={''}> <FaInstagram className="text-pink-700 bg-white p-1 rounded-sm" size={30} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    )
}
