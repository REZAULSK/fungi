import CommonHeader from "@/components/CommonHeader";
import { HackerHero } from "@/components/hacker/HackerHero";
import { MainAbout } from "@/components/MainAbout";
import { MainIntro } from "@/components/MainIntro";
import { MainSkill } from "@/components/MainSkill";
import { MainPortfolio } from "@/components/MainPortfolio";
import { MainService } from "@/components/MainService";
import { MainWork } from "@/components/MainWork";
import { MainTestimonial } from "@/components/MainTestimonial";
import { MainBlog } from "@/components/MainBlog";
import { MainPartner } from "@/components/MainPartner";
import { MainContact } from "@/components/MainContact";
import { MainFooter } from "@/components/MainFooter";

export default function Home() {
  const introCustomStyles = {
    backgroundImage: "url('../images/main/skill-bg.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };
  const testimonialCustomStyles = {
    backgroundImage: "url('../images/hacker/testimonial-bg.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };
  const heroBg = {
    backgroundImage: "url('../images/freelancer/hero-bg.jpg')",
    backgroundPosition: "center center",
    overflow: "hidden",
    position: "relative",
    zIndex: "1",
  }
  const heroBgDark = {
    backgroundImage: "url('../images/freelancer/hero-bg-dark.jpg')",
    backgroundPosition: "center center",
    overflow: "hidden",
    position: "relative",
    zIndex: "1",
  }
  return (
      <div>
        <div className="fixed top-0 left-0 z-[999] w-full">
          <CommonHeader
            logoSrc="hacker/fungi_logo.png"
            lightLogoSrc="hacker/fungi_logo.png"
            primaryColor="text-[#ffffff] hover:text-[#3CB371] dark:text-white dark:hover:text-[#3CB371]"
            activeColor="text-[#3CB371]"
            bgSticky="bg-[#222222]"
            bgStickyDark="dark:bg-[#222222]"
            showHideClass="hidden"
            menuResponsive="hidden cxl:flex"
            mobileMenuResponsive="cxl:hidden block"
            mobileMenuColor="text-[#3CB371]"
          />
        </div>

        <HackerHero
          heroBg={heroBg}
          heroBgDark={heroBgDark}
        />

        <MainIntro
          title="Welcome to my world" 
          paraOne="I'm a young tech enthasist and entrepreneur who love to take risk. I grew up in a tech family in New York City."
          paraClasses="text-main-light-two dark:text-main-dark-two"
          headWrapperClasses="hacker-intro"
          introShape="cxl:block"
          sectionPadding='py-[80px] md:py-[120px]'
          cardIconColor="text-[#3CB371]"
          cardWrapper="bg-white dark:bg-[#2f2f2f] group hacker_intro_wrapper"
          shapeOne="/images/hacker/intro-element-1.png"
        />

        <MainAbout
          sectionPadding='py-[80px] md:py-[120px] bg-[#f2f5fb] dark:bg-[#2a2a2a]'
          subtitleClass="text-[#3CB371] dark:text-[#3CB371]"
          imgWrapper="about-img-wrapper hacker_about_img text-center flex cxl:justify-center justify-start"
          imageSrc='hacker/about-image-1.png'
          imageSrcTwo='hacker/about-image-2.png'
          contentWrapper="cxl:mt-0 mt-[130px]"
          btnClass="bg-[#3CB371] hover:bg-[#2aaf66] text-white"
          showHideClass="hidden cxl:block"
          shapeOne="/images/hacker/about-element-1.png"
          shapeTwo="/images/hacker/about-element-2.png"
        />

        <MainSkill
          customStyle={introCustomStyles}
          sectionPadding='pt-[80px] pb-[68px] md:pt-[120px] md:pb-[108px] clg:py-[120px]'
          skillName="text-white dark:text-white"
          progressContainer="bg-white"
          paraClasses="text-[#bdb9cb]"
          primaryColor="text-[#3CB371] dark:text-[#3CB371]"
          primaryBg="bg-[#3CB371]"
          percentageLabel="text-[#3CB371]"
          titleClass="text-white dark:text-white"
        />

        <MainPortfolio
          sectionPadding='py-[80px] md:py-[120px]'
          showHideClass="hidden cxl:block"
          headWrapperClasses="hacker-intro"
          hoverPrimaryBorder="hover:border-[#3CB371]"
          portfolioTabColor="border-[#3CB371] bg-[#3CB371] text-white"
          portfolioBox="hacker-portfolio-box"
          portfolioIconColor="bg-white text-dark"
          portfolioSubtitleColor="text-white"
          portfolioTitleColor="text-white"
          modalButtonColor="bg-[#3CB371]"
          shapeOne="/images/hacker/portfolio-element-1.png"
          shapeTwo="/images/hacker/portfolio-element-2.png"
        />

        <MainService
          sectionPadding='py-[80px] md:py-[120px] bg-[#333333] dark:bg-[#2a2a2a]'
          titleClasses='text-white dark:text-white'
          paraClasses="text-[#bdb9cb]"
          headWrapperClasses="hacker-intro"
          showHideClass="hidden cxl:block"
          serviceBoxWrapper='border-[#474747] hover:bg-white dark:hover:bg-[#3c3c3c]'
          serviceIconColor="text-[#3CB371] bg-white bg-opacity-10 group-hover:bg-[#3CB371] group-hover:text-white"
          boxTitle="text-white group-hover:text-dark dark:group-hover:text-white"
          boxPara="text-[#b0aac0] group-hover:text-main-dark dark:group-hover:text-[#b0aac0]"
          shapeThree="/images/hacker/service-element-3.png"
        />

        <MainWork
          workImage="/images/hacker/feature-photo.png"
          subtitleClass="text-[#3CB371] dark:text-[#3CB371]"
          iconBg="bg-[#3CB371]"
        />

        <MainTestimonial
          customStyle={testimonialCustomStyles}
          sectionPadding='pt-[80px] pb-[68px] md:pt-[120px] md:pb-[108px] clg:py-[120px] main-testimonial hacker-testimonial relative'
          titleClasses='text-white dark:text-white'
          paraClasses="text-[#bdb9cb] dark:text-main-dark-two"
          testimonialCard="dark:bg-[#2f2f2f]"
          testimonialCardShadow="shadow-custom-testimonial"
          headWrapperClasses="hacker-intro"
          bgColor="bg-[#3CB371]"
          iconImage="/images/main/quote-icon.png"
          showHideClass="hidden" 
        />

        <MainBlog
          sectionPadding='relative py-[80px] md:py-[120px]'
          headWrapperClasses="hacker-intro"
          hoverColor="hover:text-[#3CB371]"
          showHideClass="hidden cxl:block"
          shapeOne="/images/hacker/blog-element-1.png"
          shapeTwo="/images/hacker/blog-element-2.png"
        />

        <MainPartner
          sectionBgColor="bg-[#333333]"
        />

        <MainContact
          sectionPadding='relative py-[80px] md:py-[120px]'
          headWrapperClasses="hacker-intro"
          iconColor="text-white bg-[#3CB371]"
          btnHover="hover:bg-[#2aaf66] bg-[#3CB371] text-white"
          formFocus="focus:border-[#3CB371] dark:focus:border-[#3CB371]"
          showHideClass="hidden cxl:block"
          shapeOne="/images/hacker/contact-element-1.png"
          shapeTwo="/images/hacker/contact-element-2.png"
        />

        <MainFooter 
          backgroundImageUrl="../images/hacker/hero-bg.jpg"
          scrollTopClass='bg-[#3CB371] text-[#ffffff]' 
          footerBgColor="hacker_bg_color relative"
          footerLogo="/images/hacker/fungi_logo.png"
          bgColor="bg-[#212228]"
          bgHoverColor="hover:text-[#3CB371]"
        />

      </div>
  );
}