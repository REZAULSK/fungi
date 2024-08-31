'use client';
import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram  } from "react-icons/fa"
import { mainHeroData } from '@/data/data'
import { Tilt } from 'react-tilt';

export function HeroMain(props) {
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
            <section id='home' className="home main-hero relative z-10 overflow-hidden text-white cxl:h-screen" style={{ backgroundImage: "url('../images/main/hero-bg.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover" }}>
                <div className="container">
                    {mainHeroData.map((item, index)=>(
                        <div key={index} className="cxl:h-screen h-full flex relative z-10 cxl:justify-between justify-center items-center c2xl:mt-0 cxl:mt-[30px] flex-col cxl:flex-row">
                            <div className="cxl:order-last cxl:w-1/2 px-3 w-full">
                                <Tilt options={defaultOptions}>
                                    <div className="relative flex justify-center cxl:justify-end image-wrapper cxl:mt-4 cxl:mb-0 mt-[136px] csm:mt-[160px] mb-[40px] csm:mb-[70px]">
                                        <ul className="hero-facts hidden csm:flex space-x-8">
                                            <li className="bg-white dark:bg-[#2f2f2f] absolute c3xl:px-[24px] c3xl:py-[18px] cxl:p-4 px-4 py-[14px] text-start shadow-lg rounded-[10px] flex items-center justify-center gap-4 md:top-[60px] top-[48px] cxl:left-[96px] c3xl:left-[60px] md:left-[80px] left-0">
                                                <p className="c3xl:text-[45px] text-[36px] font-bold text-main-primary font-opensans">5K<span className="text-[60%] relative -top-[16px]">+</span></p>
                                                <h4 className="c3xl:text-[18px] cxl:text-[15px] text-[14px] uppercase leading-[1.4] relative inline-block font-poppins text-dark dark:text-white font-bold">Total <br />Projects</h4>
                                            </li>
                                            <li className="bg-white dark:bg-[#2f2f2f] absolute c3xl:px-[24px] c3xl:py-[18px] cxl:p-4 px-4 py-[14px] text-start shadow-lg rounded-[10px] flex items-center justify-center gap-4 right-0 md:right-[85px] cxl:-right-[90px] c3xl:-right-[60px] md:bottom-[60px] bottom-[48px]">
                                                <p className="c3xl:text-[45px] text-[36px] font-bold text-main-primary font-opensans">200<span className="text-[60%] relative -top-[16px]">+</span></p>
                                                <h4 className="c3xl:text-[18px] cxl:text-[15px] text-[14px] uppercase leading-[1.4] relative inline-block font-poppins text-dark dark:text-white font-bold">Worldwide <br />Clients</h4>
                                            </li>
                                        </ul>
                                        <img className='c3xl:w-[80%] c2xl:w-[66%] cxl:w-[64%] md:w-[60%] w-[80%]' src={`/images/main/${item.img}`} alt="IMG" />
                                    </div>
                                </Tilt>
                            </div>
                            <div className="cxl:order-first cxl:w-1/2 px-3 w-full cxl:text-start text-center cxl:mb-0 mb-[120px]">
                                <span className='md:text-2xl text-[21px] font-bold font-poppins block mb-3'>{item.subtitle}</span>
                                <h2 className='cxl:text-[90px] md:text-[60px] text-[48px] font-bold font-poppins leading-[1.2] mb-2'>{item.name.split(' ')[0]} <span className='text-main-primary'>{item.name.split(' ')[1]}</span></h2>
                                <p className="mb-4 md:text-2xl text-[18px] font-opensans">A passionate <strong>{item.profession}</strong> from <strong>{item.location}!</strong></p>
                                <div className="flex items-center md:gap-12 gap-[30px] mt-[36px] csm:mt-[56px] cxl:justify-start justify-center md:flex-row flex-col">
                                    <Link href="/main" className='cxl:py-[15px] cxl:px-[42px] py-[12px] px-[30px] bg-main-primary text-white rounded-[5px] font-poppins uppercase md:text-[18px] text-[16px] font-bold transition-all duration-300 hover:bg-main-secondary'>Contact me</Link>

                                    <ul className='flex md:gap-7 gap-6'>
                                        {item.socialLinks.map((link, index)=>
                                            {
                                                let IconComponent;
                                                switch (link.platform) {
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
                                                  <li key={index}>
                                                    <Link href={link.url} rel="noopener noreferrer" target="_blank" className='md:text-2xl text-[21px] transition-all duration-300 hover:text-main-primary'> <IconComponent /> </Link>
                                                  </li>
                                                );
                                              }
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="hidden cxl:block">
                    <img className='absolute c3xl:left-[8%] c3xl:top-[22%] c2xl:left-[1%] c2xl:top-[16%] cxl:left-[3%] cxl:top-[20%] animate-animUpDown' src="/images/main/hero-element-1.png" alt="" />
                    <img className='absolute c3xl:right-[7%] cxl:right-[3%] top-[20%] animate-animMove' src="/images/main/hero-element-2.png" alt="" />
                    <img className='absolute c3xl:right-[5%] cxl:right-[2%] bottom-[12%] animate-animUpDown' src="/images/main/hero-element-3.png" alt="" />
                    <img className='absolute right-[48%] top-[30%] animate-animUpDown' src="/images/main/hero-element-4.png" alt="" />
                    <img className='absolute c2xl:left-[10%] cxl:left-[1%] c3xl:bottom-[18%] c2xl:bottom-[12%] cxl:bottom-[8%] animate-animMove' src="/images/main/hero-element-5.png" alt="" />
                </div>
            </section>
        </>
    )
}
