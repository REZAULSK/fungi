'use client';
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram  } from "react-icons/fa"
import socialLinks from '@/data/data.json'
import { ScrollToTop } from "./ScrollToTop";

export function MainFooter(props) {
    const socials = socialLinks.socialLinks;
    return (
        <>
            <div className={`pt-[60px] pb-[60px] md:pt-[90px] md:pb-[60px] ${props.footerBgColor}`} style={{ backgroundImage: `url(${props.backgroundImageUrl})`, backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover" }}>
                <div className="container relative z-20">
                    <div className="w-full clg:w-1/2 mx-auto text-center flex flex-col justify-center items-center">
                        <Link href="/main" className="w-[108px] md:w-[160px] mb-[40px]">
                            <img className='w-[148px]' src={props.footerLogo} alt="" />
                        </Link>
                        <p className="text-[#b0aac0] text-[18px] font-opensans">Kilaboris nisi ut aliquip ex ea commodo consequat uis aute cupidatat non proident sunt in culd est laborum.</p>
                        <ul className='flex md:gap-7 gap-6 mt-[50px]'>
                            {socials.map((link, index)=>
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
                                        <li key={index} className="hover:-translate-y-[5px] transition-all duration-300">
                                            <Link href={link.link} rel="noopener noreferrer" target="_blank" className={`md:text-2xl text-[21px] transition-all duration-300 text-white hover:pb-1 mt-0 ${props.bgHoverColor}`}> <IconComponent /> </Link>
                                        </li>
                                    );
                                    }
                            )}
                        </ul>
                    </div>
                    <div className="md:mt-[100px] mt-[60px] flex justify-between items-center gap-5 md:flex-row flex-col">
                        <p className="text-[#b0aac0] text-[16px] font-opensans">All rights reserved © 2023 <strong>eThemeStudio</strong></p>
                        <ul className="flex md:gap-3 gap-1">
                            <li><Link href="/main" className={`text-[#b0aac0] font-opensans text-[16px] transition-all ${props.bgHoverColor}`}>Terms & Conditions</Link></li>
                            <li><Link href="/main" className={`text-[#b0aac0] font-opensans text-[16px] transition-all ${props.bgHoverColor}`}>Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <ScrollToTop customColor={props.scrollTopClass} />
                </div>
            </div>
        </>
    )
}
