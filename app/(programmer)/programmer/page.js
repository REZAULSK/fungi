import CommonHeader from "@/components/CommonHeader";
import { ProgrammerHero } from "@/components/programmer/ProgrammerHero";
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
            logoSrc="programmer/fungi_logo.png"
            lightLogoSrc="programmer/fungi_logo.png"
            primaryColor="text-[#ffffff] hover:text-[#44cbe1] dark:text-white dark:hover:text-[#44cbe1]"
            activeColor="text-[#44cbe1]"
            bgSticky="bg-[#222222]"
            bgStickyDark="dark:bg-[#222222]"
            showHideClass="hidden"
            menuResponsive="hidden cxl:flex"
            mobileMenuResponsive="cxl:hidden block"
            mobileMenuColor="text-[#44cbe1]"
          />
        </div>

        <ProgrammerHero
          heroBg={heroBg}
          heroBgDark={heroBgDark}
        />

        <MainIntro
          title="Welcome to my world" 
          paraOne="I'm a young tech enthasist and entrepreneur who love to take risk. I grew up in a tech family in New York City."
          paraClasses="text-main-light-two dark:text-main-dark-two"
          headWrapperClasses="programmer-intro"
          introShape="cxl:block"
          sectionPadding='py-[80px] md:py-[120px]'
          cardIconColor="text-[#44cbe1]"
          cardWrapper="bg-white dark:bg-[#2f2f2f] group programmer_intro_wrapper"
          shapeOne="/images/programmer/intro-element-1.png"
        />

        <MainAbout
          sectionPadding='py-[80px] md:py-[120px] bg-[#f2f5fb] dark:bg-[#2a2a2a]'
          subtitleClass="text-[#44cbe1] dark:text-[#44cbe1]"
          imgWrapper="about-img-wrapper programmer_about_img text-center flex cxl:justify-center justify-start"
          imageSrc='programmer/about-image-1.png'
          imageSrcTwo='programmer/about-image-2.png'
          contentWrapper="cxl:mt-0 mt-[130px]"
          btnClass="bg-[#44cbe1] hover:bg-[#41aabd] text-white"
          showHideClass="hidden cxl:block"
          shapeOne="/images/programmer/about-element-1.png"
          shapeTwo="/images/programmer/about-element-2.png"
        />

        <MainSkill
          customStyle={introCustomStyles}
          sectionPadding='pt-[80px] pb-[68px] md:pt-[120px] md:pb-[108px] clg:py-[120px]'
          skillName="text-white dark:text-white"
          progressContainer="bg-white"
          paraClasses="text-[#bdb9cb]"
          primaryColor="text-[#44cbe1] dark:text-[#44cbe1]"
          primaryBg="bg-[#44cbe1]"
          percentageLabel="text-[#44cbe1]"
          titleClass="text-white dark:text-white"
        />

        <MainPortfolio
          sectionPadding='py-[80px] md:py-[120px]'
          showHideClass="hidden cxl:block"
          headWrapperClasses="programmer-intro"
          hoverPrimaryBorder="hover:border-[#44cbe1]"
          portfolioTabColor="border-[#44cbe1] bg-[#44cbe1] text-white"
          portfolioBox="programmer-portfolio-box"
          portfolioIconColor="bg-white text-dark"
          portfolioSubtitleColor="text-white"
          portfolioTitleColor="text-white"
          modalButtonColor="bg-[#44cbe1]"
          shapeOne="/images/programmer/portfolio-element-1.png"
          shapeTwo="/images/programmer/portfolio-element-2.png"
        />

        <MainService
          sectionPadding='py-[80px] md:py-[120px] bg-[#2e313e] dark:bg-[#2e313e]'
          titleClasses='text-white dark:text-white'
          paraClasses="text-[#bdb9cb]"
          headWrapperClasses="programmer-intro"
          showHideClass="hidden cxl:block"
          serviceBoxWrapper='border-[#474747] hover:bg-white dark:hover:bg-[#3c3c3c]'
          serviceIconColor="text-[#44cbe1] bg-white bg-opacity-10 group-hover:bg-[#44cbe1] group-hover:text-white"
          boxTitle="text-white group-hover:text-dark dark:group-hover:text-white"
          boxPara="text-[#b0aac0] group-hover:text-main-dark dark:group-hover:text-[#b0aac0]"
          shapeThree="/images/programmer/service-element-3.png"
        />

        <MainWork
          workImage="/images/programmer/feature-photo.png"
          subtitleClass="text-[#44cbe1] dark:text-[#44cbe1]"
          iconBg="bg-[#44cbe1]"
        />

        <MainTestimonial
          customStyle={testimonialCustomStyles}
          sectionPadding='pt-[80px] pb-[68px] md:pt-[120px] md:pb-[108px] clg:py-[120px] main-testimonial programmer-testimonial relative'
          titleClasses='text-white dark:text-white'
          paraClasses="text-[#bdb9cb] dark:text-main-dark-two"
          testimonialCard="dark:bg-[#2f2f2f]"
          testimonialCardShadow="shadow-custom-testimonial"
          headWrapperClasses="programmer-intro"
          bgColor="bg-[#44cbe1]"
          iconImage="/images/main/quote-icon.png"
          showHideClass="hidden" 
        />

        <MainBlog
          sectionPadding='relative py-[80px] md:py-[120px]'
          headWrapperClasses="programmer-intro"
          hoverColor="hover:text-[#44cbe1]"
          showHideClass="hidden cxl:block"
          shapeOne="/images/programmer/blog-element-1.png"
          shapeTwo="/images/programmer/blog-element-2.png"
        />

        <MainPartner
          sectionBgColor="bg-[#2e313e]"
        />

        <MainContact
          sectionPadding='relative py-[80px] md:py-[120px]'
          headWrapperClasses="programmer-intro"
          iconColor="text-white bg-[#44cbe1]"
          btnHover="hover:bg-[#41aabd] bg-[#44cbe1] text-white"
          formFocus="focus:border-[#44cbe1] dark:focus:border-[#44cbe1]"
          showHideClass="hidden cxl:block"
          shapeOne="/images/programmer/contact-element-1.png"
          shapeTwo="/images/programmer/contact-element-2.png"
        />

        <MainFooter 
          backgroundImageUrl="../images/programmer/footer-bg.jpg"
          scrollTopClass='bg-[#44cbe1] text-[#ffffff]' 
          footerBgColor="programmer_bg_color relative"
          footerLogo="/images/programmer/fungi_logo.png"
          bgColor="bg-[#212228]"
          bgHoverColor="hover:text-[#44cbe1]"
        />

      </div>
  );
}