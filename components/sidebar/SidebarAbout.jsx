'use client';
import React from 'react'
import Link from 'next/link'
import { aboutData } from '@/data/data'
import { SectionHeadTwo } from '../SectionHeadTwo';
import { Tilt } from 'react-tilt'

export function SidebarAbout(props) {
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
            <div id='about' className={`relative ${props.sectionPadding}`}>
                <div className='container'>
                    <div className="grid grid-cols-1 cxl:grid-cols-2 gap-4">
                        <Tilt options={defaultOptions}>
                            <div className={`relative ${props.imgWrapper}`}>
                                <img src={`/images/${props.imageSrc}`} alt="" />
                                <img className={`absolute -bottom-[96px] cxl:-bottom-[200px] right-0 sm:right-auto sm:left-[280px] md:left-[312px] cxl:left-0 w-[40%] csm:w-auto ${props.showHideClass}`} src={`/images/${props.imageSrcTwo}`} alt="" />
                            </div>
                        </Tilt>
                        <div className={`pr-3 ${props.contentWrapper}`}>
                            <SectionHeadTwo
                                title="Senior Web Designer from New York" 
                                subTitle="About me" 
                                paraOne="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                paraTwo="Tabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat."
                                subtitleClass={`${props.subtitleClass} text-[18px] uppercase block font-poppins font-bold`}
                                titleClasses="text-dark dark:text-white text-[30px] sm:text-[48px] mb-[30px] sm:mb-[30px] font-bold font-poppins leading-[1.2]"
                                paraClasses="text-main-dark dark:text-main-light-two text-[16px] sm:text-[18px] font-opensans"
                            />
                            <div className="pt-[36px]">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {aboutData.map((item, index) => (
                                        <div className='' key={index}>
                                            <h4 className='text-[16px] font-poppins text-dark dark:text-white uppercase mb-1 font-bold'>{item.title}</h4>
                                            <span className='text-[18px] font-opensans text-main-dark dark:text-main-dark-two'>{item.info}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex mt-9">
                                    <Link href="/main" className={`cxl:py-[15px] cxl:px-[42px] py-[12px] px-[30px] rounded-[5px] font-poppins uppercase md:text-[18px] text-[16px] font-bold transition-all duration-300 ${props.btnClass}`}>Download CV</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden c3xl:block">
                    <img className='absolute c3xl:right-[3%] cxl:right-[8%] -top-[8%] animate-animUpDown' src="/images/main/about-element-1.png" alt="" />
                    <img className='absolute c3xl:left-[5%] cxl:left-[2%] -bottom-[3%] animate-animUpDown' src="/images/main/about-element-2.png" alt="" />
                </div>
            </div>
        </>
    )
}
