'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

export default function Story() {
  const slides = [
    { id: 1, image: '/images/mastercard.png', title: 'رضایت مندی' },
    { id: 2, image: '/images/story-1.png', title: 'رضایت مندی' },
    { id: 3, image: '/images/story-2.png', title: 'رضایت مندی' },
    { id: 4, image: '/images/story-4.png', title: 'رضایت مندی' },
    { id: 5, image: '/images/story-3.png', title: 'رضایت مندی' },
    { id: 6, image: '/images/mastercard.png', title: 'رضایت مندی' },
    { id: 7, image: '/images/mastercard.png', title: 'رضایت مندی' },
    { id: 8, image: '/images/mastercard.png', title: 'رضایت مندی' },
    { id: 9, image: '/images/story-2.png', title: 'رضایت مندی' },
    { id: 10, image: '/images/mastercard.png', title: 'رضایت مندی' },
    { id: 11, image: '/images/story-5.png', title: 'رضایت مندی' },
    { id: 12, image: '/images/mastercard.png', title: 'رضایت مندی' },
    { id: 13, image: '/images/story-4.png', title: 'رضایت مندی' },
    { id: 14, image: '/images/story-2.png', title: 'رضایت مندی' },
  ]

  return (
    <section className="bg-slate-100 py-6 dark:bg-gray-700 dark:text-white">
      <div className="container mx-auto px-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={1} // Default for extra small screens
          loop={true}
          autoplay={{delay:2000}}
          rewind={true}
           modules={[Autoplay]}
          breakpoints={{
            
            360: { slidesPerView: 4 }, 
            480: { slidesPerView: 5}, 
            640: { slidesPerView: 5 }, 
            768: { slidesPerView: 12 }, 
            1024: { slidesPerView: 12 }, 
          }}
          
          className="swiper-container"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-orange-500 p-1 mx-auto">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full rounded-full"
                  />
                </div>
                <p className="text-sm mt-2">{slide.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
