import React from 'react'
import socialLinks from '@/data/data.json'
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";

export function VcardSocialHero(props) {
    return (
        <>
            <ul className="flex gap-3 flex-col fixed top-1/2 -translate-y-1/2 z-[9] left-[60px]">
                {socialLinks.socialLinks.map((link, index) => (
                    <li key={index} className=''>
                        <a href={link.link} target="_blank" rel="noreferrer" className={`h-[48px] w-[48px] flex items-center justify-center rounded-full text-white transition-all duration-300 hover:text-[#adff00] ${link.icon === 'FaFacebookF' && 'bg-[#1877f2]'} ${link.icon === 'FaTwitter' && 'bg-[#1da1f2]'} ${link.icon === 'FaLinkedin' && 'bg-[#0077b5]'}  ${link.icon === 'FaInstagram' && 'bg-[#405de6]'}`}>
                            {(() => {
                                switch (link.icon) {
                                case 'FaFacebookF':
                                    return <FaFacebookF />
                                case 'FaTwitter':
                                    return <FaTwitter />
                                case 'FaLinkedin':
                                    return <FaLinkedin />
                                case 'FaInstagram':
                                    return <FaInstagram />
                                default:
                                    return null
                                }
                            })()}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}
