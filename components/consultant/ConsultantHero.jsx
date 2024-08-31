'use client';
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation';
import { Tilt } from 'react-tilt';

export function ConsultantHero(props) {
    const [isThemeColor, setIsThemeColor] = useState(false);
    const updateTheme = () => {
    const storedTheme = localStorage.getItem('theme');
        setIsThemeColor(storedTheme === 'dark');
    };
    useEffect(() => {
        updateTheme();
        const handleThemeChange = () => {
            updateTheme();
        };
        window.addEventListener('themeChange', handleThemeChange);
        return () => {
            window.removeEventListener('themeChange', handleThemeChange);
        };
    }, []);
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
            <section id='home' className="home relative z-10 text-white c3xl:h-screen cxl:h-[920px] clg:h-[1320px]" style={isThemeColor ? props.heroBgDark : props.heroBg}>
                <div className="container relative">
                    <div className="c3xl:h-screen cxl:h-[920px] clg:h-[1320px] flex relative z-10 cxl:justify-between justify-center items-center flex-col cxl:flex-row">
                        <div className="cxl:w-1/2 px-3 w-full cxl:text-start text-center cxl:pt-0 cxl:pb-0 md:pt-[180px] md:pb-[80px] pt-[120px] pb-[60px]">
                            <span className='md:text-[30px] text-[21px] font-bold font-poppins block'>Hello, I&apos;m</span>
                            <h2 className='cxl:text-[90px] md:text-[60px] text-[48px] font-bold font-poppins leading-[1.2] mb-2'>James <span className='text-[#5a7ffb]'>Anderson</span></h2>
                            <p className="mb-4 md:text-[24px] leading-[2.4rem] text-[18px] font-opensans">A Consultant who work to grow 
                                <br />
                                <span className="inline-block py-1">
                                    your
                                </span>
                                <TypeAnimation
                                    sequence={[
                                        'Brand',
                                        1000,
                                        'Business',
                                        1000,
                                        'Freelancer',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{ display: 'inline-block', color: '#ffffff', fontFamily: 'Open Sans', fontWeight: 700, marginLeft: '8px', fontSize: '30px', height: '24px' }}
                                    repeat={Infinity}
                                    cursor={false}
                                />
                            </p>
                            <div className="flex items-center gap-[20px] mt-[36px] csm:mt-[40px] cxl:justify-start justify-center flex-row">
                                <Link href="/main" className='cxl:py-[15px] cxl:px-[42px] py-[12px] px-[30px] bg-[#5a7ffb] text-white rounded-[5px] font-poppins uppercase md:text-[18px] text-[16px] font-bold transition-all duration-300 hover:bg-[#063ae9]'>Hire me</Link>

                                <Link href="#" className="text-[#5a7ffb] font-poppins uppercase md:text-[18px] text-[16px] font-bold hover:text-white transition-all duration-300">More About Me</Link>
                            </div>
                        </div>
                        <div className="cxl:w-1/2 px-3 w-full cxl:pb-0 clg:pb-[80px] md:pb-[120px] pb-[80px]">
                            <div className="relative cxl:ml-[30px] cxl:mr-0 clg:ml-[150px] clg:mr-[150px] mt-[30px] flex flex-col-reverse md:block justify-center items-center md:gap-0 gap-[50px]">
                                <ul className="consultant_hero_facts flex flex-col md:absolute md:top-1/2 md:-translate-y-1/2 c2xl:right-0 cxl:-right-[20px] right-0 w-[250px] c2xl:w-[280px] gap-[20px] z-20">
                                    <li className="bg-white dark:bg-[#343434] px-[24px] py-[22px] text-start shadow-lg rounded-[10px] flex items-center justify-center gap-4 w-full overflow-hidden relative z-10 dark:after:bg-[#484848]">
                                        <p className="c3xl:text-[45px] text-[36px] font-bold text-[#5a7ffb] font-opensans leading-[1]">12+</p>
                                        <h4 className="c3xl:text-[21px] cxl:text-[18px] text-[16px] uppercase leading-[1.2] relative inline-block font-poppins text-dark dark:text-white font-bold">Years of <br />Experience</h4>
                                    </li>
                                    <li className="bg-white dark:bg-[#343434] px-[24px] py-[22px] text-start shadow-lg rounded-[10px] flex items-center justify-center gap-4 w-full overflow-hidden relative z-10 dark:after:bg-[#484848]">
                                        <p className="c3xl:text-[45px] text-[36px] font-bold text-[#5a7ffb] font-opensans leading-[1]">160</p>
                                        <h4 className="c3xl:text-[21px] cxl:text-[18px] text-[16px] uppercase leading-[1.2] relative inline-block font-poppins text-dark dark:text-white font-bold">Reputated <br />Companies</h4>
                                    </li>
                                    <li className="bg-white dark:bg-[#343434] px-[24px] py-[22px] text-start shadow-lg rounded-[10px] flex items-center justify-center gap-4 w-full overflow-hidden relative z-10 dark:after:bg-[#484848]">
                                        <p className="c3xl:text-[45px] text-[36px] font-bold text-[#5a7ffb] font-opensans leading-[1]">20+</p>
                                        <h4 className="c3xl:text-[21px] cxl:text-[18px] text-[16px] uppercase leading-[1.2] relative inline-block font-poppins text-dark dark:text-white font-bold">Awards <br />Won</h4>
                                    </li>
                                </ul>
                                <div className="c2xl:w-[400px] cxl:w-[350px] clg:w-[400px] xs:w-[350px] w-[300px]">
                                    <img className="absolute clg:-left-[30px] -top-[30px] c2xl:w-[400px] cxl:w-[350px] clg:w-[400px] xs:w-[350px] w-[300px]" src="/images/consultant/rounded_border.png" alt=""/>
                                    <img className="clg:left-0 xs:left-[30px] left-[15px] relative -z-10" src='/images/consultant/author_image.png' alt="IMG" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="absolute c3xl:-right-[100px] cxl:right-[80px] clg:right-[240px] clg:-bottom-[72px] md:-bottom-[35px] bottom-[26%] left-[30%] z-40 clg:w-auto w-[50%] md:left-[100px] clg:left-auto" src="/images/consultant/signature_img.png" alt="Signature" />
                </div>
                
                <div className="hidden cxl:block">
                    <img className='absolute c3xl:left-[33%] c2xl:left-[26%] cxl:left-[20%] c3xl:top-[24%] c2xl:top-[24%] cxl:top-[24%] opacity-30 animate-animUpDown' src="/images/consultant/hero-element-1.png" alt="" />
                    <img className='absolute c3xl:left-[10%] cxl:left-[5%] bottom-[17%] opacity-30 animate-animMove' src="/images/consultant/hero-element-2.png" alt="" />
                    <img className='absolute c3xl:left-[8%] cxl:left-[4%] top-[30%] opacity-30 animate-animZoom' src="/images/consultant/hero-element-3.png" alt="" />
                    <img className='absolute c3xl:right-[6%] cxl:right-[2%] top-[16%] opacity-30 animate-animZoom' src="/images/consultant/hero-element-3.png" alt="" />
                    <img className='absolute c3xl:right-[12%] cxl:right-[8%] top-[52%] w-[18px] opacity-30 animate-animZoom2' src="/images/consultant/hero-element-3.png" alt="" />
                    <img className='absolute c3xl:right-[5%] cxl:right-[2%] bottom-[6%] opacity-30 animate-animZoom' src="/images/consultant/hero-element-3.png" alt="" />
                    <img className='absolute c3xl:right-[23%] right-[16%] top-[16%] opacity-30' src="/images/consultant/hero-element-4.png" alt="" />
                    <img className='absolute c2xl:left-[48%] cxl:left-[40%] c3xl:bottom-[15%] c2xl:bottom-[10%] cxl:bottom-[8%] opacity-30' src="/images/consultant/hero-element-5.png" alt="" />
                </div>
            </section>
        </>
    )
}