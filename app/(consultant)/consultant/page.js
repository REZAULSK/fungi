import CommonHeader from "@/components/CommonHeader";
import { ConsultantHero } from "@/components/consultant/ConsultantHero";
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
    backgroundImage: "url('../images/consultant/testimonial-bg.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };
  const heroBg = {
    backgroundImage: "url('../images/consultant/hero_pattern.jpg')",
    backgroundPosition: "center center",
    position: "relative",
    zIndex: "1",
  }
  const heroBgDark = {
    backgroundImage: "url('../images/consultant/hero_pattern.jpg')",
    backgroundPosition: "center center",
    position: "relative",
    zIndex: "1",
  }
  return (
      <div>
        <div className="fixed top-0 left-0 z-[999] w-full">
          <CommonHeader
            logoSrc="consultant/fungi_logo.png"
            primaryColor="text-white hover:text-[#5a7ffb] transition-all duration-300"
            activeColor="text-[#5a7ffb]"
            bgSticky="bg-dark"
            showHideClass="hidden"
            menuResponsive="hidden cxl:flex"
            mobileMenuResponsive="cxl:hidden block"
            mobileMenuColor="text-[#5a7ffb]"
          />
        </div>

        <ConsultantHero
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
          cardIconColor="text-[#5a7ffb]"
          cardWrapper="bg-white dark:bg-[#2f2f2f] group freelancer_intro_wrapper"
          shapeOne="/images/freelancer/intro-element-1.png"
        />

        <MainAbout
          sectionPadding='py-[80px] md:py-[120px] bg-[#f2f5fb] dark:bg-[#2a2a2a]'
          subtitleClass="text-[#5a7ffb] dark:text-[#5a7ffb]"
          imgWrapper="about-img-wrapper freelancer_about_img text-center flex cxl:justify-center justify-start"
          imageSrc='consultant/about-image-1.png'
          imageSrcTwo='consultant/about-image-2.png'
          contentWrapper="cxl:mt-0 mt-[130px]"
          btnClass="bg-[#5a7ffb] hover:bg-[#130ff5] text-white"
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
          primaryColor="text-[#5a7ffb] dark:text-[#5a7ffb]"
          primaryBg="bg-[#5a7ffb]"
          percentageLabel="text-[#5a7ffb]"
          titleClass="text-white dark:text-white"
        />

        <MainPortfolio
          sectionPadding='py-[80px] md:py-[120px]'
          showHideClass="hidden cxl:block"
          headWrapperClasses="freelancer-intro"
          hoverPrimaryBorder="hover:border-[#5a7ffb]"
          portfolioTabColor="border-[#5a7ffb] bg-[#5a7ffb] text-white"
          portfolioBox="freelancer-portfolio-box"
          portfolioIconColor="bg-white text-dark"
          portfolioSubtitleColor="text-white"
          portfolioTitleColor="text-white"
          modalButtonColor="bg-[#5a7ffb]"
          shapeOne="/images/freelancer/portfolio-element-1.png"
          shapeTwo="/images/freelancer/portfolio-element-2.png"
        />

        <MainService
          sectionPadding='py-[80px] md:py-[120px] bg-[#1a2540] dark:bg-[#2a2a2a]'
          titleClasses='text-white dark:text-white'
          paraClasses="text-[#bdb9cb]"
          headWrapperClasses="freelancer-intro"
          showHideClass="hidden cxl:block"
          serviceBoxWrapper='border-[#293a64] hover:bg-white dark:hover:bg-[#3c3c3c]'
          serviceIconColor="text-[#5a7ffb] bg-white bg-opacity-10 group-hover:bg-[#5a7ffb] group-hover:text-white"
          boxTitle="text-white group-hover:text-dark dark:group-hover:text-white"
          boxPara="text-[#b0aac0] group-hover:text-main-dark dark:group-hover:text-[#b0aac0]"
          shapeThree="/images/freelancer/service-element-3.png"
        />

        <MainWork
          workImage="/images/consultant/feature-photo.png"
          subtitleClass="text-[#5a7ffb] dark:text-[#5a7ffb]"
          iconBg="bg-[#5a7ffb]"
        />

        <MainTestimonial
          customStyle={testimonialCustomStyles}
          sectionPadding='pt-[80px] pb-[68px] md:pt-[120px] md:pb-[108px] clg:py-[120px] main-testimonial freelancer-testimonial relative'
          titleClasses='text-white dark:text-white'
          paraClasses="text-[#bdb9cb] dark:text-main-dark-two"
          testimonialCard="dark:bg-[#2f2f2f]"
          testimonialCardShadow="shadow-custom-testimonial"
          headWrapperClasses="freelancer-intro"
          bgColor="bg-[#5a7ffb]"
          iconImage="/images/main/quote-icon.png"
          showHideClass="hidden" 
        />

        <MainBlog
          sectionPadding='relative py-[80px] md:py-[120px]'
          headWrapperClasses="freelancer-intro"
          hoverColor="hover:text-[#5a7ffb]"
          showHideClass="hidden cxl:block"
          shapeOne="/images/freelancer/blog-element-1.png"
          shapeTwo="/images/freelancer/blog-element-2.png"
        />

        <MainPartner
          sectionBgColor="bg-[#1a2540] dark:bg-[#2a2a2a]"
        />

        <MainContact
          sectionPadding='relative py-[80px] md:py-[120px]'
          headWrapperClasses="freelancer-intro"
          iconColor="text-white bg-[#5a7ffb]"
          btnHover="hover:bg-[#130ff5] bg-[#5a7ffb] text-white"
          formFocus="focus:border-[#5a7ffb] dark:focus:border-[#5a7ffb]"
          showHideClass="hidden cxl:block"
          shapeOne="/images/freelancer/contact-element-1.png"
          shapeTwo="/images/freelancer/contact-element-2.png"
        />

        <MainFooter 
          backgroundImageUrl="../images/consultant/footer-bg.jpg"
          scrollTopClass='bg-[#5a7ffb] text-[#ffffff]' 
          footerBgColor="relative"
          footerLogo="/images/freelancer/fungi_logo_light.png"
          bgColor="bg-[#212228]"
          bgHoverColor="hover:text-[#5a7ffb]"
        />

      </div>
  );
}