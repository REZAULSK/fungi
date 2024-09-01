'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import CommonHeader from "@/components/boxed/BoxedHeader";
import { BoxedHero } from "@/components/boxed/BoxedHero";
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
            customColor="#ff69b4"
            customBorderColor="#ff69b4"
          />
        </div>

        <div className='container px-[20px]'>
          <div className="fixed top-0 left-0 z-[999] w-full">
            <CommonHeader
              logoSrc="/boxed/fungi_logo.png"
              primaryColor="text-[#ffffff] hover:text-[#ff69b4]"
              activeColor="text-[#ff69b4]"
              bgSticky="bg-dark"
              primaryHoverColor="hover:text-[#ff69b4]"
              showHideClass="flex"
              menuResponsive="hidden c2xl:flex"
              mobileMenuResponsive="c2xl:hidden block"
              mobileMenuColor="text-[#c6c9e2]"
            />
          </div>
        </div>

        <BoxedHero />

        <div className='container'>
          <div className='cxl:px-[30px] px-[20px] bg-white dark:bg-[#282930]'>
            <MainIntro
              title="Welcome to my world" 
              paraOne="I'm a young tech enthasist and entrepreneur who love to take risk. I grew up in a tech family in New York City."
              paraClasses="text-main-light-two dark:text-main-dark-two"
              headWrapperClasses="boxed-intro"
              introShape="cxl:hidden"
              sectionPadding='py-[60px] md:py-[120px]'
              cardIconColor="text-[#d0cdda] group-hover:text-[#ff69b4] transition-all duration-300"
              cardWrapper="dark:bg-[#2d2e36] bg-white group"
            />
          </div>
        </div>

        <div className='container'>
          <div className='px-[20px] bg-[#212228]'>
            <CounterSection
              iconClasses="text-[#ff69b4]"
              titleClasses="text-[#ffffff]"
              paraClasses="text-main-light-two dark:text-main-dark-two"
              sectionPadding='py-[60px] md:py-[120px]'
            />
          </div>
        </div>
        
        <div className='container'>
          <div className='cxl:px-[30px] px-[20px] bg-white dark:bg-[#282930]'>
            <MainAbout
              sectionPadding='py-[60px] md:py-[120px]'
              subtitleClass="text-[#ff69b4]"
              imgWrapper="text-center cxl:text-start flex justify-center cxl:justify-start "
              imageSrc='boxed/about-image-1.png'
              imageSrcTwo=""
              contentWrapper="cxl:mt-0 mt-[30px]"
              btnClass="bg-[#ff69b4] hover:bg-[#ff0381] text-[#ffffff] hover:text-white"
              showHideClass="hidden"
            />
          </div>
        </div>

        <div className='container'>
          <div className='cxl:px-[30px] px-[20px] bg-[#212228]'>
            <MainSkill
              sectionPadding='pt-[80px] pb-[60px] md:pt-[76px] md:pb-[60px] clg:py-[120px] py-[80px] md:py-[76px]'
              skillName="text-white dark:text-white"
              progressContainer="bg-white"
              paraClasses="text-[#bdb9cb]"
              showHideClass="hidden"
              primaryColor="text-[#ff69b4]"
              primaryBg="bg-[#ff69b4]"
              percentageLabel="text-[#ff69b4]"
              titleClass="text-white dark:text-white"
            />
          </div>
        </div>

        <div className='container'>
          <div className='cxl:px-[30px] px-[20px] bg-white dark:bg-[#282930]'>
            <MainPortfolio
              sectionPadding='py-[60px] md:py-[120px]'
              headWrapperClasses="boxed-intro"
              showHideClass="hidden"
              primaryColor="text-[#ff69b4]"
              primaryBg="bg-[#ff69b4]"
              hoverPrimaryBorder="hover:border-[#ff69b4]"
              portfolioTabColor="bg-[#ff69b4] border-[#ff69b4] text-[#ffffff]"
              titleClass="text-white dark:text-white"
              portfolioBox="boxed-portfolio-box"
              portfolioIconColor="bg-[#ffffff] text-[#222222]"
              portfolioSubtitleColor="text-[#ffffff]"
              portfolioTitleColor="text-[#ffffff]"
              modalButtonColor="bg-[#ff69b4]"
            />
          </div>
        </div>
        
        <div className='container'>
          <div className='cxl:px-[30px] px-[20px] bg-[#212228]'>
            <MainService
              sectionPadding='py-[60px] md:py-[120px]'
              titleClasses='text-white dark:text-white'
              paraClasses="text-[#bdb9cb]"
              headWrapperClasses="boxed-intro"
              showHideClass="hidden"
              serviceBoxWrapper='border-[#474747] hover:bg-white dark:hover:bg-[#3c3c3c]'
              serviceIconColor="text-[#ff69b4] bg-white bg-opacity-10 group-hover:bg-[#ff69b4] group-hover:text-dark"
              boxTitle="text-white group-hover:text-dark dark:group-hover:text-white"
              boxPara="text-[#b0aac0] group-hover:text-main-dark dark:group-hover:text-[#b0aac0]"
            />
          </div>
        </div>

        <div className='container'>
          <div className='xs:px-[20px] px-[8px] bg-white dark:bg-[#282930] relative'>
            <ResumeSection
              sectionPadding='py-[60px] md:py-[120px]'
              headWrapperClasses="boxed-intro"  
              iconWrapper="bg-[#ff69b4] text-[#ffffff]"
            />
          </div>
        </div>

        <div className='container'>
          <div className='cxl:px-[30px] px-[20px] bg-[#212228]'>
            <MainTestimonial
              sectionPadding='py-[60px] md:py-[120px] main-testimonial boxed-testimonial'
              titleClasses='text-white dark:text-white'
              paraClasses="text-[#bdb9cb] dark:text-main-dark-two"
              headWrapperClasses="boxed-intro"
              testimonialCard="dark:bg-[#2d2e36]"
              testimonialCardShadow="shadow-custom-testimonial"
              bgColor="bg-[#ff69b4]"
              iconImage="/images/boxed/quote-icon.png"
              showHideClass="hidden" 
            />
          </div>
        </div>

        <div className='container'>
          <div className='cxl:px-[30px] px-[20px] bg-white dark:bg-[#282930]'>
            <MainBlog
              sectionPadding='relative py-[60px] md:py-[120px]'
              headWrapperClasses="boxed-intro"
              hoverColor="hover:text-[#ff69b4]"
              showHideClass="hidden" 
            />
          </div>
        </div>

        <div className='container'>
          <div className='cxl:px-[30px] px-[20px] bg-[#212228]'>
            <MainPartner />
          </div>
        </div>

        <div className='container'>
          <div className='cxl:px-[30px] px-[20px] bg-white dark:bg-[#282930]'>
            <MainContact
              sectionPadding='relative py-[60px] md:py-[120px]'
              headWrapperClasses="boxed-intro"
              iconColor="text-[#ffffff] bg-[#ff69b4]"
              btnHover="hover:bg-[#ff0381] bg-[#ff69b4] hover:text-white text-[#ffffff]"
              formFocus="focus:border-[#ff69b4] dark:focus:border-[#ff69b4]"
              showHideClass="hidden" 
            />
          </div>
        </div>

        <div className='container'>
          <div className='cxl:px-[30px] px-[20px] bg-[#212228]'>
            <MainFooter 
              scrollTopClass='bg-[#ff69b4] text-[#ffffff]' 
              footerBgColor="bg-[#212228]"
              backgroundImageUrl=""
              footerLogo="/images/boxed/fungi_logo.png"
              bgColor="bg-[#212228]"
              bgHoverColor="hover:text-[#ff69b4]"
            />
          </div>
        </div>

      </div>
  );
}