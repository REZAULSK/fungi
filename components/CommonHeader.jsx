'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram  } from "react-icons/fa"
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import data from "@/data/data.json";
import MobileMenu from "./MobileMenu";
const { menuItems, socialLinks } = data;

export default function CommonHeader(props) {
    const [activeLink, setActiveLink] = useState('');
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        function windowScroll() {
            const navbar = document.getElementById("navbar");
            if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                if (navbar !== null) {
                    navbar.classList.add("is-sticky");
                    navbar.classList.add(props.bgSticky);
                    // navbar.classList.add(props.bgStickyDark);
                    setIsSticky(true);
                }
            } else {
                if (navbar !== null) {
                    navbar.classList.remove("is-sticky");
                    navbar.classList.remove(props.bgSticky);
                    // navbar.classList.remove(props.bgStickyDark);
                    setIsSticky(false);
                }
            }

            const mybutton = document.getElementById("back-to-top");
            if (mybutton != null) {
                if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                    mybutton.classList.add("flex");
                    mybutton.classList.remove("hidden");
                } else {
                    mybutton.classList.add("hidden");
                    mybutton.classList.remove("flex");
                }
            }
        }

        window.addEventListener("scroll", windowScroll);
        return () => {
            window.removeEventListener("scroll", windowScroll);
        };
    }, []);

    useEffect(() => {
        Events.scrollEvent.register('begin', function () {
            // console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            // console.log("end", arguments);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    const handleSetActive = (to) => {
        setActiveLink(to);
    };

    return (
        <nav className={`navbar transition-all duration-300 ${isSticky ? 'dark py-[20px]' : 'py-[30px]'}`} id="navbar">
            <div className="container flex flex-wrap items-center justify-between relative">
                <Link href="/main" className="navbar-brand md:me-8 w-[108px] md:w-[160px]">
                    <img className={`inline-block ${isSticky ? 'w-[108px]' : ''}`} src={`/images/${props.logoSrc}`} alt="" />
                </Link>

                {/* Navbar Menu */}
                <div className={`navigation lg_992:order-1 lg_992:flex ms-auto ${props.menuResponsive}`} id="menu-collapse">
                    <ul className="navbar-nav flex items-center gap-[39px] font-poppins" id="navbar-navlist">
                        {menuItems.map((section) => (
                            <li key={section.title} className="nav-item">
                                <ScrollLink
                                    to={section.title}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    className={`nav-link text-[18px] font-bold cursor-pointer ${activeLink === section.title ? props.activeColor : props.primaryColor}`}
                                    onSetActive={handleSetActive}
                                    activeClass="active"
                                >
                                    {section.title.charAt(0).toUpperCase() + section.title.slice(1)}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                    <ul className={`items-center gap-6 header_social ${props.showHideClass}`}>
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
                                        <Link href={link.link} rel="noopener noreferrer" target="_blank" className={`text-[18px] transition-all duration-300 text-white mt-0 ${props.primaryHoverColor}`}> <IconComponent /> </Link>
                                    </li>
                                );
                                }
                        )}
                    </ul>
                </div>
                <div className={props.mobileMenuResponsive}>
                    <MobileMenu primaryColor={props.mobileMenuColor} />
                </div>
            </div>
        </nav>
    );
}