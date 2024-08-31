'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram  } from "react-icons/fa"
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import data from "@/data/data.json";
import MobileMenu from "../MobileMenu";
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
        <nav className={`navbar cxl:hidden transition-all duration-300 ${isSticky ? 'dark py-[20px] bg-dark' : 'py-[30px]'}`} id="navbar">
            <div className="container flex flex-wrap items-center justify-between relative">
                <Link href="/main" className="navbar-brand md:me-8 w-[108px] md:w-[160px]">
                    <img className={`inline-block ${isSticky ? 'w-[108px]' : ''}`} src={`/images/${props.logoSrc}`} alt="" />
                </Link>

                <div className={props.mobileMenuResponsive}>
                    <MobileMenu primaryColor={props.mobileMenuColor} />
                </div>
            </div>
        </nav>
    );
}