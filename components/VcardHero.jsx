'use client';
import React from 'react'
import { Link } from 'react-scroll';
import { Tilt } from 'react-tilt';
import { TypeAnimation } from 'react-type-animation';

export function VcardHero(props) {
    const defaultOptions = {
        reverse:        false,
        max:            18,
        perspective:    1000,
        scale:          1,
        speed:          1000,
        transition:     true,
        axis:           null,
        reset:          true,
        easing:         "cubic-bezier(.03,.98,.52,.99)",
    }
    return (
        <>
            <section id='home'>
                <div className="container">
                    <div className="bg-[#222222] min-h-[83vh] rounded-[18px] relative px-5 c2xl:pt-0 c2xl:pb-0 cxl:pt-[72px] cxl:pb-[72px] csm:pt-[120px] csm:pb-[120px] pt-[136px] pb-[120px] flex flex-col items-center justify-center">
                        <div className="text-center flex justify-center mb-[36px] sm:mb-[60px] relative">
                            <Tilt options={defaultOptions}>
                                <img className='max-w-full h-auto w-[180px] rounded-full' src="/images/vcard/hero_main_image.jpg" alt="Hero_main_image" />
                            </Tilt>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <span className='text-[24px] font-bold font-poppins text-[#FFFFFF] mb-2'>Hello There, I&apos;m</span>
                            <h1 className='cxl:text-[90px] md:text-[60px] sm:text-[48px] text-[36px] font-bold font-poppins text-[#FFFFFF] text-center leading-[1.2] mb-[6px]'>Michael <span className='text-[#adff00]'>Johnson</span></h1>
                            <p className='text-[18px] sm:text-[24px] font-opensans text-[#FFFFFF]'>
                                New York based 
                                <TypeAnimation
                                    sequence={[
                                        'Web Design',
                                        1000,
                                        'Web Development',
                                        1000,
                                        'Freelancer',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{ display: 'inline-block', color: '#ffffff', fontFamily: 'Open Sans', fontWeight: 700, marginLeft: '8px', marginRight: '8px' }}
                                    repeat={Infinity}
                                    cursor={false}
                                />
                                <span>_</span>
                            </p>
                            <div className="mt-[50px] flex justify-center items-center gap-3">
                                <Link href={'#'} className="md:py-[15px] py-3 px-[30px] md:px-[42px] uppercase text-[#222222] font-poppins font-bold bg-[#adff00] rounded-[5px] flex transition-all hover:text-[#ffffff] text-[16px] md:text-[18px]">Hire Me</Link>
                                <Link href={'#'} className="md:py-[13px] py-[10px] px-[28px] md:px-[40px] uppercase text-[#ffffff] font-poppins font-bold bg-transparent border-[2px] border-[#adff00] rounded-[5px] flex transition-all hover:text-[#222222] hover:bg-[#adff00] text-[16px] md:text-[18px]">About Me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
