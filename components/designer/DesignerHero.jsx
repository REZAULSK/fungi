'use client';
import React, { useEffect, useState, useCallback, useMemo } from "react";
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaWordpress, FaLaravel, FaJoomla, FaDrupal  } from "react-icons/fa"
import data from "@/data/data.json";
import ParticlesComponent from '../DesignerParticleAnim';
import { Tilt } from 'react-tilt';
const { menuItems, socialLinks } = data;

export function DesignerHero(props) {
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
            <section id='home' className="home relative z-10 overflow-hidden h-full cxl:h-screen">
                <div className="container">
                <div className="cxl:h-screen h-full flex relative z-10 cxl:justify-between justify-center items-center c2xl:mt-0 cxl:mt-[30px] flex-col cxl:flex-row">
                        <div className="cxl:order-last cxl:w-1/2 px-3 w-full">
                            <Tilt options={defaultOptions}>
                                <div className="relative flex justify-center cxl:justify-end cxl:mt-4 cxl:mb-0 mt-[136px] csm:mt-[160px] mb-[40px] csm:mb-[70px] group">
                                    <ul className="hidden md:block">
                                        <li className="absolute top-[15%] c2xl:left-[28%] c3xl:left-[20%] w-[100px]">
                                            <img src="/images/designer/hero_color_1.png" alt="" />
                                        </li>
                                        <li className="absolute -bottom-[4%] left-[27%] w-[100px]">
                                            <img src="/images/designer/hero_color_2.png" alt="" />
                                        </li>
                                        <li className="absolute top-[2%] right-[32%] cxl:right-[9%] w-[100px]">
                                            <img src="/images/designer/hero_color_3.png" alt="" />
                                        </li>
                                        <li className="absolute bottom-[11%] right-[24%] cxl:right-[5%] w-[80px]">
                                            <img src="/images/designer/hero_color_4.png" alt="" />
                                        </li>
                                    </ul>
                                    <img className='c3xl:w-[80%] c2xl:w-[70%] cxl:w-[64%] md:w-[60%] w-[80%]' src="/images/designer/hero_main_image.png" alt="IMG" />
                                </div>
                            </Tilt>
                        </div>
                        <div className="cxl:order-first cxl:w-1/2 px-3 w-full cxl:text-start text-center cxl:mb-0 mb-[120px]">
                            <span className='md:text-2xl text-[21px] font-bold font-poppins block mb-3 text-dark dark:text-white'>Hello, I&apos;m</span>
                            <h2 className='cxl:text-[90px] md:text-[60px] text-[48px] font-bold font-poppins leading-[1.2] mb-2 text-[#fdb63c]'>Jessica <span className='text-[#fd4312]'>Parker</span></h2>
                            <p className="mb-3 md:text-2xl text-[18px] font-opensans text-[#615978] dark:text-[#b0aac0]">A passionate <strong>Designer</strong> from <strong>Planet Earth!!</strong></p>

                            <div className="flex items-center md:gap-12 gap-[30px] mt-[36px] csm:mt-[56px] cxl:justify-start justify-center md:flex-row flex-col">
                                <Link href="/main" className='cxl:py-[15px] cxl:px-[42px] py-[12px] px-[30px] bg-[#fd4312] text-white rounded-[5px] font-poppins uppercase md:text-[18px] text-[16px] font-bold transition-all duration-300 hover:bg-[#a82401]'>Contact me</Link>

                                <ul className='flex md:gap-7 gap-6'>
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
                                                        className={`text-[24px] transition-all duration-300 text-[#fd4312] hover:text-[#a82401]`}> 
                                                        <IconComponent /> 
                                                    </Link>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <ParticlesComponent bgColor={isThemeColor ? '#343434' : '#f5edd8'} id="particlesTwo" className="h-screen designer-particles" />
            </section>
        </>
    )
}
