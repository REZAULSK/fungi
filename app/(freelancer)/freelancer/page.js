import CommonHeader from "@/components/freelancer/CommonHeader";
import { FreelancerMain } from "@/components/freelancer/FreelancerMain";
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
    backgroundImage: "url('../images/freelancer/testimonial-bg.jpg')",
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
            logoSrc="images/freelancer/fungi_logo.png"
            lightLogoSrc="images/freelancer/fungi_logo_light.png"
            primaryColor="text-[#222222] hover:text-[#7371f9] dark:text-white dark:hover:text-[#7371f9]"
            activeColor="text-[#7371f9]"
            bgSticky="bg-white"
            bgStickyDark="dark:bg-[#222222]"
            showHideClass="hidden"
            menuResponsive="hidden cxl:flex"
            mobileMenuResponsive="cxl:hidden block"
            mobileMenuColor="text-[#7371f9]"
          />
        </div>

        <FreelancerMain
          heroBg={heroBg}
          heroBgDark={heroBgDark}
        />

        <MainIntro
          title="Welcome to my world" 
          paraOne="I'm a young tech enthasist and entrepreneur who love to take risk. I grew up in a tech family in New York City."
          paraClasses="text-main-light-two dark:text-main-dark-two"
          headWrapperClasses="freelancer-intro"
          introShape="cxl:block"
          sectionPadding='py-[80px] md:py-[120px]'
          cardIconColor="text-[#7371f9]"
          cardWrapper="bg-white dark:bg-[#2f2f2f] group freelancer_intro_wrapper"
          shapeOne="/images/freelancer/intro-element-1.png"
        />

        <MainAbout
          sectionPadding='py-[80px] md:py-[120px] bg-[#f2f5fb] dark:bg-[#2a2a2a]'
          subtitleClass="text-[#7371f9] dark:text-[#7371f9]"
          imgWrapper="about-img-wrapper freelancer_about_img text-center flex cxl:justify-center justify-start"
          imageSrc='main/about-image-1.png'
          imageSrcTwo='main/about-image-2.png'
          contentWrapper="cxl:mt-0 mt-[130px]"
          btnClass="bg-[#7371f9] hover:bg-[#130ff5] text-white"
          showHideClass="hidden cxl:block"
          shapeOne="/images/freelancer/about-element-1.png"
          shapeTwo="/images/freelancer/about-element-2.png"
        />

        <MainSkill
          customStyle={introCustomStyles}
          sectionPadding='pt-[80px] pb-[68px] md:pt-[120px] md:pb-[108px] clg:py-[120px]'
          skillName="text-white dark:text-white"
          progressContainer="bg-white"
          paraClasses="text-[#bdb9cb]"
          primaryColor="text-[#7371f9] dark:text-[#7371f9]"
          primaryBg="bg-[#7371f9]"
          percentageLabel="text-[#7371f9]"
          titleClass="text-white dark:text-white"
        />

        <MainPortfolio
          sectionPadding='py-[80px] md:py-[120px]'
          showHideClass="hidden cxl:block"
          headWrapperClasses="freelancer-intro"
          hoverPrimaryBorder="hover:border-[#7371f9]"
          portfolioTabColor="border-[#7371f9] bg-[#7371f9] text-white"
          portfolioBox="freelancer-portfolio-box"
          portfolioIconColor="bg-white text-dark"
          portfolioSubtitleColor="text-white"
          portfolioTitleColor="text-white"
          modalButtonColor="bg-[#7371f9]"
          shapeOne="/images/freelancer/portfolio-element-1.png"
          shapeTwo="/images/freelancer/portfolio-element-2.png"
        />

        <MainService
          sectionPadding='py-[80px] md:py-[120px] bg-[#303c46] dark:bg-[#2a2a2a]'
          titleClasses='text-white dark:text-white'
          paraClasses="text-[#bdb9cb]"
          headWrapperClasses="freelancer-intro"
          showHideClass="hidden cxl:block"
          serviceBoxWrapper='border-[#474747] hover:bg-white dark:hover:bg-[#3c3c3c]'
          serviceIconColor="text-[#7371f9] bg-white bg-opacity-10 group-hover:bg-[#7371f9] group-hover:text-white"
          boxTitle="text-white group-hover:text-dark dark:group-hover:text-white"
          boxPara="text-[#b0aac0] group-hover:text-main-dark dark:group-hover:text-[#b0aac0]"
          shapeThree="/images/freelancer/service-element-3.png"
        />

        <MainWork
          workImage="/images/freelancer/feature-photo.png"
          subtitleClass="text-[#7371f9] dark:text-[#7371f9]"
          iconBg="bg-[#7371f9]"
        />

        <MainTestimonial
          customStyle={testimonialCustomStyles}
          sectionPadding='pt-[80px] pb-[68px] md:pt-[120px] md:pb-[108px] clg:py-[120px] main-testimonial freelancer-testimonial relative'
          titleClasses='text-white dark:text-white'
          paraClasses="text-[#bdb9cb] dark:text-main-dark-two"
          testimonialCard="dark:bg-[#2f2f2f]"
          testimonialCardShadow="shadow-custom-testimonial"
          headWrapperClasses="freelancer-intro"
          bgColor="bg-[#7371f9]"
          iconImage="/images/main/quote-icon.png"
          showHideClass="hidden" 
        />

        <MainBlog
          sectionPadding='relative py-[80px] md:py-[120px]'
          headWrapperClasses="freelancer-intro"
          hoverColor="hover:text-[#7371f9]"
          showHideClass="hidden cxl:block"
          shapeOne="/images/freelancer/blog-element-1.png"
          shapeTwo="/images/freelancer/blog-element-2.png"
        />

        <MainPartner
          sectionBgColor="bg-[#303c46]"
        />

        <MainContact
          sectionPadding='relative py-[80px] md:py-[120px]'
          headWrapperClasses="freelancer-intro"
          iconColor="text-white bg-[#7371f9]"
          btnHover="hover:bg-[#130ff5] bg-[#7371f9] text-white"
          formFocus="focus:border-[#7371f9] dark:focus:border-[#7371f9]"
          showHideClass="hidden cxl:block"
          shapeOne="/images/freelancer/contact-element-1.png"
          shapeTwo="/images/freelancer/contact-element-2.png"
        />

        <MainFooter 
          backgroundImageUrl="../images/freelancer/footer-bg.jpg"
          scrollTopClass='bg-[#7371f9] text-[#ffffff]' 
          footerBgColor="freelancer_bg_color relative"
          footerLogo="/images/freelancer/fungi_logo_light.png"
          bgColor="bg-[#212228]"
          bgHoverColor="hover:text-[#7371f9]"
        />

      </div>
  );
}