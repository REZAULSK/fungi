'use client';
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram  } from "react-icons/fa"
import data from "@/data/data.json";
import { Tilt } from 'react-tilt';
const { menuItems, socialLinks } = data;

export function FreelancerMain(props) {
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
            <section id='home' className="home relative z-10 overflow-hidden text-white cxl:h-screen" style={isThemeColor ? props.heroBgDark : props.heroBg}>
                <div className="container">
                    <div className="h-screen flex justify-center flex-col items-center">
                            <div className="text-center flex justify-center mb-[36px] sm:mb-[30px] relative">
                                <Tilt options={defaultOptions}>
                                    <img className='max-w-full h-auto w-[180px] rounded-full shadow-custom_freelancer_hero' src="/images/freelancer/hero_main_image.png" alt="Hero_main_image" />
                                </Tilt>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <span className='text-[24px] font-bold font-poppins text-[#222222] dark:text-white mb-2'>Hello There, I&apos;m</span>
                                <h1 className='cxl:text-[90px] md:text-[60px] sm:text-[48px] text-[36px] font-bold font-poppins text-[#222222] dark:text-white text-center leading-[1.2] mb-[6px]'>Steve <span className='text-[#7371f9]'>Rogers</span></h1>
                                <p className='text-[18px] sm:text-[24px] font-opensans text-[#615978] dark:text-[#b0aac0]'>A passionate <strong>freelancer</strong> who works on</p>
                                <TypeAnimation
                                    sequence={[
                                        'Fiverr',
                                        1000,
                                        'Envato',
                                        1000,
                                        'UpWork',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{ display: 'inline-block', color: '#80b341', fontFamily: 'Open Sans', fontWeight: 700, marginLeft: '8px', marginRight: '8px', height: '72px', fontSize: '48px' }}
                                    repeat={Infinity}
                                    cursor={false}
                                />

                                <div className="mt-[50px] flex justify-center items-center gap-3 relative z-[99]">
                                    <Link href={'#'} className="md:py-[15px] py-3 px-[30px] md:px-[42px] uppercase text-[#ffffff] font-poppins font-bold bg-[#7371f9] rounded-[5px] flex transition-all hover:bg-[#130ff5] text-[16px] md:text-[18px]">Hire Me</Link>
                                    <Link href={'#'} className="md:py-[13px] py-[10px] px-[28px] md:px-[40px] uppercase text-[#222222] hover:text-white dark:text-white font-poppins font-bold bg-transparent border-[2px] border-[#7371f9] rounded-[5px] flex transition-all hover:bg-[#7371f9] text-[16px] md:text-[18px]">About Me</Link>
                                </div>
                            </div>
                    </div>
                </div>
                
                <div className="hidden cxl:block">
                    <MouseParallaxContainer
                        className="parallax absolute"
                        globalFactorX={0.03}
                        globalFactorY={0.03}
                        resetOnLeave
                    >
                        <MouseParallaxChild factorX={0.3} factorY={0.5}>
                            <img className='absolute cxl:left-[0%] cxl:top-[0%]' src="/images/freelancer/1.png" alt="" />
                        </MouseParallaxChild>
                        <MouseParallaxChild factorX={0.7} factorY={0.8}>
                            <img className='absolute cxl:left-[0%] cxl:top-[0%]' src="/images/freelancer/2.png" alt="" />
                        </MouseParallaxChild>
                        <MouseParallaxChild factorX={0.4} factorY={0.6}>
                            <img className='absolute cxl:left-[0%] cxl:top-[0%]' src="/images/freelancer/3.png" alt="" />
                        </MouseParallaxChild>
                        <MouseParallaxChild factorX={0.6} factorY={0.8}>
                            <img className='absolute cxl:left-[0%] cxl:top-[0%]' src="/images/freelancer/4.png" alt="" />
                        </MouseParallaxChild>
                        <MouseParallaxChild factorX={0.2} factorY={0.4}>
                            <img className='absolute cxl:left-[0%] cxl:top-[0%]' src="/images/freelancer/5.png" alt="" />
                        </MouseParallaxChild>
                        <MouseParallaxChild factorX={0.4} factorY={0.6}>
                            <img className='absolute cxl:left-[0%] cxl:top-[0%]' src="/images/freelancer/6.png" alt="" />
                        </MouseParallaxChild>
                        <MouseParallaxChild factorX={0.6} factorY={0.8}>
                            <img className='absolute cxl:left-[0%] cxl:top-[0%]' src="/images/freelancer/7.png" alt="" />
                        </MouseParallaxChild>
                        <MouseParallaxChild factorX={0.7} factorY={0.8}>
                            <img className='absolute cxl:left-[0%] cxl:top-[0%]' src="/images/freelancer/8.png" alt="" />
                        </MouseParallaxChild>
                    </MouseParallaxContainer>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 rotate-90 -right-[150px] hidden cxl:flex gap-[50px]">
                    <ul className={`items-center gap-6 flex`}>
                        {socialLinks.map((link, index)=>
                            {
                                let IconComponent;
                                switch (link.icon) {
                                    case 'FaFacebookF':
                                    IconComponent = FaFacebookF;
                                    break;
                                    case 'FaTwitter':
                                    IconComponent = FaTwitter;
                                    break;
                                    case 'FaLinkedin':
                                    IconComponent = FaLinkedin;
                                    break;
                                    case 'FaInstagram':
                                    IconComponent = FaInstagram;
                                    break;
                                    default:
                                    return null;
                                }
                                return (
                                    <li key={index} className="">
                                        <Link 
                                            href={link.link} 
                                            rel="noopener noreferrer" 
                                            target="_blank" 
                                            className={`text-[24px] transition-all duration-300 text-[#222222] dark:text-white hover:text-[#7371f9]`}> 
                                            <IconComponent /> 
                                        </Link>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                    <Link href={'#'} className="text-[#222222] dark:text-white text-[18px] font-opensans">hello@fungiweb.com</Link>
                </div>
            </section>
        </>
    )
}
