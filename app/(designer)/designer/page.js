import CommonHeader from "@/components/designer/DesignerHeader";
import { DesignerHero } from "@/components/designer/DesignerHero";
import { MainAbout } from "@/components/MainAbout";
import { MainIntro } from "@/components/MainIntro";
import { MainSkill } from "@/components/MainSkill";
import { MainPortfolio } from "@/components/MainPortfolio";
import { DesignerService } from "@/components/designer/DesignerService";
import { MainWork } from "@/components/MainWork";
import { MainTestimonial } from "@/components/MainTestimonial";
import { MainBlog } from "@/components/MainBlog";
import { MainPartner } from "@/components/MainPartner";
import { MainContact } from "@/components/MainContact";
import { DesignerFooter } from "@/components/designer/DesignerFooter";

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
            logoSrc="images/designer/fungi_logo.png"
            lightLogoSrc="images/designer/fungi_logo_light.png"
            primaryColor="text-[#222222] hover:text-[#fd4312] dark:hover:text-[#fd4312]"
            activeColor="text-[#fd4312]"
            bgSticky="bg-[#f5edd8]"
            bgStickyDark="dark:bg-[#222222]"
            showHideClass="hidden"
            menuResponsive="hidden cxl:flex"
            mobileMenuResponsive="cxl:hidden block"
            mobileMenuColor="text-[#fd4312]"
          />
        </div>

        <DesignerHero
          heroBg={heroBg}
          heroBgDark={heroBgDark}
        />

        <MainIntro
          title="Welcome to my world" 
          paraOne="I'm a young tech enthasist and entrepreneur who love to take risk. I grew up in a tech family in New York City."
          paraClasses="text-main-light-two dark:text-main-dark-two"
          headWrapperClasses="designer-intro"
          introShape="cxl:block"
          sectionPadding='py-[80px] md:py-[120px]'
          cardIconColor="text-[#fdb63c]"
          cardWrapper="bg-white dark:bg-[#2f2f2f] group designer_intro_wrapper"
          shapeOne="/images/designer/intro-element-1.png"
        />

        <MainAbout
          sectionPadding='py-[80px] md:py-[120px] bg-[#f2f5fb] dark:bg-[#2a2a2a]'
          subtitleClass="text-[#fd4312] dark:text-[#fd4312]"
          imgWrapper="about-img-wrapper designer_about_img text-center flex cxl:justify-center justify-start"
          imageSrc='designer/about-image-1.png'
          imageSrcTwo='designer/about-image-2.png'
          contentWrapper="cxl:mt-0 mt-[130px]"
          btnClass="bg-[#fd4312] hover:bg-[#a82401] text-white"
          showHideClass="hidden cxl:block"
          shapeOne="/images/designer/about-element-1.png"
          shapeTwo="/images/designer/about-element-2.png"
        />

        <MainSkill
          customStyle={introCustomStyles}
          sectionPadding='pt-[80px] pb-[68px] md:pt-[120px] md:pb-[108px] clg:py-[120px]'
          skillName="text-white dark:text-white"
          progressContainer="bg-white"
          paraClasses="text-[#bdb9cb]"
          primaryColor="text-[#fd4312] dark:text-[#fd4312]"
          primaryBg="bg-[#fd4312]"
          percentageLabel="text-[#fd4312]"
          titleClass="text-white dark:text-white"
        />

        <MainPortfolio
          sectionPadding='py-[80px] md:py-[120px]'
          showHideClass="hidden cxl:block"
          headWrapperClasses="designer-intro"
          hoverPrimaryBorder="hover:border-[#fd4312]"
          portfolioTabColor="border-[#fd4312] bg-[#fd4312] text-white"
          portfolioBox="designer-portfolio-box"
          portfolioIconColor="bg-white text-dark"
          portfolioSubtitleColor="text-white"
          portfolioTitleColor="text-white"
          modalButtonColor="bg-[#fd4312]"
          shapeOne="/images/designer/portfolio-element-1.png"
          shapeTwo="/images/designer/portfolio-element-2.png"
        />

        <DesignerService
          sectionPadding='py-[80px] md:py-[120px] bg-[#333333] dark:bg-[#2e313e]'
          titleClasses='text-white dark:text-white'
          paraClasses="text-[#bdb9cb]"
          headWrapperClasses="designer-intro"
          showHideClass="hidden cxl:block"
          serviceBoxWrapper='border-[#474747] hover:bg-white dark:hover:bg-[#3c3c3c]'
          serviceIconColor="text-[#fdb63c] bg-white bg-opacity-10 group-hover:bg-[#fdb63c] group-hover:text-white"
          boxTitle="text-white group-hover:text-dark dark:group-hover:text-white"
          boxPara="text-[#b0aac0] group-hover:text-main-dark dark:group-hover:text-[#b0aac0]"
          shapeOne="/images/designer/service-element-1.png"
          shapeTwo="/images/designer/service-element-2.png"
          shapeThree="/images/designer/service-element-3.png"
        />

        <MainWork
          workImage="/images/designer/feature-photo.png"
          subtitleClass="text-[#fd4312] dark:text-[#fd4312]"
          iconBg="bg-[#fdb63c]"
        />

        <MainTestimonial
          customStyle={testimonialCustomStyles}
          sectionPadding='pt-[80px] pb-[68px] md:pt-[120px] md:pb-[108px] clg:py-[120px] main-testimonial designer-testimonial relative'
          titleClasses='text-white dark:text-white'
          paraClasses="text-[#bdb9cb] dark:text-main-dark-two"
          testimonialCard="dark:bg-[#2f2f2f]"
          testimonialCardShadow="shadow-custom-testimonial"
          headWrapperClasses="designer-intro"
          bgColor="bg-[#fdb63c]"
          iconImage="/images/main/quote-icon.png"
          showHideClass="hidden" 
        />

        <MainBlog
          sectionPadding='relative py-[80px] md:py-[120px]'
          headWrapperClasses="designer-intro"
          hoverColor="hover:text-[#fd4312]"
          showHideClass="hidden cxl:block"
          shapeOne="/images/designer/blog-element-1.png"
          shapeTwo="/images/designer/blog-element-2.png"
        />

        <MainPartner
          sectionBgColor="bg-[#333333]"
        />

        <MainContact
          sectionPadding='relative py-[80px] md:py-[120px]'
          headWrapperClasses="designer-intro"
          iconColor="text-white bg-[#fdb63c]"
          btnHover="hover:bg-[#a82401] bg-[#fd4312] text-white"
          formFocus="focus:border-[#fd4312] dark:focus:border-[#fd4312]"
          showHideClass="hidden cxl:block"
          shapeOne="/images/designer/contact-element-1.png"
          shapeTwo="/images/designer/contact-element-2.png"
        />

        <DesignerFooter 
          backgroundImageUrl=""
          scrollTopClass='bg-[#fd4312] text-[#ffffff]' 
          footerBgColor="bg-[#f5edd8] dark:bg-[#343434]"
          footerLogo="/images/designer/fungi_logo.png"
          footerLogoDark="/images/designer/fungi_logo_light.png"
          bgColor="bg-[#212228]"
          bgHoverColor="hover:text-[#fd4312]"
        />

      </div>
  );
}