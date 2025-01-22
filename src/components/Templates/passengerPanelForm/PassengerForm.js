'use client'
import React from "react";
import { CiCamera } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import PhoneInputComponent from "../../module/phoneNumberInput/PhoneInputForm";

export default function PassengerForm() {
  return (
    <>
    <div className="flex items-center mt-5 justify-between md:mx-4 md:px-4 sm:px-6 md:px-12 lg:px-24 space-x-4">
                <p className="font-bold flex items-center border-r-4 border-orange-700 pr-2 mr-8 text-sm sm:text-base md:text-lg lg:text-xl">
                    فرم ثبت نام برای دریافت کمک هزینه ارسال بار
                </p>

                <button className="flex items-center justify-between py-2.5 bg-slate-700 rounded-md px-3 text-white text-xs sm:text-sm md:text-base lg:text-lg">
                    <CiBookmarkCheck className="mr-2" />
                      <p className='text-sm'> دفتر مسافران
                      </p>
                      <IoIosArrowBack className="ml-2" />
                </button>
            </div>

    <section className="bg-white container mt-5 border-t-4 py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-4">
        {/* Image Section */}
        <div className="w-full lg:w-1/4 border-dotted border-2 border-indigo-600 rounded-md flex items-center justify-center flex-col h-44 bg-[#F6F6F6]">
          <CiCamera size={40} />
          <p className="mt-2">تصویر مسافر (عکس سلفی)</p>
          <button className="bg-orange-700 py-2 px-4 text-sm text-white rounded-sm mt-4 hover:bg-orange-800">گرفتن عکس</button>
        </div>



        {/* Form Section */}
        <div className="w-full lg:w-3/4">
          <form className="bg-gray-50 dark:bg-[#383A40] shadow rounded-lg p-6 space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label  className="block   dark:text-white text-sm font-medium text-gray-700">نام و نام خانوادگی مسافر:</label>
                <input
                  type="text"
                  placeholder="ارمان میمندی"
                  className=" block w-full  focus:outline-0 px-2  py-1.5 border border-gray-300 rounded-md shadow-sm"
                />
              </div>

              <div>
                <label  className="block dark:text-whit text-sm font-medium text-gray-700">نسبت شما با مسافر:</label>
                <input
                  type="text"
                  placeholder="خودم"
                  className="  focus:outline-0 px-2  py-1.5  block w-full border border-gray-300 rounded-md shadow-sm "
                />
              </div>
              <div>
                <label className="block  dark:text-whit text-sm font-medium text-gray-700">شغل مسافر:</label>
                <input
                  type="text"
                  placeholder="ازاد"
                  className="  focus:outline-0 px-2  py-1.5  block w-full border border-gray-300 rounded-md shadow-sm "
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


              <div>
                <label  className="block  dark:text-whit text-sm font-medium text-gray-700">آدرس در ایران:</label>
                <input
                  type="text"
                  placeholder="آدرس: تهران، خیابان نلسون ماندلا (جردن سابق)"
                  className=" block  focus:outline-0 px-2  py-1.5  w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>

              <div>
                <label  className="block text-sm dark:text-whit font-medium text-gray-700"> شماره ثابت داخل ایران:</label>
                <PhoneInputComponent />
              </div>


            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label  className="block  dark:text-white text-sm font-medium text-gray-700">آدرس محل سکونت خارج ایران:</label>
                <input
                  type="text"
                 
                  placeholder="آدرس: تهران، خیابان نلسون ماندلا (جردن سابق)"
                  className=" block w-full border border-gray-300 rounded-md shadow-sm  focus:outline-0 px-2  py-1.5 "
                />
              </div>
              <div>

                <label  className="block dark:text-white text-sm font-medium text-gray-700">شماره همراه خارج ایران:
                </label>

                <PhoneInputComponent />
              </div>



            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

              <div>
                <label  className="block dark:text-white text-sm font-medium text-gray-700">نام و نام خانوادگی فرد نزدیک:</label>
                <input
                  type="text"
            
                  placeholder="نام و نام خانوادگی"
                  className=" block w-full border border-gray-300 rounded-md shadow-sm focus:outline-0 px-2 py-1.5"
                />
              </div>

              <div>
                <label  className="block dark:text-white text-sm font-medium text-gray-700">نسبت شخص با مسافر:</label>
                <input
                  type="text"
                  placeholder="پدر"
                 
                  className=" block w-full border border-gray-300 rounded-md shadow-sm focus:outline-0 px-2 py-1.5"
                />
              </div>

              <div className="sm:col-span-2 md:col-span-1">
                <label className="block text-sm dark:text-white font-medium text-gray-700">شماره تماس:</label>
                <PhoneInputComponent />
              </div>

            </div>

            {/* Row 5 */}
            <div>
              <label className="block text-sm dark:text-white font-medium text-gray-700">آدرس فرد نزدیک:</label>
              <input
                type="text"
              
                placeholder="آدرس: تهران، خیابان نلسون ماندلا (جردن سابق)"
                className=" block w-full border border-gray-300 rounded-md shadow-sm  focus:outline-0 px-2  py-1.5 "
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between mt-6">
              <button
                type="button"
                className="py-2 px-4 bg-gray-500 text-white font-bold rounded-md "
              >
                مرحله قبل
              </button>

              <button
                type="submit"
                className="py-2 px-4 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-400"
              >
                مرحله بعد
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
    
    </>
  );
}
