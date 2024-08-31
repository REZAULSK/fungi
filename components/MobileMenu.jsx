'use client';

import React, { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram  } from "react-icons/fa"
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import data from "@/data/data.json";
const { menuItems, socialLinks } = data;

export default function MobileMenu(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <div className="">
      <button
        onClick={toggleMenu}
        className="p-2 text-white rounded-[3px] focus:outline-none border-[1px] border-[#605F5F] border-opacity-100"
      >
        {isOpen ? (
          <svg
            width="20" 
            height="20" 
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="white" 
            stroke="currentColor" 
            strokeWidth={2} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="feather feather-menu">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-[3rem] bg-white shadow-lg w-[97%] left-1/2 -translate-x-1/2">
          <nav className="flex flex-col items-start">
          {menuItems.map((section) => (
                <span key={section.title} className="nav-item px-5 py-3 border-b border-[#e0e0e0] w-full">
                    <ScrollLink
                        to={section.title}
                        spy={true}
                        smooth={true}
                        duration={500}
                        className={`nav-link text-[18px] font-bold cursor-pointer ${activeLink === section.title ? props.primaryColor : 'text-dark'}`}
                        onSetActive={handleSetActive}
                        activeClass="active"
                    >
                        {section.title.charAt(0).toUpperCase() + section.title.slice(1)}
                    </ScrollLink>
                </span>
            ))}
          </nav>
          <ul className={`items-center gap-6 flex px-5 py-5`}>
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
                                        <Link href={link.link} rel="noopener noreferrer" target="_blank" className={`text-[18px] transition-all duration-300 mt-0 ${props.primaryColor}`}> <IconComponent /> </Link>
                                    </li>
                                );
                                }
                        )}
                    </ul>
        </div>
      )}
    </div>
  );
}