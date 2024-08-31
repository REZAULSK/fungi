import CommonHeader from "@/components/CommonHeader";
import { DeveloperHero } from "@/components/developer/DeveloperHero";
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
    backgroundImage: "url('../images/developer/testimonial-bg.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };
  return (
      <div>
        <div className="fixed top-0 left-0 z-[999] w-full">
          <CommonHeader
            logoSrc="/developer/fungi_logo.png"
            primaryColor="text-[#ffffff] hover:text-[#1da1f3] transition-all duration-300"
            activeColor="text-[#1da1f3]"
            bgSticky="bg-dark"
            showHideClass="hidden"
            menuResponsive="hidden cxl:flex"
            mobileMenuResponsive="cxl:hidden block"
            mobileMenuColor="text-[#1da1f3]"
          />
        </div>

        <DeveloperHero />

        <MainIntro
          title="Welcome to my world" 
          paraOne="I'm a young tech enthasist and entrepreneur who love to take risk. I grew up in a tech family in New York City."
          paraClasses="text-main-light-two dark:text-main-dark-two"
          headWrapperClasses="developer-intro"
          introShape="cxl:block"
          sectionPadding='py-[80px] md:py-[120px]'
          cardIconColor="text-[#1da1f3]"
          cardWrapper="bg-white dark:bg-[#2f2f2f] group developer_intro_wrapper"
          shapeOne="/images/developer/intro-element-1.png"
        />

        <MainAbout
          sectionPadding='py-[80px] md:py-[120px] bg-[#f2f5fb] dark:bg-[#2a2a2a]'
          subtitleClass="text-[#1da1f3] dark:text-[#1da1f3]"
          imgWrapper="about-img-wrapper developer_about_img text-center flex cxl:justify-center justify-start"
          imageSrc='developer/about-image-1.png'
          imageSrcTwo='developer/about-image-2.png'
          contentWrapper="cxl:mt-0 mt-[130px]"
          btnClass="bg-[#1da1f3] hover:bg-[#0078c2] text-white"
          showHideClass="hidden cxl:block"
          shapeOne="/images/developer/about-element-1.png"
          shapeTwo="/images/developer/about-element-2.png"
        />

        <MainSkill
          customStyle={introCustomStyles}
          sectionPadding='pt-[80px] pb-[68px] md:pt-[120px] md:pb-[108px] clg:py-[120px]'
          skillName="text-white dark:text-white"
          progressContainer="bg-white"
          paraClasses="text-[#bdb9cb]"
          primaryColor="text-[#1da1f3] dark:text-[#1da1f3]"
          primaryBg="bg-[#1da1f3]"
          percentageLabel="text-[#1da1f3]"
          titleClass="text-white dark:text-white"
        />

        <MainPortfolio
          sectionPadding='py-[80px] md:py-[120px]'
          showHideClass="hidden cxl:block"
          headWrapperClasses="developer-intro"
          hoverPrimaryBorder="hover:border-[#1da1f3]"
          portfolioTabColor="border-[#1da1f3] bg-[#1da1f3] text-white"
          portfolioBox="developer-portfolio-box"
          portfolioIconColor="bg-white text-dark"
          portfolioSubtitleColor="text-white"
          portfolioTitleColor="text-white"
          modalButtonColor="bg-[#1da1f3]"
          shapeOne="/images/developer/portfolio-element-1.png"
          shapeTwo="/images/developer/portfolio-element-2.png"
        />

        <MainService
          sectionPadding='py-[80px] md:py-[120px] bg-[#303c46] dark:bg-[#2a2a2a]'
          titleClasses='text-white dark:text-white'
          paraClasses="text-[#bdb9cb]"
          headWrapperClasses="developer-intro"
          showHideClass="hidden cxl:block"
          serviceBoxWrapper='border-[#474747] hover:bg-white dark:hover:bg-[#3c3c3c]'
          serviceIconColor="text-[#1da1f3] bg-white bg-opacity-10 group-hover:bg-[#1da1f3] group-hover:text-white"
          boxTitle="text-white group-hover:text-dark dark:group-hover:text-white"
          boxPara="text-[#b0aac0] group-hover:text-main-dark dark:group-hover:text-[#b0aac0]"
          shapeThree="/images/developer/service-element-3.png"
        />

        <MainWork
          workImage="/images/developer/feature-photo.png"
          subtitleClass="text-[#1da1f3] dark:text-[#1da1f3]"
          iconBg="bg-[#1da1f3]"
          shapeOne="/images/main/blog-element-1.png"
          shapeTwo="/images/main/blog-element-2.png"
        />

        <MainTestimonial
          customStyle={testimonialCustomStyles}
          sectionPadding='pt-[80px] pb-[68px] md:pt-[120px] md:pb-[108px] clg:py-[120px] main-testimonial developer-testimonial relative'
          titleClasses='text-white dark:text-white'
          paraClasses="text-[#bdb9cb] dark:text-main-dark-two"
          testimonialCard="dark:bg-[#2f2f2f]"
          testimonialCardShadow="shadow-custom-testimonial"
          headWrapperClasses="developer-intro"
          bgColor="bg-[#1da1f3]"
          iconImage="/images/main/quote-icon.png"
          showHideClass="hidden" 
        />

        <MainBlog
          sectionPadding='relative py-[80px] md:py-[120px]'
          headWrapperClasses="developer-intro"
          hoverColor="hover:text-[#1da1f3]"
          showHideClass="hidden cxl:block"
          shapeOne="/images/developer/blog-element-1.png"
          shapeTwo="/images/developer/blog-element-2.png"
        />

        <MainPartner
          sectionBgColor="bg-[#303c46]"
        />

        <MainContact
          sectionPadding='relative py-[80px] md:py-[120px]'
          headWrapperClasses="developer-intro"
          iconColor="text-white bg-[#1da1f3]"
          btnHover="hover:bg-[#0078c2] bg-[#1da1f3] text-white"
          formFocus="focus:border-[#fea68f] dark:focus:border-[#fd562a]"
          showHideClass="hidden cxl:block" 
          shapeOne="/images/developer/contact-element-1.png"
          shapeTwo="/images/developer/contact-element-2.png"
        />

        <MainFooter 
          backgroundImageUrl="../images/developer/footer-bg.jpg"
          scrollTopClass='bg-[#1da1f3] text-[#ffffff]' 
          footerBgColor="freelancer_bg_color relative"
          footerLogo="/images/developer/fungi_logo.png"
          bgColor="bg-[#212228]"
          bgHoverColor="hover:text-[#1da1f3]"
        />

      </div>
  );
}