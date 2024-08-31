'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import VcardHeader from "@/components/VcardHeader";
import { VcardHero } from "@/components/VcardHero";
import { MainAbout } from "@/components/MainAbout";
import { MainIntro } from "@/components/MainIntro";
import { MainSkill } from "@/components/MainSkill";
import { MainPortfolio } from "@/components/MainPortfolio";
import { MainService } from "@/components/MainService";
import { MainTestimonial } from "@/components/MainTestimonial";
import { MainBlog } from "@/components/MainBlog";
import { MainPartner } from "@/components/MainPartner";
import { MainContact } from "@/components/MainContact";
import { VcardFooter } from "@/components/VcardFooter";
import { ResumeSection } from "@/components/ResumeSection";
import { VcardMenu } from "@/components/VcardMenu";
import { VcardSocialHero } from "@/components/VcardSocialHero";
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
            customColor="#adff00"
            customBorderColor="#adff00"
          />
        </div>

        <div className="hidden 2xl:block">
          <VcardMenu />
        </div>

        <div className="hidden 2xl:block">
          <VcardSocialHero />
        </div>

        <div className={`w-full z-[999] relative ${isSticky ? ' py-[30px] 2xl:py-0' : null}`}>
          <VcardHeader isSticky={isSticky} />
        </div>

        <VcardHero />

        <div className='container mt-[60px]'>
          <div className='px-[20px] bg-white dark:bg-[#282930] rounded-[15px]'>
            <MainIntro
              title="Welcome to my world" 
              paraOne="I'm a young tech enthasist and entrepreneur who love to take risk. I grew up in a tech family in New York City."
              paraClasses="text-main-light-two dark:text-main-dark-two"
              headWrapperClasses="vcard-intro"
              introShape="cxl:hidden"
              sectionPadding='py-[60px] md:py-[76px]'
              cardIconColor="text-[#d0cdda] group-hover:text-[#adff00] transition-all duration-300"
              cardWrapper="dark:bg-[#2d2e36] bg-white group"
            />
          </div>
        </div>

        <div className='container mt-[60px]'>
          <div className=' px-[20px] bg-[#222222] rounded-[15px]'>
            <CounterSection
              iconClasses="text-[#adff00]"
              titleClasses="text-[#ffffff]"
              paraClasses="text-main-light-two dark:text-main-dark-two"
              sectionPadding='py-[60px] md:py-[90px]'
            />
          </div>
        </div>
        
        <div className='container mt-[60px]'>
          <div className='px-[20px] bg-white dark:bg-[#282930] rounded-[15px]'>
            <MainAbout
              sectionPadding='py-[60px] md:py-[76px]'
              subtitleClass="text-[#adff00]"
              imgWrapper="about-img-wrapper-two text-center cxl:text-start flex justify-center cxl:justify-start "
              imageSrc='vcard/about-image-1.png'
              contentWrapper="cxl:mt-0 mt-[30px]"
              btnClass="bg-[#adff00] hover:bg-[#a3dd29] text-[#222222] hover:text-white"
              showHideClass="hidden"
            />
          </div>
        </div>

        <div className='container mt-[60px]'>
          <div className='px-[20px] bg-[#212228] rounded-[15px]'>
            <MainSkill
              sectionPadding='pt-[80px] pb-[60px] md:pt-[76px] md:pb-[60px] clg:py-[76px] py-[80px] md:py-[76px]'
              skillName="text-white dark:text-white"
              progressContainer="bg-white"
              paraClasses="text-[#bdb9cb]"
              showHideClass="hidden"
              primaryColor="text-[#adff00]"
              primaryBg="bg-[#adff00]"
              percentageLabel="text-[#adff00]"
              titleClass="text-white dark:text-white"
            />
          </div>
        </div>

        <div className='container mt-[60px]'>
          <div className='px-[20px] bg-white dark:bg-[#282930] rounded-[15px]'>
            <MainPortfolio
              sectionPadding='py-[60px] md:py-[76px]'
              headWrapperClasses="vcard-intro"
              showHideClass="hidden"
              primaryColor="text-[#adff00]"
              primaryBg="bg-[#adff00]"
              hoverPrimaryBorder="hover:border-[#adff00]"
              portfolioTabColor="bg-[#adff00] border-[#adff00] text-[#222222]"
              titleClass="text-white dark:text-white"
              portfolioBox="vcard-portfolio-box"
              portfolioIconColor="bg-[#222222] text-white"
              portfolioSubtitleColor="text-[#615978]"
              portfolioTitleColor="text-[#222222]"
              modalButtonColor="bg-[#adff00]"
            />
          </div>
        </div>
        
        <div className='container mt-[60px]'>
          <div className='px-[20px] bg-[#212228] rounded-[15px]'>
            <MainService
              sectionPadding='py-[60px] md:py-[76px]'
              titleClasses='text-white dark:text-white'
              paraClasses="text-[#bdb9cb]"
              headWrapperClasses="vcard-intro"
              showHideClass="hidden"
              serviceBoxWrapper='border-[#474747] hover:bg-white dark:hover:bg-[#3c3c3c]'
              serviceIconColor="text-[#adff00] bg-white bg-opacity-10 group-hover:bg-[#adff00] group-hover:text-dark"
              boxTitle="text-white group-hover:text-dark dark:group-hover:text-white"
              boxPara="text-[#b0aac0] group-hover:text-main-dark dark:group-hover:text-[#b0aac0]"
            />
          </div>
        </div>

        <div className='container mt-[60px]'>
          <div className='xs:px-[20px] px-[8px] bg-white dark:bg-[#282930] rounded-[15px] relative'>
            <ResumeSection
              sectionPadding='py-[60px] md:py-[76px]'
              headWrapperClasses="vcard-intro"  
              iconWrapper="bg-[#adff00]"
            />
          </div>
        </div>

        <div className='container mt-[60px]'>
          <div className='px-[20px] bg-[#212228] rounded-[15px]'>
            <MainTestimonial
              sectionPadding='py-[60px] md:py-[76px] vcard-testimonial'
              titleClasses='text-white dark:text-white'
              paraClasses="text-[#bdb9cb] dark:text-main-dark-two"
              headWrapperClasses="vcard-intro"
              testimonialCard="dark:bg-[#2d2e36]"
              testimonialCardShadow="shadow-custom-testimonial"
              bgColor="bg-[#adff00]"
              iconImage="/images/vcard/quote-icon.png"
              showHideClass="hidden" 
            />
          </div>
        </div>

        <div className='container mt-[60px]'>
          <div className='px-[20px] bg-white dark:bg-[#282930] rounded-[15px]'>
            <MainBlog
              sectionPadding='relative py-[60px] md:py-[76px]'
              headWrapperClasses="vcard-intro"
              hoverColor="hover:text-[#adff00]"
              showHideClass="hidden" 
            />
          </div>
        </div>

        <div className='container mt-[60px]'>
          <div className='px-[20px] bg-[#212228] rounded-[15px]'>
            <MainPartner />
          </div>
        </div>

        <div className='container mt-[60px]'>
          <div className='px-[20px] bg-white dark:bg-[#282930] rounded-[15px]'>
            <MainContact
              sectionPadding='relative py-[60px] md:py-[76px]'
              headWrapperClasses="vcard-intro"
              iconColor="text-[#222222] bg-[#adff00]"
              btnHover="hover:bg-[#9ce600] bg-[#adff00] hover:text-white text-[#222222]"
              formFocus="focus:border-[#adff00] dark:focus:border-[#adff00]"
              showHideClass="hidden" 
            />
          </div>
        </div>

        <div className='container mt-[60px]'>
          <div className='px-[20px] rounded-[15px] bg-[#212228]'>
            <VcardFooter scrollTopClass="bg-[#adff00] text-[#222222]" />
          </div>
        </div>

        <div className='container my-[48px]'>
          <div className="flex justify-between items-center gap-5 md:flex-row flex-col">
              <p className="text-[#615978] text-[16px] font-opensans">All rights reserved © 2023 <strong>eThemeStudio</strong></p>
              <ul className="flex md:gap-3 gap-1">
                  <li><Link href="/main" className='text-[#615978] font-opensans text-[16px] hover:text-[#adff00] transition-all'>Terms & Conditions</Link></li>
                  <li><Link href="/main" className='text-[#615978] font-opensans text-[16px] hover:text-[#adff00] transition-all'>Privacy Policy</Link></li>
              </ul>
          </div>
        </div>

      </div>
  );
}