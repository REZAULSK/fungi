'use client';
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram  } from "react-icons/fa"
import socialLinks from '@/data/data.json'
import { ScrollToTop } from "./ScrollToTop";

export function VcardFooter(props) {
    const socials = socialLinks.socialLinks;
    return (
        <>
            <div className="pt-[60px] pb-[60px] md:pt-[80px] md:pb-[80px]">
                <div className="container relative">
                    <div className="w-full clg:w-1/2 mx-auto text-center flex flex-col justify-center items-center">
                        <Link href="/main" className="w-[108px] md:w-[160px] mb-[40px]">
                            <img className='w-[148px]' src="/images/vcard/fungi_logo.png" alt="" />
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
                                            <Link href={link.link} rel="noopener noreferrer" target="_blank" className='md:text-2xl text-[21px] transition-all duration-300 hover:text-[#adff00] text-white hover:pb-1 mt-0'> <IconComponent /> </Link>
                                        </li>
                                    );
                                    }
                            )}
                        </ul>
                    </div>
                    <ScrollToTop
                        customColor={props.scrollTopClass}
                    />
                </div>
            </div>
        </>
    )
}
