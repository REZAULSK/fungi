'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram  } from "react-icons/fa"
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import data from "@/data/data.json";
const { menuItems, socialLinks } = data;

export default function SidebarHeader(props) {
    const [activeLink, setActiveLink] = useState('');
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        function windowScroll() {
            const navbar = document.getElementById("navbar");
            if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                if (navbar !== null) {
                    navbar.classList.add("is-sticky");
                    navbar.classList.add("bg-dark");
                    setIsSticky(true);
                }
            } else {
                if (navbar !== null) {
                    navbar.classList.remove("is-sticky");
                    navbar.classList.remove("bg-dark");
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
        <nav className={`navbar transition-all duration-300 w-full`} id="navbar">
            <div className="p-[30px] flex flex-col items-start justify-between relative">
                <Link href="/sidebar" className="navbar-brand w-[120px] c3xl:w-[160px] mb-[30px]">
                    <img className={`inline-block w-[120px]`} src={`/images/${props.logoSrc}`} alt="" />
                </Link>

                <img className="rounded-[12px] border-[3px] border-main-primary w-[120px] c3xl:w-[184px]" src="/images/sidebar/sidenav-photo.jpg" alt="" />

                {/* Navbar Menu */}
                <div className={`navigation sidebar_nav w-full mt-[30px] ${props.menuResponsive}`} id="menu-collapse">
                    <ul className="navbar-nav flex flex-col items-start font-poppins w-full border-dotted border-t-[1px] border-[#ffffff] border-opacity-20 mr-[5px]" id="navbar-navlist">
                        {menuItems.map((section) => (
                            <li key={section.title} className="nav-item w-full">
                                <ScrollLink
                                    to={section.title}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    className={`nav-link text-[16px] c3xl:text-[18px] font-bold cursor-pointer border-dotted border-b-[1px] border-[#ffffff] border-opacity-20 flex w-full py-[12px] c3xl:py-[18px] ${activeLink === section.title ? props.activeColor : props.primaryColor}`}
                                    onSetActive={handleSetActive}
                                    activeClass="active"
                                >
                                    {section.title.charAt(0).toUpperCase() + section.title.slice(1)}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}