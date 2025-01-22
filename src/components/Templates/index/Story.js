"use client"

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { IoIosShareAlt } from "react-icons/io";
import { IoMdHeartHalf } from "react-icons/io";
import { IoIosSend } from "react-icons/io";

export default function PensionStory() {
  const slides = [
    { id: 1, image: "/images/mastercard.png", title: "رضایتمندی" },
    { id: 2, image: "/images/story-1.png", title: "رضایتمندی" },
    { id: 3, image: "/images/story-2.png", title: "رضایتمندی" },
    { id: 4, image: "/images/story-4.png", title: "رضایتمندی" },
    { id: 5, image: "/images/story-3.png", title: "رضایتمندی" },
    { id: 6, image: "/images/mastercard.png", title: "رضایتمندی" },
    { id: 7, image: '/images/mastercard.png', title: 'رضایتمندی' },
    { id: 8, image: '/images/mastercard.png', title: 'رضایتمندی' },
    { id: 9, image: '/images/story-2.png', title: 'رضایتمندی' },
    { id: 10, image: '/images/mastercard.png', title: 'رضایتمندی' },
    { id: 11, image: '/images/story-5.png', title: 'رضایتمندی' },
    { id: 12, image: '/images/mastercard.png', title: 'رضایتمندی' },
    { id: 13, image: '/images/story-4.png', title: 'رضایتمندی' },
    { id: 14, image: '/images/story-2.png', title: 'رضایتمندی' },
  ];

  const [selectedStory, setSelectedStory] = useState(null);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };

  const closeModal = () => {
    setSelectedStory(null);
  };

  return (
    <section className="bg-[#F6F6F6] py-7 dark:bg-[#25272C] dark:text-white">
      <div className="container mx-auto px-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000 }}
          rewind={true}
          modules={[Autoplay]}
          breakpoints={{
            360: { slidesPerView: 5 },
            640: { slidesPerView: 5 },
            768: { slidesPerView: 12 },
            1024: { slidesPerView: 12 },
          }}
          className="swiper-container"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="text-center ">
                <div
                  className="w-[50px] h-[50px]  rounded-full bg-gradient-to-r from-[#FF784F] to-[#FF5825]  border-1   p-1 mx-auto cursor-pointer gap-[16px] md:gap-[31px]"
                  onClick={() => handleStoryClick(slide)}
                >
                  
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className=" bg-white h-full rounded-full"
                  />
              


                 
                </div>

                
                <p className="text-[12] mt-2">{slide.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal for Story View */}
      {selectedStory && (
        <div
          className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white dark:bg-[#25272C]  rounded-lg p-4 w-11/12 md:w-2/3 lg:w-1/3"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="absolute top-2 right-2 flex items-center space-x-2">
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="w-10 h-10 ml-2 rounded-full"
              />
              <span className="text-black font-semibold dark:text-white "> اسد شاهی</span>
            </div>
            <button
              className="absolute top-2 left-2 text-black dark:text-white text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="text-center mt-12">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">

              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="نظر خود را ارسال کنید..."
                  className="w-full border border-gray-100 dark:bg-[#25272C] focus:outline-none text-sm rounded-lg p-2 pr-10"
                />
                <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300">
                  <IoIosSend />
                </button>
              </div>


              <div className="flex justify-around items-center mr-2">
                <button className="text-red-500 text-2xl"><IoMdHeartHalf /></button>
                <button className="text-blue-500 text-2xl"><IoIosShareAlt /> </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
