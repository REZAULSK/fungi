'use client';
import React from 'react'
import { SectionHeadOne } from './SectionHeadOne';
import Data from '@/data/data.json';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const { testimonialData } = Data;

export function MainTestimonial(props) {
    return (
        <>
            <div id='testimonials' className={`${props.sectionPadding}`} style={props.customStyle}>
                <div className="container relative z-20">
                    <SectionHeadOne
                        title="Testimonials" 
                        paraOne="I'm a young tech enthasist and entrepreneur who love to take risk. I grew up in a tech family in New York City."
                        titleClasses={`relative inline-block leading-[1] text-[20px] xs:text-[24px] font-poppins uppercase mb-4 xs:mb-6 font-bold ${props.titleClasses}`}
                        paraClasses={`text-[1.1rem] sm:text-[1.25rem] font-normal font-opensans ${props.paraClasses}`}
                        headWrapperClasses={`section-title w-[80%] md:w-1/2 mx-auto mb-[40px] md:mb-[72px] text-center ${props.headWrapperClasses}`}
                    />
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={24}
                        slidesPerView={3}
                        navigation = {false}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            // when window width is >= 640px
                            300: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            // when window width is >= 1024px
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                        }}
                    >
                        {testimonialData.map((data, index) => (
                            <SwiperSlide key={index}>
                                <div className="pt-[37px] pb-[70px]">
                                    <div className={`bg-white p-[30px] pt-[60px] px-[48px] pb-[48px] rounded-[12px] relative flex justify-center text-center flex-col ${props.testimonialCard} ${props.testimonialCardShadow}`}>
                                        <div className={`w-[72px] h-[72px] rounded-full absolute -top-[36px] left-1/2 -translate-x-1/2 flex justify-center items-center ${props.bgColor}`}>
                                            <img className='w-[24px]' src={props.iconImage} alt="" />
                                        </div>
                                        <p className='text-[18px] text-main-dark dark:text-[#b0aac0] italic font-opensans mb-[30px]'>{data.description}</p>
                                        <div className="flex items-center justify-center">
                                            <div className="w-[60px] h-[60px] rounded-full overflow-hidden mr-[18px]">
                                                <img src={data.image} alt="" />
                                            </div>
                                            <div className="flex flex-col justify-start text-start">
                                                <h4 className='text-[21px] font-poppins font-bold text-dark dark:text-white leading-[1]'>{data.name}</h4>
                                                <span className='block mt-2 text-[16px] font-opensans text-[#948daa] dark:text-[#b0aac0] leading-[1]'>{data.designation}</span>
                                            </div>
                                        </div>
                                        <span className={`absolute -bottom-[18px] left-1/2 -translate-x-1/2 h-[60px] w-[90%] bg-[#f1f1f1] rounded-[10px] -z-10 ${props.testimonialCard} ${props.testimonialShape}`}></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </>
    )
}
