'use client'
import React from "react";
import { CiCamera } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import PhoneInputComponent from "../../module/phoneNumberInput/PhoneInputForm";
import { IoIosArrowForward } from "react-icons/io";


export default function PassengerForm() {
  return (
    <div className="container sm:w-full lg:w-[1244px] h-auto sm:h-auto">

      <div className="container flex  items-center mt-5 justify-between sm:w-full lg:w-[1244px]">
        <p className="hidden sm:block font-bold flex items-center dark:text-white border-r-4 border-orange-700 pr-1 mr-1 text-sm sm:text-base md:text-sm lg:text-xl">
          فرم ثبت نام برای دریافت کمک هزینه ارسال بار
        </p>
        <p className="block md:hidden font-bold flex items-center dark:text-white border-r-4 border-orange-700 pr-1 mr-3 text-sm sm:text-base md:text-lg lg:text-xl">
          فرم ثبت نام
        </p>

        <button className="flex items-center justify-between py-2.5 ml-2 dark:bg-slate-800 bg-slate-700 rounded-md px-3 text-white text-xs sm:text-sm md:text-base lg:text-lg">
          <CiBookmarkCheck className="hidden sm:block mr-2 " />
          <p className='text-sm whitespace-nowrap'> دفتر مسافران
          </p>
          <IoIosArrowBack className="ml-2" />
        </button>
      </div>

  
{/* main content form and image */}
        <div className="container bg-white dark:bg-slate-700   border-t-2 mt-5 py-8 dark:text-white  w-full mx-auto px-4 flex flex-col lg:flex-row gap-4">

          {/* Image Section */}
          <div className="w-full   h-[241px] sm:h-[241.14px]  sm:w-[252px] border-dashed border-2 border-slate-500 rounded-md flex items-center justify-center flex-col p-4">
            <div className="w-full sm:w-[164px] h-auto md:w-[252px] flex flex-col items-center justify-center text-center">
              <div className="w-[50px] sm:w-[60px] h-[50px] flex justify-center items-center">
                <CiCamera size={30} />
              </div>
              <p className="mt-2 text-xs sm:text-sm">تصویر مسافر (عکس سلفی)</p>
              <button className="bg-orange-700 dark:bg-slate-800 py-2 px-4 text-xs sm:text-sm text-white rounded-sm mt-4 hover:bg-orange-800">
                گرفتن عکس
              </button>
            </div>
          </div>


          {/* Form Section */}
          <div className="w-full">
            <form className="w-full  dark:bg-slate-700  rounded-lg p-6 space-y-6">

              <div className="w-full mb-1 border-b-2 pb-2 flex items-center">
                <p className="w-[110px] h-[28px] border-r-4 border-orange-700 text-center font-bold">مرحله اول</p>
                <p className="text-lg dark:text-white h-[28px] text-center text-slate-600 border-r-2 pr-3">اطلاعات مسافر</p>
              </div>

              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="w-full sm:w-[300px] max-w-md mx-auto h-[97px]">
                  <label className="block text-sm font-bold text-gray-700 dark:text-white mb-2">
                    نام و نام خانوادگی مسافر:
                  </label>
                  <input
                    type="text"
                    placeholder="ارمان میمندی"
                    className="w-full h-[56px] px-4 focus:outline-none border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>
 
 {/* row */}
                <div className="w-full sm:w-[300px] max-w-md mx-auto h-[97px]">
                  <label className="block text-sm font-bold text-gray-700 dark:text-white mb-2">
                    نسبت شما با مسافر:
                  </label>
                  <input
                    type="text"
                    placeholder="خودم"
                    className="w-full h-[56px] px-4 focus:outline-none border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>

                <div className="w-full sm:w-[300px] max-w-md mx-auto h-[97px]">
                  <label className="block text-sm font-bold text-gray-700 dark:text-white mb-2">
                    شغل مسافر:
                  </label>
                  <input
                    type="text"
                    placeholder="ازاد"
                    className="w-full h-[56px] px-4 focus:outline-none border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>
              </div>




              {/* Row 2 */}
              <div className="flex flex-col items-center  sm:flex-row gap-4">


                <div className="w-full sm:w-[706px] md:w-[706px] h-[97px]">
                  <label className="block text-sm font-bold text-gray-700 dark:text-white mb-2">
                    آدرس در ایران:
                  </label>
                  <input
                    type="text"
                    placeholder="آدرس: تهران، خیابان نلسون ماندلا (جردن سابق)"
                    className="w-full h-[56px] px-4 focus:outline-none border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>

                <div className="w-full sm:w-[220px] h-[97px]  items-center justify-end">
                  <label className="block text-sm font-bold text-gray-700 dark:text-white mb-2">
                    شماره ثابت داخل ایران:
                  </label>
                  <PhoneInputComponent />
                </div>

              </div>






              {/* Row 3 */}
              <div className="flex flex-col items-center  sm:flex-row gap-4">


                <div className="w-full sm:w-[706px] md:w-[706px] h-[97px]">
                  <label className="block text-sm font-bold text-gray-700 dark:text-white mb-2">
                    آدرس محل سکونت خارج ایران:
                  </label>
                  <input
                    type="text"
                    placeholder="آدرس: تهران، خیابان نلسون ماندلا (جردن سابق)"
                    className="w-full h-[56px] px-4 focus:outline-none border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>

                <div className="w-full sm:w-[220px] h-[97px]  items-center justify-end">
                  <label className="block text-sm font-bold text-gray-700 dark:text-white mb-2">
                    شماره همراه خارج ایران:
                  </label>
                  <PhoneInputComponent />
                </div>

              </div>


              {/* Row 4 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="w-full sm:w-[300px] max-w-md mx-auto h-[97px]">
                  <label className="block text-sm font-bold text-gray-700 dark:text-white mb-2">
                    نام و نام خانوادگی فرد نزدیک:
                  </label>
                  <input
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    className="w-full h-[56px] px-4 focus:outline-none border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>

                <div className="w-full sm:w-[300px] max-w-md mx-auto h-[97px]">
                  <label className="block text-sm font-bold text-gray-700 dark:text-white mb-2">
                    نسبت شخص با مسافر:
                  </label>
                  <input
                    type="text"
                    placeholder="پدر"
                    className="w-full h-[56px] px-4 focus:outline-none border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                </div>

                <div className="sm:col-span-2 md:col-span-1 w-full sm:w-[300px] max-w-md mx-auto h-[97px]">
                  <label className="block text-sm font-bold text-gray-700 dark:text-white mb-2">
                    شماره تماس:
                  </label>
                  <PhoneInputComponent />
                </div>
              </div>

              {/* Row 5 */}
              <div className="w-full mx-auto h-[97px]">
                <label className="block text-sm font-bold text-gray-700 dark:text-white mb-2">
                  آدرس فرد نزدیک:
                </label>
                <input
                  type="text"
                  placeholder="آدرس: تهران، خیابان نلسون ماندلا (جردن سابق)"
                  className="w-full h-[56px] px-4 focus:outline-none border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
              </div>



              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="save-info"
                  className="h-5 w-5 border-2 border-gray-300 dark:bg-slate-200 rounded-md 
                         checked:bg-orange-700 checked:border-orange-700 
                         dark:checked:bg-slate-800 dark:checked:border-slate-800 
                        focus:ring-0"
                />
                <label
                  htmlFor="save-info"
                  className="text-sm font-bold px-2 text-gray-700 dark:text-white"
                >
                  ذخیره اطلاعات مسافر
                </label>
              </div>



              {/* Buttons previes and next */}
              <div className="flex  items-center justify-between   sm:justify-between md:justify-start mt-6">
                <button
                  type="button"
                  className="py-3 px-4 dark:bg-slate-800 bg-gray-100 flex items-center text-slate-300 font-bold rounded-md"
                >
                  <IoIosArrowForward className="ml-2" /> مرحله قبل
                </button>

                <button
                  type="submit"
                  className="flex items-center dark:bg-slate-800 py-3 px-4 mx-4 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-400"
                >
                  مرحله بعد <IoIosArrowBack className="mr-2" />
                </button>
              </div>

            </form>
          </div>
        </div>
        
    
      
    </div>

  );
}
