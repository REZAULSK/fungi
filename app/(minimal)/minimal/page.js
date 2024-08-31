'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import CommonHeader from "@/components/CommonHeader";
import { MinimalHero } from "@/components/minimal/MinimalHero";
import { MainAbout } from "@/components/MainAbout";
import { MainIntro } from "@/components/MainIntro";
import { MainSkill } from "@/components/MainSkill";
import { MainPortfolio } from "@/components/MainPortfolio";
import { MainService } from "@/components/MainService";
import { MainTestimonial } from "@/components/MainTestimonial";
import { MainBlog } from "@/components/MainBlog";
import { MinimalPartner } from "@/components/minimal/MinimalPartner";
import { MainContact } from "@/components/MainContact";
import { MainFooter } from "@/components/MainFooter";
import { ResumeSection } from "@/components/ResumeSection";
import CustomCursor from "@/components/CustomCursor";
import { CounterSection } from '@/components/CounterSection';

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const threshold = 200; // Adjust this value as needed
    setIsSticky(scrollTop > threshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div>
        <div className='z-[999999] relative'>
          <CustomCursor
            customColor="#b6b9d9"
            customBorderColor="#b6b9d9"
          />
        </div>


        <div className="fixed top-0 left-0 z-[999] w-full">
          <CommonHeader
            logoSrc="/minimal/fungi_logo.png"
            primaryColor="text-[#ffffff] hover:text-[#e8e9f3]"
            activeColor="text-[#e8e9f3]"
            bgSticky="bg-dark"
            primaryHoverColor="hover:text-[#e8e9f3]"
            showHideClass="flex"
            menuResponsive="hidden c2xl:flex"
            mobileMenuResponsive="c2xl:hidden block"
            mobileMenuColor="text-[#c6c9e2]"
          />
        </div>

        <div className='bg-[#212228] h-screen'>
            <MinimalHero />
        </div>

        <div className='bg-white dark:bg-[#26272e] section_seperation section_separation_dark relative'>
          <MainIntro
              title="Welcome to my world" 
              paraOne="I'm a young tech enthasist and entrepreneur who love to take risk. I grew up in a tech family in New York City."
              paraClasses="text-main-light-two dark:text-main-dark-two"
              headWrapperClasses="minimal-intro"
              introShape="cxl:hidden"
              sectionPadding='py-[60px] md:py-[120px]'
              cardIconColor="text-[#c0bccd] group-hover:text-[#e1dfe7] transition-all duration-300"
              cardWrapper="dark:bg-[#2d2e36] bg-white group"
          />
        </div>

        <div className='bg-white dark:bg-[#26272e] section_seperation section_separation_dark relative'>
          <CounterSection
              iconClasses="text-[#c0bccd]"
              titleClasses="text-[#222222] dark:text-[#ffffff]"
              paraClasses="text-[#222222] dark:text-main-dark-two"
              sectionPadding='py-[60px] md:py-[120px]'
          />
        </div>

        <div className='bg-white dark:bg-[#26272e] section_seperation section_separation_dark relative'>
          <MainAbout
              sectionPadding='py-[60px] md:py-[120px]'
              subtitleClass="text-[#c0bccd]"
              imgWrapper="text-center cxl:text-start flex justify-center cxl:justify-start "
              imageSrc='minimal/about-image-1.jpg'
              contentWrapper="cxl:mt-0 mt-[30px]"
              btnClass="bg-[#222222] hover:bg-[#c0bccd] text-[#ffffff] hover:text-white"
              showHideClass="hidden"
          />
        </div>

        <div className='bg-white dark:bg-[#26272e] section_seperation section_separation_dark relative'>
          <MainSkill
              sectionPadding='pt-[80px] pb-[60px] md:pt-[76px] md:pb-[60px] clg:py-[120px] py-[80px] md:py-[76px]'
              skillName="text-[#222222] dark:text-white"
              progressContainer="bg-[#c0bccd] bg-opacity-30"
              paraClasses="text-main-dark"
              showHideClass="hidden"
              primaryColor="text-[#c0bccd]"
              primaryBg="bg-[#c0bccd]"
              percentageLabel="text-[#615978]"
              titleClass="text-[#222222] dark:text-white"
          />
        </div>

        <div className='bg-white dark:bg-[#26272e] section_seperation section_separation_dark relative'>
          <MainPortfolio
              sectionPadding='py-[60px] md:py-[120px]'
              headWrapperClasses="minimal-intro"
              showHideClass="hidden"
              primaryColor="text-[#adff00]"
              primaryBg="bg-[#adff00]"
              hoverPrimaryBorder="hover:border-[#222222]"
              portfolioTabColor="bg-[#222222] border-[#e8e9f3] text-[#ffffff]"
              titleClass="text-white dark:text-white"
              portfolioBox="minimal-portfolio-box"
              portfolioIconColor="bg-[#ffffff] text-[#222222]"
              portfolioSubtitleColor="text-[#ffffff]"
              portfolioTitleColor="text-[#ffffff]"
              modalButtonColor="bg-[#222222]"
          />
        </div>
    
        <div className='bg-white dark:bg-[#26272e] section_seperation section_separation_dark relative'>
          <MainService
              sectionPadding='py-[60px] md:py-[120px]'
              titleClasses='text-[#222222] dark:text-white'
              paraClasses="text-[#615978] dark:text-main-dark-two"
              headWrapperClasses="minimal-intro"
              showHideClass="hidden"
              serviceBoxWrapper='dark:border-[#3a3a3a] hover:bg-[#222222] dark:hover:bg-[#2d2e36]'
              serviceIconColor="border-[#e0e0e0] bg-[#e8e9f3] text-[#222222] dark:text-[#ffffff] dark:bg-[#33353e] group-hover:bg-[#ffffff] group-hover:text-dark"
              boxTitle="text-[#222222] group-hover:text-white dark:text-[#ffffff] dark:group-hover:text-white"
              boxPara="text-[#615978] group-hover:text-[#b0aac0] dark:text-[#b0aac0] dark:group-hover:text-[#b0aac0]"
          />
        </div>

        <div className='bg-white dark:bg-[#26272e] section_seperation section_separation_dark relative'>
          <ResumeSection
              sectionPadding='py-[60px] md:py-[120px]'
              headWrapperClasses="minimal-intro" 
              iconWrapper="bg-[#e8e9f3]"
          />
        </div>

        <div className='bg-white dark:bg-[#26272e] section_seperation section_separation_dark relative'>
          <MainTestimonial
              sectionPadding='py-[60px] md:py-[120px] minimal-testimonial'
              titleClasses='text-[#222222] dark:text-white'
              paraClasses="text-[#948daa] dark:text-main-dark-two"
              headWrapperClasses="minimal-intro"
              testimonialCard="dark:bg-[#2d2e36]"
              testimonialCardShadow="border border-[#e0e0e0] dark:border-[#474747]"
              testimonialShape="hidden"
              bgColor="bg-[#e8e9f3]"
              iconImage="/images/vcard/quote-icon.png"
              showHideClass="hidden" 
          />
        </div>

        <div className='bg-white dark:bg-[#26272e] section_seperation section_separation_dark relative'>
          <MainBlog
              sectionPadding='relative py-[60px] md:py-[120px]'
              headWrapperClasses="minimal-intro"
              hoverColor="hover:text-[#e8e9f3]"
              showHideClass="hidden" 
          />
        </div>

        <div className='bg-white dark:bg-[#26272e] section_seperation section_separation_dark relative'>
          <MinimalPartner />
        </div>

        <div className='bg-white dark:bg-[#26272e] relative'>
          <MainContact
              sectionPadding='relative py-[60px] md:py-[120px]'
              headWrapperClasses="minimal-intro"
              iconColor="text-[#222222] bg-[#e8e9f3]"
              btnHover="bg-[#222222] hover:bg-[#c0bccd] text-[#ffffff] hover:text-white"
              formFocus="focus:border-[#adff00] dark:focus:border-[#adff00]"
              showHideClass="hidden" 
          />
        </div>

        <MainFooter 
          scrollTopClass='bg-[#d7d9ea] text-[#222222]' 
          footerBgColor="bg-[#212228]"
          backgroundImageUrl=""
          footerLogo="/images/minimal/fungi_logo.png"
          bgColor="bg-[#212228]"
          bgHoverColor="hover:text-[#e8e9f3]"
        />

      </div>
  );
}