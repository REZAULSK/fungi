'use client';
import React from 'react'
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { Tilt } from 'react-tilt'

export function ClassicHero(props) {
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
                    <div className="h-screen relative px-[10px] c2xl:pt-0 c2xl:pb-0 cxl:pt-[72px] cxl:pb-[72px] csm:pt-[120px] csm:pb-[120px] pt-[136px] pb-[120px] flex items-center justify-center clg:flex-row flex-col">
                        <div className="clg:w-1/2 w-full classic_hero_image clg:mb-0 mb-[30px]">
                            <Tilt options={defaultOptions}>
                                <img className='clg:w-[78%] w-[60%]' src="/images/classic/hero_main_image.jpg" alt="" />
                            </Tilt>
                        </div>
                        <div className="flex flex-col justify-center items-center clg:justify-start clg:items-start clg:w-1/2 w-full clg:pl-[30px] cxl:pl-[60px]">
                            <span className="text-[24px] font-bold font-poppins text-[#FFFFFF] mb-2">Hello, I&apos;m</span>
                            <h1 className='cxl:text-[90px] md:text-[60px] sm:text-[48px] text-[36px] font-bold font-poppins text-[#FFFFFF] leading-[1.2] mb-[6px]'>Michael <span className="text-main-primary">Smith</span></h1>
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
                            <div className="mt-[50px] flex justify-center items-center gap-[15px]">
                                <Link href={'#'} className="md:py-[12px] py-[10px] px-[30px] md:px-[42px] uppercase text-[#ffffff] font-poppins font-bold bg-main-primary rounded-[5px] flex transition-all hover:text-[#ffffff] border-[2px] border-transparent hover:border-main-secondary hover:bg-main-secondary text-[16px] md:text-[18px]">Hire Me</Link>
                                <Link href={'#'} className="md:py-[13px] py-[10px] px-[28px] md:px-[40px] uppercase text-[#ffffff] font-poppins font-bold bg-transparent border-[2px] border-main-primary rounded-[5px] flex transition-all hover:text-[#ffffff] hover:bg-main-primary text-[16px] md:text-[18px]">About Me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
