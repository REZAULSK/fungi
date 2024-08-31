'use client';
import React from 'react'
import Data from '@/data/data.json'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const { MinimalPartnerData } = Data;

export function MinimalPartner(props) {
    return (
        <>
            <div className={`py-[60px] csm:py-[90px] ${props.sectionBgColor}`}>
                <div className="container">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={24}
                        slidesPerView={6}
                        navigation = {false}
                        pagination={false}
                        breakpoints={{
                            // when window width is >= 300px
                            300: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            // when window width is >= 575px
                            576: {
                              slidesPerView: 3,
                              spaceBetween: 20,
                            },
                            // when window width is >= 768px
                            768: {
                              slidesPerView: 3,
                              spaceBetween: 20,
                            },
                            // when window width is >= 992px
                            992: {
                              slidesPerView: 4,
                              spaceBetween: 20,
                            },
                            // when window width is >= 1024px
                            1200: {
                              slidesPerView: 6,
                              spaceBetween: 24,
                            },
                          }}
                    >
                            {MinimalPartnerData.map((data, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex justify-center">
                                        <img src={data.image} alt="" />
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}
