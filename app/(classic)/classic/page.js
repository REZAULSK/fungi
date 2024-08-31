'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import CommonHeader from "@/components/CommonHeader";
import { ClassicHero } from "@/components/classic/ClassicHero";
import { MainAbout } from "@/components/MainAbout";
import { MainIntro } from "@/components/MainIntro";
import { MainSkill } from "@/components/MainSkill";
import { MainPortfolio } from "@/components/MainPortfolio";
import { MainService } from "@/components/MainService";
import { MainTestimonial } from "@/components/MainTestimonial";
import { MainBlog } from "@/components/MainBlog";
import { MainPartner } from "@/components/MainPartner";
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
            customColor="#fd562a"
            customBorderColor="#fd562a"
          />
        </div>


        <div className="fixed top-0 left-0 z-[999] w-full">
          <CommonHeader
            logoSrc="/classic/main_logo.png"
            primaryColor="text-[#ffffff] hover:text-main-primary"
            activeColor="text-main-primary"
            bgSticky="bg-dark"
            primaryHoverColor="hover:text-main-primary"
            showHideClass="flex"
            menuResponsive="hidden c2xl:flex"
            mobileMenuResponsive="c2xl:hidden block"
            mobileMenuColor="text-main-primary"
          />
        </div>

        <div className='bg-[#212228] h-screen'>
            <ClassicHero />
        </div>

        <div className='bg-white dark:bg-[#26272e] relative'>
          <MainIntro
              title="Welcome to my world" 
              paraOne="I'm a young tech enthasist and entrepreneur who love to take risk. I grew up in a tech family in New York City."
              paraClasses="text-main-light-two dark:text-main-dark-two"
              headWrapperClasses="main-intro"
              introShape="cxl:hidden"
              sectionPadding='py-[60px] md:py-[120px]'
              cardIconColor="text-[#c0bccd] group-hover:text-main-primary transition-all duration-300"
              cardWrapper="dark:bg-[#2d2e36] bg-white group"
          />
        </div>

        <div className='bg-[#212228] relative'>
          <CounterSection
              iconClasses="text-main-primary"
              titleClasses="text-[#ffffff]"
              paraClasses="text-[#222222]"
              sectionPadding='py-[60px] md:py-[120px]'
          />
        </div>

        <div className='bg-white dark:bg-[#26272e] relative'>
          <MainAbout
              sectionPadding='py-[60px] md:py-[120px]'
              subtitleClass="text-main-primary"
              imgWrapper="text-center cxl:text-start flex justify-center cxl:justify-start "
              imageSrc='classic/about-image-1.png'
              contentWrapper="cxl:mt-0 mt-[30px]"
              btnClass="bg-main-primary hover:bg-main-secondary text-[#ffffff] hover:text-white"
              showHideClass="hidden"
          />
        </div>

        <div className='bg-[#212228] relative'>
          <MainSkill
              sectionPadding='pt-[80px] pb-[60px] md:pt-[76px] md:pb-[60px] clg:py-[120px] py-[80px] md:py-[76px]'
              skillName="text-[#ffffff]"
              progressContainer="bg-[#e9ecef]"
              paraClasses="text-[#bdb9cb]"
              showHideClass="hidden"
              primaryColor="text-main-primary"
              primaryBg="bg-main-primary"
              percentageLabel="text-main-primary"
              titleClass="text-[#ffffff]"
          />
        </div>

        <div className='bg-white dark:bg-[#26272e] relative'>
          <MainPortfolio
              sectionPadding='py-[60px] md:py-[120px]'
              headWrapperClasses="main-intro"
              showHideClass="hidden"
              primaryColor="text-main-primary"
              primaryBg="bg-main-primary"
              hoverPrimaryBorder="hover:border-main-primary"
              portfolioTabColor="bg-main-primary border-[#e8e9f3] text-[#ffffff]"
              titleClass="text-white dark:text-white"
              portfolioBox="main-portfolio-box"
              portfolioIconColor="bg-[#ffffff] text-[#222222]"
              portfolioSubtitleColor="text-[#ffffff]"
              portfolioTitleColor="text-[#ffffff]"
              modalButtonColor="bg-main-primary"
          />
        </div>
    
        <div className='bg-[#212228] relative'>
          <MainService
              sectionPadding='py-[60px] md:py-[120px]'
              titleClasses='text-[#ffffff]'
              paraClasses="text-[#bdb9cb]"
              headWrapperClasses="main-intro"
              showHideClass="hidden"
              serviceBoxWrapper='border-[#373737] hover:bg-[#ffffff]'
              serviceIconColor="border-[#e0e0e0] bg-[#38393E] text-main-primary group-hover:bg-main-primary group-hover:text-[#ffffff]"
              boxTitle="text-[#ffffff] group-hover:text-[#222222]"
              boxPara="text-[#b0aac0] group-hover:text-[#615978]"
          />
        </div>

        <div className='bg-white dark:bg-[#26272e] relative'>
          <ResumeSection
              sectionPadding='py-[60px] md:py-[120px]'
              headWrapperClasses="main-intro" 
              iconWrapper="bg-main-primary text-[#ffffff]"
          />
        </div>

        <div className='bg-[#212228] relative'>
          <MainTestimonial
              sectionPadding='py-[60px] md:py-[120px] minimal-testimonial'
              titleClasses='text-[#ffffff]'
              paraClasses="text-[#948daa] dark:text-main-dark-two"
              headWrapperClasses="main-intro"
              testimonialCard="dark:bg-[#2d2e36]"
              testimonialCardShadow="shadow-custom-testimonial dark:bg-[#2d2e36]"
              testimonialShape="flex"
              bgColor="bg-main-primary"
              iconImage="/images/classic/quote-icon.png"
              showHideClass="hidden" 
          />
        </div>

        <div className='bg-white dark:bg-[#26272e] relative'>
          <MainBlog
              sectionPadding='relative py-[60px] md:py-[120px]'
              headWrapperClasses="main-intro"
              hoverColor="hover:text-main-primary"
              showHideClass="hidden" 
          />
        </div>

        <div className='bg-[#212228] relative'>
          <MainPartner />
        </div>

        <div className='bg-white dark:bg-[#26272e] relative'>
          <MainContact
              sectionPadding='relative py-[60px] md:py-[120px]'
              headWrapperClasses="main-intro"
              iconColor="text-[#ffffff] bg-main-primary"
              btnHover="bg-main-primary hover:bg-main-secondary text-[#ffffff] hover:text-white"
              formFocus="focus:border-main-primary dark:focus:border-main-primary"
              showHideClass="hidden" 
          />
        </div>

        <MainFooter 
          scrollTopClass='bg-main-primary text-[#ffffff]' 
          footerBgColor="bg-[#212228]"
          backgroundImageUrl=""
          footerLogo="/images/main/main_logo.png"
          bgColor="bg-main-primary"
          bgHoverColor="hover:text-main-primary"
        />

      </div>
  );
}