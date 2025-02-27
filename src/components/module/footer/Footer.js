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

        <footer className="flex flex-col justify-center bg-white  dark:bg-[#3A3C42] dark:text-white text-black py-6">

            {/* empty Background */}
            <div className='flex justify-end  bg-[#F6F6F6]   dark:bg-[#25272C]  translate-y-6 md:translate-y-12 py-6 md:py-20  z-2'>
                {/* button for got top site */}

                <div className=' md:w-[54px] md:h-[54px]  md:ml-[130px]'>
                    <ScrolToTop />
                </div>

            </div>

            {/* links */}
            <div className='flex md:flex-col flex-col w-full max-w-screen-xl z-30 mx-auto'>

                {/* Support Section */}
                <div className="container  max-w-[343px]  md:max-w-[1240px] md:h-[97px]   order-1 sm:order-1 md:order-1  z-10 relative h-[45px] mb-3  bg-[#FA5A2A] flex md:flex-row  items-center rounded-md">

                    <div className="flex w-full justify-between sm:max-w-[327px] md:max-w-[1158px] mx-3 ">


                        <div className="flex h-[28px] md:h-[60px] items-center text-center text-[18px] mr-0.5 md:mr-8  ">
                            <p className="hidden sm:block text-white text-[18px]">در خصوص سفارشات نیاز به راهنمایی دارید؟</p>
                            <p className="md:hidden sm:block felx ml-1 whitespace-nowrap text-[12px] text-white">نیاز به مشاوره دارید؟</p>
                        </div>

                        <div className="flex sm:flex-row justify-between h-[28px] md:h-[60px] gap-[4.76] md:gap-[10]">
                            {/* whats app */}
                            <Link href={'whatsapp'} className="bg-[#F6F6F6] dark:bg-[#404248] text-sm sm:text-sm md:mx-3 flex  sm:flex-row items-center justify-center py-1  px-2 rounded-[3.34px] md:rounded-[7px] w-full gap-[4.76]">
                                <p className="text-[12px] md:text-[16px] whitespace-nowrap">پشتیبانی آنلاین</p>
                                <svg className=' w-[12px] h-[12px] md:w-[28px] md:h-[29px]' viewBox="0 0 28 29"  fill="#4D4D4D" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 28.0283L1.90185 21.0804C0.728274 19.0466 0.111609 16.7412 0.112736 14.3771C0.116118 6.98614 6.13058 0.97168 13.5204 0.97168C17.1065 0.972807 20.4728 2.3696 23.0049 4.90391C25.5358 7.43821 26.9292 10.8068 26.9281 14.3895C26.9247 21.7816 20.9103 27.7961 13.5204 27.7961C11.277 27.7949 9.06622 27.2324 7.108 26.1636L0 28.0283ZM7.43719 23.7364C9.32664 24.8582 11.1304 25.5301 13.5159 25.5312C19.6578 25.5312 24.661 20.5325 24.6644 14.3872C24.6666 8.22962 19.6871 3.23767 13.5249 3.23542C7.37856 3.23542 2.37873 8.23413 2.37647 14.3782C2.37534 16.8866 3.11038 18.7648 4.34484 20.7298L3.21861 24.8424L7.43719 23.7364ZM20.2744 17.5765C20.191 17.4368 19.9678 17.3533 19.6318 17.1854C19.297 17.0174 17.6499 16.2068 17.3422 16.0952C17.0355 15.9836 16.8123 15.9272 16.588 16.2632C16.3647 16.598 15.7221 17.3533 15.5271 17.5765C15.3321 17.7998 15.1359 17.8279 14.8011 17.66C14.4663 17.492 13.3863 17.1391 12.1067 15.9971C11.1112 15.1088 10.4382 14.0118 10.2432 13.6759C10.0481 13.3411 10.2229 13.1596 10.3897 12.9927C10.5408 12.8428 10.7246 12.6015 10.8925 12.4054C11.0628 12.2114 11.118 12.0717 11.2307 11.8473C11.3424 11.6241 11.2871 11.4279 11.2026 11.26C11.118 11.0931 10.4484 9.44378 10.1699 8.773C9.89708 8.12026 9.62088 8.2082 9.4157 8.19805L8.77311 8.18678C8.54989 8.18678 8.18688 8.2702 7.88024 8.60615C7.5736 8.94211 6.70778 9.75155 6.70778 11.4009C6.70778 13.0502 7.90842 14.6432 8.07527 14.8664C8.24325 15.0896 10.4371 18.4739 13.7977 19.9248C14.597 20.2698 15.2216 20.4761 15.7075 20.6306C16.5102 20.8853 17.2407 20.8493 17.8179 20.7636C18.4616 20.6678 19.7998 19.953 20.0794 19.1706C20.359 18.3871 20.359 17.7163 20.2744 17.5765Z" stroke='currentColor' fill="#4D4D4D" />
                                </svg>

                            </Link>


                            {/* Phone Support */}
                            <div className=" bg-white py-3 px-2  flex items-center justify-center   rounded-[3.34px] md:rounded-[7px] w-full sm:w-auto  gap-[4.76] " >
                                <p className='text-[#383A40] text-[12px] md:text-[16px]'>۰۲۱-۴۲۵۶</p>
                                <svg className='w-[19px] h-[19px] md:w-[40px] md:h-[41px]' viewBox="0 0 40 41" fill="#383A40" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M22.083 5.50004C22.083 4.80968 22.6427 4.25004 23.333 4.25004C25.0292 4.25004 26.7089 4.58414 28.276 5.23326C29.8431 5.88239 31.267 6.83382 32.4665 8.03324C33.6659 9.23267 34.6173 10.6566 35.2665 12.2237C35.9156 13.7908 36.2497 15.4705 36.2497 17.1667C36.2497 17.8571 35.69 18.4167 34.9997 18.4167C34.3093 18.4167 33.7497 17.8571 33.7497 17.1667C33.7497 15.7988 33.4802 14.4442 32.9568 13.1804C32.4333 11.9166 31.666 10.7683 30.6987 9.80101C29.7314 8.83373 28.5831 8.06645 27.3193 7.54296C26.0555 7.01948 24.7009 6.75004 23.333 6.75004C22.6427 6.75004 22.083 6.1904 22.083 5.50004ZM22.083 11.3334C22.083 10.643 22.6427 10.0834 23.333 10.0834C24.2632 10.0834 25.1843 10.2666 26.0437 10.6226C26.9031 10.9785 27.6839 11.5003 28.3417 12.158C28.9994 12.8158 29.5212 13.5966 29.8772 14.456C30.2331 15.3154 30.4163 16.2365 30.4163 17.1667C30.4163 17.8571 29.8567 18.4167 29.1663 18.4167C28.476 18.4167 27.9163 17.8571 27.9163 17.1667C27.9163 16.5648 27.7978 15.9688 27.5675 15.4127C27.3371 14.8567 26.9995 14.3514 26.5739 13.9258C26.1483 13.5002 25.643 13.1626 25.087 12.9323C24.5309 12.7019 23.9349 12.5834 23.333 12.5834C22.6427 12.5834 22.083 12.0237 22.083 11.3334Z" stroke='#383A40' fill="#383A40" />
                                    <path d="M10.2307 4.69397L15.6312 12.0582C16.1812 12.8083 15.9942 13.8658 15.2203 14.3818C13.4135 15.5863 12.6776 17.8357 13.9052 19.6269C14.6452 20.7066 15.6746 21.9995 17.0874 23.4123C18.5002 24.8251 19.7931 25.8545 20.8728 26.5945C22.664 27.8221 24.9135 27.0862 26.118 25.2794C26.6339 24.5055 27.6914 24.3185 28.4415 24.8686L35.8057 30.269C36.9852 31.134 36.9455 32.9083 35.7285 33.7196L32.667 35.7606C30.4988 37.2061 27.86 37.7126 25.5869 36.4384C22.9792 34.9767 19.0008 32.1759 13.6623 26.8374C8.32377 21.4989 5.52297 17.5205 4.06129 14.9128C2.78713 12.6397 3.29359 10.0009 4.73907 7.83271L6.78009 4.77119C7.59141 3.5542 9.36574 3.5145 10.2307 4.69397Z" stroke='#383A40' fill="#383A40" />
                                </svg>
                            </div>
                        </div>

                    </div>

                </div>



                {/* Important Links and Other Links Section */}
                <div className="container order-2 sm:order-3 md:order-2 mx-auto px-4 py-6">
                    <div className="grid grid-cols-1 text-[#4D4D4D] dark:text-white sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Quick Access links */}
                        <div className="min-w-[200px]">
                            <h2
                                className="md:hidden sm:block dark:bg-[#404248] flex items-center justify-between py-3 rounded-md px-2 bg-[#F6F6F6] text-base font-bold mb-4 cursor-pointer sm:mb-2 sm:block transition-all duration-500 ease-in-out"
                                onClick={toggleQuickAccess}
                            >
                                دسترسی سریع

                                {quickAccessOpen ? (<IoIosArrowUp />) : (<IoIosArrowDown />)}
                            </h2>


                            <h2
                                className="hidden sm:block text-lg font-bold mb-4  border-r-2 border-[#FA5A2A] md:px-2  sm:mb-2"

                            >
                                دسترسی سریع
                            </h2>
                            <ul
                                className={`space-y-2 ${quickAccessOpen ? 'block' : 'hidden'} dark:bg-[#404248] md:dark:bg-transparent p-2 sm:block sm:space-y-1 dark:bg-[#404248] transition md:gap-[12px]`}
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
                                className="md:hidden sm:block -mt-5  dark:bg-[#404248] md:dark:bg-[#383A40]  flex items-center justify-between py-3 rounded-md px-2 bg-[#F6F6F6] text-base font-bold mb-4 cursor-pointer sm:mb-2 sm:block"
                                onClick={toggleImpotentLinks}
                            >
                                لینک های مهم
                                {importentLinksOpen ? (<IoIosArrowUp />) : (<IoIosArrowDown />)}
                            </h2>


                            <h2
                                className="hidden sm:block text-lg font-bold mb-4   border-r-2 border-[#FA5A2A] md:px-2 sm:mb-2"

                            >
                                لینک های مهم
                            </h2>

                            <ul
                                className={`space-y-2 ${importentLinksOpen ? 'block' : 'hidden'} dark:bg-[#404248] md:dark:bg-transparent p-2  sm:block md:block sm:w-full md:w-auto md:gap-[12px]`} // Full width on mobile (sm) and auto width on larger screens (md+)
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
                                className="md:hidden sm:block -mt-5 dark:bg-[#404248] md:dark:bg-[#383A40]  flex items-center justify-between py-3 rounded-md px-2 bg-[#F6F6F6] text-base font-bold mb-4 cursor-pointer sm:mb-2 sm:block"
                                onClick={toggleCantact}
                            >
                                ارتباط با ما
                                {contactUsOpen ? (<IoIosArrowUp />) : (<IoIosArrowDown />)}
                            </h2>

                            <div
                                className={`dark:bg-[#404248] bg-[#F6F6F6] rounded-md p-5 ${contactUsOpen ? 'block' : 'hidden'} sm:block`}
                            >
                                <ul className="space-y-[16px] text-md text-[#4D4D4D] dark:text-white ">
                                    <li className="border-r-2 border-orange-600 pr-2">
                                        آدرس: تهران، خیابان نلسون ماندلا (جردن سابق)
                                    </li>
                                    <li className="border-r-2 border-orange-600 pr-2">
                                        شماره تماس: ۰۲۱-۲۱۲۳۴ - ۲۱۲۴۱
                                    </li>
                                    <li className="border-r-2 border-orange-600 pr-2">
                                        آدرس ایمیل: sales@tntiran.com
                                    </li>
                                    <li className=" border-orange-600">
                                        شنبه تا چهارشنبه: 8 الی 16 - پنجشنبه: 8 الی 13
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* social links  */}
                        <div className="block md:hidden min-w-[200px] sm:w-full">
                            <h2
                                className="md:hidden sm:block -mt-5 dark:bg-[#404248] md:dark:bg-transparent p-2 flex items-center justify-between py-3 rounded-md px-2 bg-[#F6F6F6] text-base font-bold mb-4 cursor-pointer sm:mb-2 sm:block"
                                onClick={toggleSocials}
                            >
                                شبکه های اجتماعی
                                {isSocialOpen ? (<IoIosArrowUp />) : (<IoIosArrowDown />)}
                            </h2>

                            <div
                                className={`dark:bg-[#404248] md:dark:bg-transparent p-2 bg-[#F6F6F6] rounded-md p-5 ${isSocialOpen ? 'block' : 'hidden'} sm:block`}
                            >
                                <div className="flex space-x-4 items-center justify-between">
                                    <Link href={''}>
                                        <FaFacebook className="text-blue-500  mx-3 dark:bg-[#383A40] bg-white p-1 rounded-sm" size={30} />
                                    </Link>
                                    <Link href={''}>
                                        <FaTelegram className="text-blue-700 dark:bg-[#383A40] bg-white p-1 rounded-sm" size={30} />
                                    </Link>
                                    <Link href={''}>
                                        <FaWhatsapp className="text-green-700 dark:bg-[#383A40] bg-white p-1 rounded-sm" size={30} />
                                    </Link>
                                    <Link href={''}>
                                        <FaInstagram className="text-pink-700 dark:bg-[#383A40] bg-white p-1 rounded-sm" size={30} />
                                    </Link>
                                </div>


                            </div>
                        </div>


                    </div>
                </div>



                {/* About Section */}

                <div className="container order-1 my-0 sm:order-2 md:order-3 w-full md:h-[120px]  grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-between mb-6 mt-6 mx-auto px-4">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">

                        <div className="flex flex-col sm:flex-col md:flex-row md:max-w-[738px] items-center justify-center  md:justify-start space-x-3">
                            {/* cart icon svg */}
                            <svg width="49" height="39" viewBox="0 0 49 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3146_15493)">
                                    <path d="M26.4443 35.8865C26.4438 36.4053 26.2623 36.9079 25.9308 37.3086C25.5993 37.7093 25.1383 37.9833 24.6264 38.0839C24.1144 38.1846 23.5832 38.1056 23.1233 37.8605C22.6634 37.6153 22.3032 37.2192 22.1041 36.7396C21.9051 36.2601 21.8794 35.7267 22.0316 35.2305C22.1838 34.7342 22.5044 34.3058 22.9388 34.0182C23.3731 33.7306 23.8943 33.6017 24.4136 33.6534C24.9329 33.7051 25.418 33.9342 25.7864 34.3016C25.9963 34.5093 26.1625 34.7563 26.2754 35.0284C26.3883 35.3005 26.4457 35.5922 26.4443 35.8865Z" fill="#FA5A2A" />
                                    <path d="M37.7079 35.8865C37.7074 36.4053 37.526 36.9079 37.1945 37.3086C36.863 37.7093 36.402 37.9833 35.8901 38.0839C35.3781 38.1846 34.8469 38.1056 34.387 37.8605C33.9271 37.6153 33.5669 37.2192 33.3678 36.7396C33.1687 36.2601 33.1431 35.7267 33.2953 35.2305C33.4475 34.7342 33.7681 34.3058 34.2025 34.0182C34.6368 33.7306 35.158 33.6017 35.6773 33.6534C36.1965 33.7051 36.6817 33.9342 37.0501 34.3016C37.2599 34.5093 37.4261 34.7563 37.5391 35.0284C37.652 35.3005 37.7094 35.5922 37.7079 35.8865Z" fill="#FA5A2A" />
                                    <path d="M48.083 14.3533L44.1787 8.76367H40.293L45.2006 15.7899C45.4379 16.1266 45.5519 16.5341 45.5235 16.9443C45.4952 17.3545 45.3262 17.7427 45.0449 18.044C44.7519 18.3658 44.3498 18.5688 43.9156 18.6141L13.9461 18.6261L10.636 13.8584H6.5332L19.2264 32.1455H36.3262C40.4333 32.1455 42.8466 27.5566 40.5024 24.2037L39.1659 22.2951H43.9057C48.0129 22.2951 50.4272 17.705 48.083 14.3533ZM36.336 28.47C36.3009 28.47 20.7483 28.482 20.7483 28.482L16.5051 22.3452H35.3153L37.6177 25.6447C37.7967 25.9011 37.9059 26.1992 37.9345 26.5099C37.9632 26.8207 37.9105 27.1336 37.7814 27.4181C37.6523 27.7025 37.4514 27.949 37.1981 28.1333C36.9448 28.3176 36.6478 28.4336 36.336 28.47Z" fill="#FA5A2A" />
                                    <path d="M32.3176 12.4905L35.6408 17.2538H31.7573L30.1269 14.919C29.6028 14.1696 28.904 13.5573 28.0903 13.1344C27.2766 12.7115 26.3721 12.4906 25.454 12.4905H5.57593L5.53865 12.436L2.97852 8.77134C11.2334 8.77134 36.5508 8.7648 38.6187 8.77134L41.2248 12.4905H32.3176Z" fill="#FA5A2A" />
                                    <path d="M6.18732 7.39901H2.08233L0.876274 5.67134C-1.22556 2.44272 1.10543 0.124268 1.10543 0.124268L6.18732 7.39901Z" fill="#FA5A2A" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3146_15493">
                                        <rect width="49" height="38" fill="white" transform="translate(0 0.124268)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h1 className="text-xl md:text-2xl font-bold">شرکت خدمات حمل نقل ران اکسپرس</h1>
                            {/* social icons just show in mobile view  */}
                            <div className="block md:hidden min-w-[200px] sm:w-full ">

                                <div
                                    className='rounded-md pt-3'
                                >
                                    <div className="flex space-x-4 mb-2 items-center justify-between">
                                        <Link href={''}>
                                            <FaFacebook className="text-blue-500  mx-3  bg-[#F6F6F6]  dark:bg-[#383A40]    p-1 rounded-sm" size={30} />
                                        </Link>
                                        <Link href={''}>
                                            <FaTelegram className="text-blue-700 bg-[#F6F6F6] dark:bg-[#383A40]  p-1 rounded-sm" size={30} />
                                        </Link>
                                        <Link href={''}>
                                            <FaWhatsapp className="text-green-700 bg-[#F6F6F6] dark:bg-[#383A40]  p-1 rounded-sm" size={30} />
                                        </Link>
                                        <Link href={''}>
                                            <FaInstagram className="text-pink-700 bg-[#F6F6F6] dark:bg-[#383A40]  p-1 rounded-sm" size={30} />
                                        </Link>
                                    </div>


                                </div>
                            </div>

                        </div>


                        <p className="hidden sm:block w-full  mt-3 text-right text-[#4D4D4D] dark:text-white text-[14px]  md:text-[14px]">
                            پست سریع بین المللی تی‌ان‌تی ایران، از سال ۱۹۸۱ فعالیت خود را آغاز کرده و با بیش از چهل سال تجربه،
                            به عنوان یکی از پیشگامان خدمات پستی در ایران شناخته می‌شود. این شرکت دارای نمایندگی‌های فعال در
                            شهرهای مختلف ایران است و خدمات گسترده‌ای را ارائه می‌دهد که شامل راهکارهای نوین زنجیره حمل و نقل می‌شود.
                        </p>
                    </div>

                    {/* logos */}
                    <div className="hidden sm:flex container md:justify-end items-center gap-6 md:gap-14 w-full max-w-screen-xl  mx-auto ">

                        {/* feedex icon */}

                        <svg width="123" height="121" viewBox="0 0 123 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.270264" width="122.73" height="120.249" rx="6.08854" fill="white" />
                            <g clipPath="url(#clip0_3235_7870)">
                                <path d="M91.5688 47.9969L95.4992 52.3287L99.2832 47.9969H107.363L99.4667 56.8768L107.472 65.8293H99.0654L95.1719 61.4633L91.314 65.8293H83.197L91.1319 56.9138L83.197 47.9969H91.5688Z" fill="#FA5A2A" />
                                <path d="M83.1997 47.9956V54.0207H74.2129V59.5495H83.1997V65.8279H67.6084V37.7378H83.1997V43.9991H74.2129V47.9956H83.1997Z" fill="#FA5A2A" />
                                <path d="M61.0309 37.7377V49.2335H60.9583C59.5012 47.5599 57.6825 46.9779 55.572 46.9779C51.2482 46.9779 47.9909 49.9185 46.8479 53.8041C45.5426 49.5225 42.1796 46.8974 37.1933 46.8974C33.144 46.8974 29.946 48.7148 28.2778 51.6765V47.9955H19.9073V43.999H29.0419V37.7377H12.4463V65.8278H19.9073V54.0205H27.3446C27.1229 54.8877 27.0041 55.8168 27.0041 56.7975C27.0041 62.6562 31.481 66.7689 37.1933 66.7689C41.9975 66.7689 45.1638 64.5133 46.8373 60.402H40.4427C39.5782 61.6386 38.9223 62.0042 37.1933 62.0042C35.1884 62.0042 33.4594 60.2554 33.4594 58.182H46.4797C47.0446 62.8357 50.6702 66.8494 55.6446 66.8494C57.7907 66.8494 59.7559 65.7935 60.957 64.0117H61.0296V65.8304H67.6063V37.7377H61.0309ZM33.668 54.1037C34.0824 52.3193 35.4669 51.1538 37.1946 51.1538C39.0965 51.1538 40.4097 52.2836 40.7555 54.1037C40.9007 54.1037 33.668 54.1037 33.668 54.1037ZM57.0384 61.5515C54.6138 61.5515 53.1066 59.292 53.1066 56.9334C53.1066 54.4125 54.4172 51.988 57.0384 51.988C59.7559 51.988 60.8382 54.4125 60.8382 56.9334C60.8382 59.3236 59.6913 61.5515 57.0384 61.5515Z" fill="#2A007C" />
                                <path d="M67.6084 79.8739V69.8075H73.1702V70.5585H68.5257V74.2699H72.9735V75.0209H68.5257V79.1203H73.3774V79.8726L67.6084 79.8739Z" fill="#2A007C" />
                                <path d="M74.0409 79.8743L76.7532 76.2593L74.1808 72.8396H75.2235L77.3233 75.6337L79.381 72.8396H80.4236L77.8104 76.2593L80.5345 79.8743H79.4786L77.2257 76.8836L75.0849 79.8743H74.0409Z" fill="#2A007C" />
                                <path d="M82.2991 82.5122H81.4504V74.9377C81.4504 74.2421 81.4504 73.5347 81.4082 72.8378H82.2437L82.2714 73.895C82.798 73.0595 83.4936 72.6715 84.5375 72.6715C86.706 72.6715 87.6365 74.4639 87.6365 76.3539C87.6365 78.2465 86.706 80.0389 84.5375 80.0389C83.5635 80.0389 82.7993 79.664 82.2991 78.8563V82.5122ZM86.7338 76.3539C86.7338 74.8532 86.1068 73.3789 84.4399 73.3789C82.8693 73.3789 82.2991 74.6724 82.2991 76.3539C82.2991 78.0367 82.8693 79.3288 84.4399 79.3288C86.1082 79.3288 86.7338 77.8558 86.7338 76.3539Z" fill="#2A007C" />
                                <path d="M92.0002 73.4898C90.5959 73.4898 90.1076 74.6724 90.1076 75.8946V79.8726H89.2589V74.9073C89.2589 74.2263 89.2457 73.5334 89.218 72.8378H90.0548L90.1089 73.8528C90.526 73.0477 91.2229 72.6715 92.1533 72.6715C92.2787 72.6715 92.4173 72.6847 92.5427 72.6992V73.5479C92.3474 73.5175 92.1943 73.4898 92.0002 73.4898Z" fill="#2A007C" />
                                <path d="M93.5796 76.507C93.5796 78.0908 94.3292 79.3974 95.8721 79.3974C97.0666 79.3974 97.6236 78.6055 97.8321 77.8136H98.6385C98.2624 79.2865 97.3583 80.0389 95.76 80.0389C93.6192 80.0389 92.6729 78.4537 92.6729 76.4806C92.6729 74.4652 93.6601 72.6715 95.8708 72.6715C98.1093 72.6715 98.7072 74.6302 98.7072 76.507H93.5796ZM93.606 75.8682H97.8044C97.8044 74.4916 97.1524 73.3103 95.8167 73.3103C94.6077 73.309 93.7723 74.2263 93.606 75.8682Z" fill="#2A007C" />
                                <path d="M102.019 80.0389C100.574 80.0389 99.4905 79.3565 99.4905 77.8136H100.339C100.339 78.8695 101.033 79.3974 102.063 79.3974C103.022 79.3974 103.772 78.9381 103.772 77.9957C103.772 77.1471 102.897 76.924 101.98 76.6601C100.868 76.3407 99.6581 75.9922 99.6581 74.6301C99.6581 73.1163 100.923 72.6715 102.105 72.6715C103.466 72.6715 104.482 73.1981 104.523 74.6579H103.674C103.633 73.825 103.036 73.3525 102.131 73.3525C101.423 73.3525 100.561 73.6297 100.561 74.547C100.561 75.3825 101.423 75.6187 102.34 75.8682C103.454 76.173 104.676 76.507 104.676 77.8704C104.675 79.4542 103.453 80.0389 102.019 80.0389Z" fill="#2A007C" />
                                <path d="M107.9 80.0389C106.454 80.0389 105.37 79.3565 105.37 77.8136H106.219C106.219 78.8695 106.913 79.3974 107.944 79.3974C108.903 79.3974 109.653 78.9381 109.653 77.9957C109.653 77.1471 108.777 76.924 107.859 76.6601C106.748 76.3407 105.539 75.9922 105.539 74.6301C105.539 73.1163 106.803 72.6715 107.986 72.6715C109.347 72.6715 110.363 73.1981 110.404 74.6579H109.555C109.514 73.825 108.917 73.3525 108.012 73.3525C107.304 73.3525 106.442 73.6297 106.442 74.547C106.442 75.3825 107.304 75.6187 108.222 75.8682C109.335 76.173 110.558 76.507 110.558 77.8704C110.556 79.4542 109.332 80.0389 107.9 80.0389Z" fill="#2A007C" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3235_7870">
                                    <rect width="98.3755" height="44.7756" fill="white" transform="translate(12.4474 37.7365)" />
                                </clipPath>
                            </defs>
                        </svg>


                        {/* DhlIcon */}
                        <svg width="124" height="121" viewBox="0 0 124 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.540527" width="122.73" height="120.249" rx="6.08854" fill="white" />
                            <g clipPath="url(#clip0_3235_7853)">
                                <g clipPath="url(#clip1_3235_7853)">
                                    <path d="M12.026 66.1042H24.0529L23.3617 67.0719H12.026V66.1042Z" fill="#D40511" />
                                    <path d="M111.214 67.0719H96.491L97.2513 66.1042H111.283V67.0719H111.214Z" fill="#D40511" />
                                    <path d="M12.026 64.3071H25.4353L24.6749 65.2748H12.026V64.3071Z" fill="#D40511" />
                                    <path d="M12.026 62.5106H26.8177L26.0573 63.4783H12.026V62.5106Z" fill="#D40511" />
                                    <path d="M111.214 65.2748H97.8738L98.6341 64.3071H111.283V65.2748H111.214Z" fill="#D40511" />
                                    <path d="M99.9466 62.5106H111.213V63.4783H99.1863L99.9466 62.5106Z" fill="#D40511" />
                                    <path d="M25.0204 67.0721L31.3794 58.5703C31.3794 58.5703 38.4297 58.5703 39.2591 58.5703C40.1577 58.5703 40.1577 58.9159 39.6738 59.4689C39.2591 60.0218 38.4988 61.0586 38.0841 61.6116C37.8767 61.9572 37.462 62.441 38.7753 62.441C40.2268 62.441 49.3506 62.441 49.3506 62.441C48.5212 63.6852 45.6181 67.1412 40.5033 67.1412C36.3561 67.0721 25.0204 67.0721 25.0204 67.0721Z" fill="#D40511" />
                                    <path d="M61.4472 62.5106L57.9912 67.1417H48.9365L52.3925 62.5106H61.4472Z" fill="#D40511" />
                                    <path d="M74.649 62.5106L71.193 67.1417H62.0692L65.5252 62.5106H74.649Z" fill="#D40511" />
                                    <path d="M77.6211 62.5106C77.6211 62.5106 76.9299 63.4092 76.6535 63.8239C75.4784 65.3445 76.5152 67.1417 80.2477 67.1417C84.5331 67.1417 94.9011 67.1417 94.9011 67.1417L98.3571 62.5106H77.6211Z" fill="#D40511" />
                                    <path d="M29.5142 53.3168L26.3347 57.5331C26.3347 57.5331 42.7161 57.5331 43.6147 57.5331C44.5133 57.5331 44.5133 57.8787 44.0294 58.4317C43.6147 58.9846 42.8544 60.0214 42.4397 60.5744C42.2323 60.8509 41.8176 61.4038 43.1309 61.4038C44.5824 61.4038 50.1811 61.4038 50.1811 61.4038C50.1811 61.4038 51.3561 59.8832 52.2547 58.5699C53.568 56.8419 52.3929 53.2477 47.7619 53.2477C43.6147 53.3168 29.5142 53.3168 29.5142 53.3168Z" fill="#D40511" />
                                    <path d="M75.4096 61.4039H53.153L59.2355 53.3169H68.3593L64.9033 57.9479H68.9814L72.4374 53.3169H81.5612L75.4096 61.4039Z" fill="#D40511" />
                                    <path d="M94.1409 53.3169L88.0584 61.4039H78.3816L84.4641 53.3169H94.1409Z" fill="#D40511" />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_3235_7853">
                                    <rect width="98.3755" height="44.7756" fill="white" transform="translate(12.7177 37.7365)" />
                                </clipPath>
                                <clipPath id="clip1_3235_7853">
                                    <rect width="99.1871" height="13.824" fill="white" transform="translate(12.0271 53.3169)" />
                                </clipPath>
                            </defs>
                        </svg>



                        {/* TNT Icon */}

                        <svg width="124" height="121" viewBox="0 0 124 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.873413" width="122.667" height="120.249" rx="6.08854" fill="white" />
                            <g clipPath="url(#clip0_3235_7850)">
                                <path d="M69.0143 52.1286C69.0795 52.1279 69.1442 52.1402 69.2047 52.1649C69.2651 52.1895 69.32 52.226 69.3661 52.2722C69.4122 52.3183 69.4487 52.3732 69.4734 52.4336C69.498 52.494 69.5104 52.5587 69.5097 52.624V67.6652C69.5107 67.7254 69.4996 67.7851 69.477 67.8408C69.4545 67.8966 69.4209 67.9472 69.3784 67.9897C69.3359 68.0323 69.2852 68.0658 69.2295 68.0884C69.1737 68.1109 69.114 68.122 69.0539 68.121H65.9426C65.7417 68.0933 65.5545 68.0032 65.4075 67.8634C65.4075 67.8634 59.8191 60.1942 59.6407 59.996C59.4889 59.773 59.3626 59.5337 59.2642 59.2826V67.6652C59.2646 67.7269 59.2524 67.788 59.2284 67.8448C59.2044 67.9016 59.169 67.9529 59.1245 67.9955C59.08 68.0382 59.0273 68.0713 58.9695 68.0929C58.9117 68.1145 58.8502 68.124 58.7886 68.121H55.3008C55.2392 68.124 55.1776 68.1145 55.1199 68.0929C55.0621 68.0713 55.0094 68.0382 54.9648 67.9955C54.9203 67.9529 54.885 67.9016 54.861 67.8448C54.8369 67.788 54.8248 67.7269 54.8252 67.6652V52.624C54.8248 52.5623 54.8369 52.5012 54.861 52.4444C54.885 52.3877 54.9203 52.3364 54.9648 52.2937C55.0094 52.251 55.0621 52.2179 55.1199 52.1963C55.1776 52.1747 55.2392 52.1652 55.3008 52.1682H58.4121C58.6084 52.192 58.7904 52.2831 58.9273 52.4258C58.9273 52.4258 64.4563 59.9563 64.6941 60.2932C64.849 60.5177 64.9817 60.7566 65.0905 61.0067V52.624C65.0895 52.5639 65.1006 52.5041 65.1231 52.4484C65.1457 52.3926 65.1792 52.342 65.2217 52.2995C65.2643 52.257 65.3149 52.2234 65.3707 52.2009C65.4264 52.1783 65.4861 52.1672 65.5462 52.1682C65.5462 52.1286 68.7963 52.1286 69.0143 52.1286ZM93.5876 73.9076C86.0174 73.9076 79.8543 67.7247 79.8543 60.1347C79.8543 52.5249 86.0174 46.3419 93.5876 46.3419C101.138 46.3419 107.301 52.5249 107.301 60.1347C107.301 67.7247 101.138 73.9076 93.5876 73.9076ZM62.1773 73.9076C54.6072 73.9076 48.444 67.7247 48.444 60.1347C48.444 52.5249 54.6072 46.3419 62.1773 46.3419C69.7277 46.3419 75.8908 52.5249 75.8908 60.1347C75.8908 67.7247 69.7277 73.9076 62.1773 73.9076ZM30.7671 73.9076C23.1969 73.9076 17.0338 67.7247 17.0338 60.1347C17.0338 52.5249 23.1969 46.3419 30.7671 46.3419C38.3174 46.3419 44.4806 52.5249 44.4806 60.1347C44.4608 67.7247 38.2976 73.9076 30.7671 73.9076ZM93.5876 42.3389C86.7704 42.3389 80.8451 46.2429 77.8527 51.9304C76.3678 49.0417 74.1155 46.6183 71.3431 44.9262C68.5708 43.2341 65.3856 42.3389 62.1377 42.3389C58.8897 42.3389 55.7046 43.2341 52.9323 44.9262C50.1599 46.6183 47.9076 49.0417 46.4227 51.9304C44.9317 49.0424 42.6752 46.6202 39.9 44.9285C37.1249 43.2368 33.9379 42.341 30.6878 42.3389C20.9972 42.3389 13.0505 50.3252 13.0505 60.1347C13.0505 69.9244 20.9972 77.9107 30.7671 77.9107C37.5644 77.9107 43.5095 74.0067 46.4821 68.3192C47.9709 71.2047 50.2241 73.6255 52.9956 75.317C55.7671 77.0086 58.9502 77.9058 62.1971 77.9107C69.0143 77.9107 74.9396 74.0067 77.932 68.3192C79.4187 71.2064 81.6715 73.6286 84.4434 75.3204C87.2154 77.0122 90.3996 77.9084 93.647 77.9107C103.417 77.9107 111.364 69.9244 111.364 60.1347C111.304 50.3252 103.338 42.3389 93.5876 42.3389ZM24.1085 52.4258C24.0484 52.4248 23.9887 52.4359 23.9329 52.4585C23.8772 52.481 23.8265 52.5146 23.784 52.5571C23.7415 52.5996 23.708 52.6503 23.6854 52.706C23.6628 52.7618 23.6517 52.8215 23.6527 52.8816V55.874C23.6517 55.9341 23.6628 55.9938 23.6854 56.0496C23.708 56.1053 23.7415 56.156 23.784 56.1985C23.8265 56.241 23.8772 56.2746 23.9329 56.2971C23.9887 56.3197 24.0484 56.3308 24.1085 56.3298H27.7153C27.9476 56.3278 28.1795 56.3079 28.4089 56.2703V68.0616C28.4079 68.1217 28.419 68.1814 28.4415 68.2372C28.4641 68.2929 28.4976 68.3436 28.5401 68.3861C28.5827 68.4286 28.6333 68.4621 28.6891 68.4847C28.7448 68.5072 28.8045 68.5184 28.8646 68.5174H32.5705C32.6306 68.5184 32.6903 68.5072 32.7461 68.4847C32.8018 68.4621 32.8524 68.4286 32.895 68.3861C32.9375 68.3436 32.971 68.2929 32.9936 68.2372C33.0161 68.1814 33.0272 68.1217 33.0263 68.0616V56.2703C33.3156 56.3063 33.6067 56.3262 33.8982 56.3298H37.3464C37.4065 56.3308 37.4662 56.3197 37.522 56.2971C37.5777 56.2746 37.6284 56.241 37.6709 56.1985C37.7134 56.156 37.747 56.1053 37.7695 56.0496C37.7921 55.9938 37.8032 55.9341 37.8022 55.874V52.8816C37.8032 52.8215 37.7921 52.7618 37.7695 52.706C37.747 52.6503 37.7134 52.5996 37.6709 52.5571C37.6284 52.5146 37.5777 52.481 37.522 52.4585C37.4662 52.4359 37.4065 52.4248 37.3464 52.4258H24.1085ZM100.226 52.4258C100.286 52.4248 100.346 52.4359 100.402 52.4585C100.458 52.481 100.508 52.5146 100.551 52.5571C100.593 52.5996 100.627 52.6503 100.649 52.706C100.672 52.7618 100.683 52.8215 100.682 52.8816V55.874C100.683 55.9341 100.672 55.9938 100.649 56.0496C100.627 56.1053 100.593 56.156 100.551 56.1985C100.508 56.241 100.458 56.2746 100.402 56.2971C100.346 56.3197 100.286 56.3308 100.226 56.3298H96.7979C96.4998 56.3267 96.2021 56.3068 95.9062 56.2703V68.0616C95.9072 68.1217 95.8961 68.1814 95.8735 68.2372C95.8509 68.2929 95.8174 68.3436 95.7749 68.3861C95.7324 68.4286 95.6817 68.4621 95.626 68.4847C95.5702 68.5072 95.5105 68.5184 95.4504 68.5174H91.7446C91.6844 68.5184 91.6247 68.5072 91.569 68.4847C91.5132 68.4621 91.4626 68.4286 91.4201 68.3861C91.3775 68.3436 91.344 68.2929 91.3214 68.2372C91.2989 68.1814 91.2878 68.1217 91.2888 68.0616V56.2703C91.0594 56.3079 90.8276 56.3278 90.5952 56.3298H86.9884C86.9283 56.3308 86.8686 56.3197 86.8129 56.2971C86.7571 56.2746 86.7065 56.241 86.6639 56.1985C86.6214 56.156 86.5879 56.1053 86.5653 56.0496C86.5428 55.9938 86.5317 55.9341 86.5326 55.874V52.8816C86.5317 52.8215 86.5428 52.7618 86.5653 52.706C86.5879 52.6503 86.6214 52.5996 86.6639 52.5571C86.7065 52.5146 86.7571 52.481 86.8129 52.4585C86.8686 52.4359 86.9283 52.4248 86.9884 52.4258H100.226Z" fill="#FA5A2A" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3235_7850">
                                    <rect width="98.313" height="35.5718" fill="white" transform="translate(13.0505 42.3384)" />
                                </clipPath>
                            </defs>
                        </svg>





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
                                <FaFacebook className="text-blue-500 dark:text-[#fff]  mx-3 dark:bg-[#404248] bg-[#F6F6F6] p-1 rounded-[7px]" size={40} />
                            </Link>
                            <Link href={''}>
                                <FaTelegram className="text-blue-700 dark:text-[#fff] dark:bg-[#404248] bg-[#F6F6F6] p-1  rounded-[7px]" size={40} />
                            </Link>
                            <Link href={''}>
                                <FaWhatsapp className="text-green-700 dark:text-[#fff] dark:bg-[#404248] bg-[#F6F6F6] p-1  rounded-[7px]" size={40} />
                            </Link>
                            <Link href={''}>
                                <FaInstagram className="text-pink-700 dark:text-[#fff] dark:bg-[#404248] bg-[#F6F6F6] p-1  rounded-[7px]" size={40} />
                            </Link>
                        </div>


                    </div>
                </div>
            </div>


        </footer>


    )
}
