'use client';
import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaWordpress, FaLaravel, FaJoomla, FaDrupal } from "react-icons/fa"
import { Tilt } from 'react-tilt';
import { TypeAnimation } from 'react-type-animation';
import data from "@/data/data.json";
const { menuItems, socialLinks } = data;

export function DeveloperHero(props) {
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
            <section id='home' className="home main-hero relative z-10 overflow-hidden text-white cxl:h-screen" style={{ backgroundImage: "url('../images/developer/hero-bg.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover" }}>
                <div className="container">
                    <div className="cxl:h-screen h-full flex relative z-10 cxl:justify-between justify-center items-center c2xl:mt-0 cxl:mt-[30px] flex-col cxl:flex-row">
                        <div className="cxl:order-last cxl:w-1/2 px-3 w-full">
                            <Tilt options={defaultOptions}>
                                <div className="relative flex justify-center cxl:justify-end cxl:mt-4 cxl:mb-0 mt-[136px] csm:mt-[160px] mb-[40px] csm:mb-[70px] group">
                                    <ul>
                                        <li className="bg-[#21759b] rotate-[14deg] absolute -top-[30px] left-0 xs:left-[20px] md:left-[100px] clg:left-[120px] cxl:left-[110px] c2xl:left-[120px] c3xl:left-[100px] p-[18px] rounded-[10px] text-[30px] xs:text-[60px] group-hover:rotate-0 transition-all"><FaWordpress /></li>
                                        <li className="bg-[#7ac143] -rotate-[7deg] absolute bottom-[40px] xs:bottom-[100px] left-0 xs:left-[10px] md:left-[90px] clg:left-[110px] cxl:left-[120px] c2xl:left-[110px] c3xl:left-[90px] p-[18px] rounded-[10px] text-[30px] xs:text-[60px] group-hover:rotate-0 transition-all"><FaJoomla /></li>
                                        <li className="bg-[#f55247] -rotate-[8deg] absolute top-[20px] xs:top-[60px] right-0 md:right-[80px] clg:right-[120px] cxl:-right-[30px] p-[18px] rounded-[10px] text-[30px] xs:text-[60px] group-hover:rotate-0 transition-all"><FaLaravel /></li>
                                        <li className="bg-[#0077c0] rotate-[12deg] absolute bottom-[20px] xs:bottom-[40px] right-0 md:right-[80px] clg:right-[120px] cxl:-right-[20px] p-[18px] rounded-[10px] text-[30px] xs:text-[60px] group-hover:rotate-0 transition-all"><FaDrupal /></li>
                                    </ul>
                                    <img className='c3xl:w-[80%] c2xl:w-[70%] cxl:w-[64%] md:w-[60%] w-[80%]' src="/images/developer/hero_main_image.png" alt="IMG" />
                                </div>
                            </Tilt>
                        </div>
                        <div className="cxl:order-first cxl:w-1/2 px-3 w-full cxl:text-start text-center cxl:mb-0 mb-[120px]">
                            <span className='md:text-2xl text-[21px] font-bold font-poppins block mb-3'>Hello, I&apos;m</span>
                            <h2 className='cxl:text-[90px] md:text-[60px] text-[48px] font-bold font-poppins leading-[1.2] mb-2'>Rebert <span className='text-[#1da1f3]'>Willium</span></h2>
                            <p className="mb-3 md:text-2xl text-[18px] font-opensans">I develop website using...</p>
                            <div className='h-[40px]'>
                                <TypeAnimation
                                    sequence={[
                                        'Laravel',
                                        2000,
                                        'Joomla',
                                        2000,
                                        'Wordpress',
                                        2000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{ display: 'inline-block', color: '#ffffff', fontFamily: 'Open Sans', fontWeight: 700, marginRight: '8px', fontSize: '36px' }}
                                    repeat={Infinity}
                                    cursor={false}
                                />
                            </div>
                            <div className="flex items-center md:gap-12 gap-[30px] mt-[36px] csm:mt-[56px] cxl:justify-start justify-center md:flex-row flex-col">
                                <Link href="/main" className='cxl:py-[15px] cxl:px-[42px] py-[12px] px-[30px] bg-[#1da1f3] text-white rounded-[5px] font-poppins uppercase md:text-[18px] text-[16px] font-bold transition-all duration-300 hover:bg-[#208acc]'>Contact me</Link>

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
                                                        className={`text-[24px] transition-all duration-300 text-white hover:text-[#1da1f3]`}> 
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
                <div className="hidden cxl:block">
                    <img className='absolute c3xl:left-[8%] c3xl:top-[22%] c2xl:left-[1%] c2xl:top-[16%] cxl:left-[3%] cxl:top-[20%] animate-animUpDown' src="/images/developer/hero-element-1.png" alt="" />
                    <img className='absolute c3xl:right-[7%] cxl:right-[3%] top-[20%] animate-animMove' src="/images/developer/hero-element-2.png" alt="" />
                    <img className='absolute c3xl:right-[5%] cxl:right-[2%] bottom-[12%] animate-animUpDown' src="/images/developer/hero-element-3.png" alt="" />
                    <img className='absolute right-[48%] top-[30%] animate-animUpDown' src="/images/developer/hero-element-4.png" alt="" />
                    <img className='absolute c2xl:left-[10%] cxl:left-[1%] c3xl:bottom-[18%] c2xl:bottom-[12%] cxl:bottom-[8%] animate-animMove' src="/images/developer/hero-element-5.png" alt="" />
                </div>
            </section>
        </>
    )
}
