'use client'
import React from "react";
import { CiCamera } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import PhoneInputComponent from "../../module/phoneNumberInput/PhoneInputForm";
import { IoIosArrowForward } from "react-icons/io";


export default function PassengerForm() {
  return (
    <div className="container  sm:w-full md:max-w-[1244px]  max-h-auto md:max-h-[886px]">

      <div className="container flex  items-center mt-5 justify-between px-auto sm:w-full  lg:w-[1244px]">
        <p className="hidden sm:block font-bold flex items-center dark:text-white border-r-4 border-orange-700 pr-1 mr-1 text-sm sm:text-base md:text-sm lg:text-xl">
          فرم ثبت نام برای دریافت کمک هزینه ارسال بار
        </p>
        <p className="block md:hidden font-bold flex items-center dark:text-white border-r-4 border-orange-700 pr-1 mr-3 text-sm sm:text-base md:text-lg lg:text-xl">
          فرم ثبت نام
        </p>

        <button className="flex items-center justify-between py-2.5 ml-2 dark:bg-[#383A40] bg-slate-700 rounded-md px-3 text-white text-xs sm:text-sm md:text-base lg:text-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.4 22H5.6C4.71634 22 4 21.2538 4 20.3333M4 20.3333C4 19.4129 4.71634 18.6667 5.6 18.6667H19.4667C19.7612 18.6667 20 18.4179 20 18.1111V2.55556C20 2.24873 19.7612 2 19.4667 2H6.66667C5.19391 2 4 3.24366 4 4.77778V20.3333ZM16.8 2.00001V9.58538C16.8 9.75278 16.5871 9.84002 16.4557 9.72648L14.6899 8.20058C14.3756 7.92899 13.8911 7.92899 13.5768 8.20058L11.8109 9.72648C11.6795 9.84002 11.4667 9.75278 11.4667 9.58538V2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <p className='text-sm whitespace-nowrap'> دفتر مسافران
          </p>
          <IoIosArrowBack className="ml-2" />
        </button>
      </div>


      {/* main content form and image */}
      <div className="container bg-white dark:bg-[#25272C]   border-t mt-5 py-8 dark:text-white  w-full md:max-w-[1244px] mx-auto flex flex-col justify-center lg:flex-row gap-4 md:gap-[38px]">

        {/* Image Section */}
        <div className=" h-[241.14px]  md:w-[252px] w-[343px] mx-auto md:h-[241px] border-dashed border border-[#D8D8DA] rounded-[13px] flex items-center justify-center  flex-col " >
              <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.2975 21.875C34.2975 23.6008 33.3648 25 32.2142 25C31.0636 25 30.1309 23.6008 30.1309 21.875C30.1309 20.1491 31.0636 18.75 32.2142 18.75C33.3648 18.75 34.2975 20.1491 34.2975 21.875Z" stroke="currentColor" fill="#4D4D4D" />
                <path d="M21.7975 21.875C21.7975 23.6008 20.8648 25 19.7142 25C18.5636 25 17.6309 23.6008 17.6309 21.875C17.6309 20.1491 18.5636 18.75 19.7142 18.75C20.8648 18.75 21.7975 20.1491 21.7975 21.875Z" stroke="currentColor" fill="#4D4D4D" />
                <path fillRule="evenodd" clipRule="evenodd" d="M21.68 2.60419H21.7975C22.6604 2.60419 23.36 3.30375 23.36 4.16669C23.36 5.02963 22.6604 5.72919 21.7975 5.72919C17.825 5.72919 15.0028 5.7325 12.8618 6.02035C10.7658 6.30215 9.55817 6.83063 8.67649 7.71231C7.7948 8.594 7.26632 9.8016 6.98453 11.8976C6.69667 14.0386 6.69336 16.8608 6.69336 20.8334C6.69336 21.6963 5.9938 22.3959 5.13086 22.3959C4.26792 22.3959 3.56836 21.6963 3.56836 20.8334V20.7158C3.56832 16.8871 3.5683 13.8546 3.8874 11.4812C4.21578 9.03869 4.90769 7.06171 6.46678 5.5026C8.02588 3.94352 10.0029 3.2516 12.4454 2.92323C14.8188 2.60413 17.8513 2.60415 21.68 2.60419ZM39.0667 6.02035C36.9256 5.7325 34.1034 5.72919 30.1309 5.72919C29.2679 5.72919 28.5684 5.02963 28.5684 4.16669C28.5684 3.30375 29.2679 2.60419 30.1309 2.60419H30.2484C34.0771 2.60415 37.1096 2.60413 39.4829 2.92323C41.9254 3.2516 43.9025 3.94352 45.4617 5.5026C47.0207 7.06171 47.7125 9.03869 48.0411 11.4812C48.36 13.8546 48.36 16.8872 48.36 20.7158V20.8334C48.36 21.6963 47.6604 22.3959 46.7975 22.3959C45.9346 22.3959 45.235 21.6963 45.235 20.8334C45.235 16.8608 45.2317 14.0386 44.9438 11.8976C44.6621 9.8016 44.1336 8.594 43.2519 7.71231C42.3702 6.83063 41.1625 6.30215 39.0667 6.02035ZM5.13086 27.6042C5.9938 27.6042 6.69336 28.3038 6.69336 29.1667C6.69336 33.1392 6.69667 35.9615 6.98453 38.1025C7.26632 40.1984 7.7948 41.4061 8.67649 42.2877C9.55817 43.1694 10.7658 43.6979 12.8618 43.9796C15.0028 44.2675 17.825 44.2709 21.7975 44.2709C22.6604 44.2709 23.36 44.9704 23.36 45.8334C23.36 46.6963 22.6604 47.3959 21.7975 47.3959H21.68C17.8513 47.3959 14.8188 47.3959 12.4454 47.0769C10.0029 46.7484 8.02588 46.0565 6.46678 44.4975C4.90769 42.9384 4.21578 40.9613 3.8874 38.5188C3.5683 36.1454 3.56832 33.1129 3.56836 29.2842V29.1667C3.56836 28.3038 4.26792 27.6042 5.13086 27.6042ZM46.7975 27.6042C47.6604 27.6042 48.36 28.3038 48.36 29.1667V29.2842C48.36 33.1129 48.36 36.1454 48.0411 38.5188C47.7125 40.9613 47.0207 42.9384 45.4617 44.4975C43.9025 46.0565 41.9254 46.7484 39.4829 47.0769C37.1096 47.3959 34.0771 47.3959 30.2484 47.3959H30.1309C29.2679 47.3959 28.5684 46.6963 28.5684 45.8334C28.5684 44.9704 29.2679 44.2709 30.1309 44.2709C34.1034 44.2709 36.9256 44.2675 39.0667 43.9796C41.1625 43.6979 42.3702 43.1694 43.2519 42.2877C44.1336 41.4061 44.6621 40.1984 44.9438 38.1025C45.2317 35.9615 45.235 33.1392 45.235 29.1667C45.235 28.3038 45.9346 27.6042 46.7975 27.6042ZM18.4589 32.4029C18.9728 31.7096 19.9514 31.5642 20.6446 32.0781C22.1621 33.2027 23.9936 33.8542 25.9642 33.8542C27.9348 33.8542 29.7663 33.2027 31.2838 32.0781C31.9771 31.5642 32.9557 31.7096 33.4694 32.4029C33.9834 33.0963 33.8379 34.0748 33.1446 34.5886C31.1188 36.0902 28.6413 36.9792 25.9642 36.9792C23.2871 36.9792 20.8096 36.0902 18.7838 34.5886C18.0905 34.0748 17.9451 33.0963 18.4589 32.4029Z" stroke="currentColor" fill="#4D4D4D" />
              </svg>
           
            <p className="mt-2 text-xs sm:text-sm">تصویر مسافر (عکس سلفی)</p>
            <button className="bg-[#FA5A2A] dark:bg-[#383A40] py-2 px-4 text-xs sm:text-sm text-white rounded-[5px] mt-4 hover:bg-orange-800">
              گرفتن عکس
            </button>

        </div>


        {/* Form Section */}

        <form className="w-full sm:mb-0  md:max-w-[950px]  md:max-h-[770px] dark:bg-[#25272C]  rounded-lg p-6 space-y-6">
          {/* first step */}
          <div className="w-full mb-1 border-b pb-2 flex items-center">
            <p className="w-[110px] h-[28px] border-r-4 border-orange-700 text-center font-bold">مرحله اول</p>
            <p className="text-lg dark:text-white h-[28px] text-center text-slate-600 border-r-2 pr-3">اطلاعات مسافر</p>
          </div>


          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-[16px]">
            <div className="w-full md:max-w-[306px] md:max-h-[97px] max-w-md mx-auto h-[97px]">
              <label className="block text-[12px] md:text-[16px]  font-bold text-gray-700 dark:text-white mb-2">
                نام و نام خانوادگی مسافر:
              </label>
              <input
                type="text"
                placeholder="ارمان میمندی"
                className="w-full h-[56px] px-4 focus:outline-none border border-gray-300 rounded-md shadow-sm dark:bg-[#25272C] dark:text-white dark:border-gray-600"
              />
            </div>

            {/* row */}
            <div className="w-full  md:max-w-[306px] md:max-h-[97px] max-w-md mx-auto h-[97px]">
              <label className="block text-sm font-bold text-gray-700 dark:text-white mb-2">
                نسبت شما با مسافر:
              </label>
              <input
                type="text"
                placeholder="خودم"
                className="w-full h-[56px] px-4 focus:outline-none border border-gray-300 rounded-md shadow-sm dark:bg-[#25272C] dark:text-white dark:border-gray-600"
              />
            </div>

            <div className="w-full  md:max-w-[306px] md:max-h-[97px] max-w-md mx-auto h-[97px]">
              <label className="block text-sm font-bold text-gray-700 dark:text-white mb-2">
                شغل مسافر:
              </label>
              <input
                type="text"
                placeholder="ازاد"
                className="w-full h-[56px] px-4 focus:outline-none border border-gray-300 rounded-md shadow-sm dark:bg-[#25272C] dark:text-white dark:border-gray-600"
              />
            </div>
          </div>



          {/* Row 2 */}
          <div className="flex flex-col items-center  sm:flex-row gap-4 md:gap-[24px]">


            <div className="w-full sm:w-[706px] md:w-[706px] md:h-[97px]">
              <label className="block text-[12px] md:text-[16px] font-bold text-gray-700 dark:text-white mb-2">
                آدرس در ایران:
              </label>
              <input
                type="text"
                placeholder="آدرس: تهران، خیابان نلسون ماندلا (جردن سابق)"
                className="w-full h-[56px] px-4 focus:outline-none border border-gray-300 rounded-md shadow-sm dark:bg-[#25272C] dark:text-white dark:border-gray-600"
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
          <div className="flex flex-col items-center  sm:flex-row gap-4 md:gap-[24px]">


            <div className="w-full sm:w-[706px] md:w-[706px] h-[97px]">
              <label className="block text-[12px] md:text-[16px] font-bold text-gray-700 dark:text-white mb-2">
                آدرس محل سکونت خارج ایران:
              </label>
              <input
                type="text"
                placeholder="آدرس: تهران، خیابان نلسون ماندلا (جردن سابق)"
                className="w-full h-[56px] px-4 focus:outline-none border border-gray-300 rounded-md shadow-sm dark:bg-[#25272C] dark:text-white dark:border-gray-600"
              />
            </div>

            <div className="w-full sm:w-[220px] h-[97px]  items-center justify-end">
              <label className="block text-[12px] md:text-[16px] font-bold text-gray-700 dark:text-white mb-2">
                شماره همراه خارج ایران:
              </label>
              <PhoneInputComponent />
            </div>

          </div>


          {/* Row 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-[16px]">
            <div className="w-full  md:max-w-[306px] md:max-h-[97px] max-w-md mx-auto h-[97px]">
              <label className="block text-[12px] md:text-[16px] font-bold text-gray-700 dark:text-white mb-2">
                نام و نام خانوادگی فرد نزدیک:
              </label>
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className="w-full h-[56px] px-4 focus:outline-none border border-gray-300 rounded-md shadow-sm dark:bg-[#25272C] dark:text-white dark:border-gray-600"
              />
            </div>

            <div className="w-full  md:max-w-[306px] md:max-h-[97px] max-w-md mx-auto h-[97px]">
              <label className="block text-sm font-bold text-gray-700 dark:text-white mb-2">
                نسبت شخص با مسافر:
              </label>
              <input
                type="text"
                placeholder="پدر"
                className="w-full h-[56px] px-4 focus:outline-none border border-gray-300 rounded-md shadow-sm dark:bg-[#25272C] dark:text-white dark:border-gray-600"
              />
            </div>

            <div className="sm:col-span-2 md:col-span-1 w-full  md:max-w-[306px] md:max-h-[97px] max-w-md mx-auto h-[97px]">
              <label className="block text-sm font-bold text-gray-700 dark:text-white mb-2">
                شماره تماس:
              </label>
              <PhoneInputComponent />
            </div>
          </div>

          {/* Row 5 */}
          <div className="w-full mx-auto h-[97px]">
            <label className="block text-[12px] md:text-[16px] font-bold text-gray-700 dark:text-white mb-2">
              آدرس فرد نزدیک:
            </label>
            <input
              type="text"
              placeholder="آدرس: تهران، خیابان نلسون ماندلا (جردن سابق)"
              className="w-full h-[56px] px-4 focus:outline-none border border-gray-300 rounded-md shadow-sm dark:bg-[#25272C] dark:text-white dark:border-gray-600"
            />
          </div>


          {/* check box */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">

            <input type="checkbox" id="save-info" className="hidden peer" />

            {/* Label for custom checkbox */}
            <label
              htmlFor="save-info"
              className="relative flex items-center justify-center h-6 w-6 border-2 border-gray-300 dark:border-slate-200 rounded-md cursor-pointer 
              peer-checked:bg-orange-700 peer-checked:border-orange-700"
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white dark:text-[#25272C] block peer-checked:hidden"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </label>

            {/* Text next to checkbox */}
            <span className="text-[12px] md:text-[16px] font-bold  text-[#4D4D4D] dark:text-white">
              ذخیره اطلاعات مسافر
            </span>
          </div>



          {/* Buttons previes and next */}
          <div className="flex  items-center justify-between  md:max-h-[48px]  sm:justify-between md:justify-start mt-6 gap-[15px]" >
            <button
              type="button"
              className="py-3 px-4 dark:bg-[#383A40] bg-gray-100 flex items-center text-slate-300 font-bold rounded-md gap-[8px]"
            >
              <IoIosArrowForward className="" /> مرحله قبل
            </button>

            <button
              type="submit"
              className="flex items-center dark:bg-[#383A40] text-[16px] h-[48px] px-4 mx-4 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 gap-[8px]"
            >
              مرحله بعد <IoIosArrowBack  />
            </button>
          </div>

        </form>

      </div>



    </div>

  );
}
