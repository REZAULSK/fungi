'use client';

import React from "react";
import Link from "next/link";
import VcardMobileMenu from "./VcardMobileMenu";

export default function VcardHeader(props) {
    return (
        <nav className={`navbar transition-all duration-300 ${props.isSticky ? 'fixed 2xl:relative w-full top-0 bg-[#222222] 2xl:bg-transparent py-[14px] 2xl:py-[30px]' : ' py-[30px]'}`} id="navbar">
            <div className="container flex flex-wrap items-center justify-between relative">
                <Link href="/main" className="navbar-brand md:me-8 w-[108px] md:w-[160px]">
                    <img className={`inline-block ${props.isSticky && 'w-[108px]'}`} src="/images/vcard/fungi_logo.png" alt="" />
                </Link>

                {/* Navbar Menu */}
                <div className="flex items-center gap-3">
                    <Link href={"#"} className="py-3 px-[24px] uppercase text-[#222222] font-poppins font-bold bg-[#adff00] rounded-[5px] flex transition-all hover:text-[#ffffff] text-[16px]">Download CV</Link>
                    <div className="2xl:hidden block">
                        <VcardMobileMenu />
                    </div>
                </div>
            </div>
        </nav>
    );
}