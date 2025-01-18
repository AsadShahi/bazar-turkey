'use client'
import React from "react";
import { CiCamera } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import PhoneInputComponent from "../../module/phoneNumberInput/PhoneInputForm";

export default function PassengerForm() {
  return (
    <div className="container sm:w-full lg:w-[1244px] h-auto sm:h-auto">
      <div className="container flex items-center mt-5 justify-between sm:w-full lg:w-[1244px]">
        <p className="font-bold flex items-center border-r-4 border-orange-700 pr-1 mr-1 text-sm sm:text-base md:text-lg lg:text-xl">
          فرم ثبت نام برای دریافت کمک هزینه ارسال بار
        </p>

        <button className="flex items-center justify-between py-2.5 bg-slate-700 rounded-md px-3 text-white text-xs sm:text-sm md:text-base lg:text-lg">
          <CiBookmarkCheck className="mr-2" />
          <p className='text-sm'> دفتر مسافران
          </p>
          <IoIosArrowBack className="ml-2" />
        </button>
      </div>

      <section className="bg-white container mt-5 border-t-2 py-8">

        <div className="container w-full mx-auto px-4 flex flex-col lg:flex-row gap-4">

          {/* Image Section */}
          <div className="w-full sm:w-[252px] h-auto sm:h-[241.14px] border-dashed border-2 border-slate-500 rounded-md flex items-center justify-center flex-col p-4">
            <div className="w-full sm:w-[164px] h-auto flex flex-col items-center justify-center text-center">
              <div className="w-[50px] sm:w-[60px] h-[50px] flex justify-center items-center">
                <CiCamera size={30} />
              </div>
              <p className="mt-2 text-xs sm:text-sm">تصویر مسافر (عکس سلفی)</p>
              <button className="bg-orange-700 py-2 px-4 text-xs sm:text-sm text-white rounded-sm mt-4 hover:bg-orange-800">
                گرفتن عکس
              </button>
            </div>
          </div>


          {/* Form Section */}
          <div className="w-full">
            <form className="w-full  dark:bg-slate-800  rounded-lg p-6 space-y-6">

              <div className="w-full mb-1 border-b-2 pb-2 flex items-center">
                <p className="w-[110px] h-[28px] border-r-4 border-orange-700 text-center font-bold">مرحله اول</p>
                <p className="text-lg h-[28px] text-center text-slate-600 border-r-2 pr-3">اطلاعات مسافر</p>
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

              {/* Buttons */}
              <div className="flex items-center justify-between mt-6">
                <button
                  type="button"
                  className="py-2 px-4 bg-gray-500 text-white font-bold rounded-md"
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
    </div>

  );
}
