'use client';
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram  } from "react-icons/fa"
import data from "@/data/data.json";
import { Tilt } from 'react-tilt';
const { menuItems, socialLinks } = data;

export function HackerHero(props) {
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
            <section id='home' className="home relative z-10 overflow-hidden text-white cxl:h-screen">
                <div className="container">
                    <div className="h-screen flex justify-center flex-col items-center">
                        {/* <div className="text-center flex justify-center mb-[36px] sm:mb-[30px] relative">
                            <Tilt options={defaultOptions}>
                                <img className='max-w-full h-auto w-[180px] rounded-full shadow-custom_freelancer_hero' src="/images/freelancer/hero_main_image.png" alt="Hero_main_image" />
                            </Tilt>
                        </div> */}
                        <div className="flex flex-col justify-center items-center relative z-[999]">
                            <span className='text-[36px] font-bold font-poppins text-white mb-4'>Hello, I&apos;m</span>
                            <h1 className='cxl:text-[120px] md:text-[60px] sm:text-[48px] text-[36px] font-bold font-poppins text-white text-center leading-[1.2] mb-[24px]'>Bruce <span className='text-[#3CB371]'>Wayne</span></h1>
                            <p className='text-[18px] sm:text-[24px] clg:text-[30px] font-opensans text-white'>An Ethical Hacker who loves to code..</p>
                            <div className="mt-[50px] flex justify-center items-center gap-4 relative z-[99]">
                                <Link href={'#'} className="md:py-[15px] py-3 px-[30px] md:px-[42px] uppercase text-[#ffffff] font-poppins font-bold bg-[#3CB371] rounded-[5px] flex transition-all hover:bg-[#329c62] text-[16px] md:text-[18px]">Hire Me</Link>
                                <Link href={'#'} className="md:py-[13px] py-[10px] px-[28px] md:px-[40px] uppercase text-white hover:text-white dark:text-white font-poppins font-bold bg-transparent border-[2px] border-[#3CB371] rounded-[5px] flex transition-all hover:bg-[#3CB371] text-[16px] md:text-[18px]">About Me</Link>
                            </div>
                        </div>
                    </div>
                    <div className="line-wrapper">
                        <div className="lines">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>

                    <div className="glitch-img absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hacker/hero-bg.jpg')" }}></div>
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 animate-glitch clip-path-2" style={{ backgroundImage: "url('/images/hacker/hero-bg.jpg')" }}></div>
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 animate-glitch2 clip-path-3" style={{ backgroundImage: "url('/images/hacker/hero-bg.jpg')" }}></div>
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 animate-glitch3 clip-path-4" style={{ backgroundImage: "url('/images/hacker/hero-bg.jpg')" }}></div>
                </div>
            
            </section>
        </>
    )
}
