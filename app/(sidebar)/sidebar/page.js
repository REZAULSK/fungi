import CommonHeader from "@/components/sidebar/CommonHeader";
import SidebarHeader from "@/components/sidebar/SidebarHeader";
import { HeroSidebar } from "@/components/sidebar/HeroSidebar";
import { MainIntro } from "@/components/MainIntro";
import { SidebarAbout } from "@/components/sidebar/SidebarAbout";
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
    backgroundImage: "url('../images/main/testimonial-bg.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };
  return (
      <div className="relative">

        <aside className="h-screen hidden cxl:flex bg-[#1d1d1d] w-[190px] c3xl:w-[248px] fixed left-0 top-0">
          <SidebarHeader
              logoSrc="/main/main_logo.png"
              primaryColor="text-[#ffffff] hover:text-main-primary"
              activeColor="text-main-primary"
              showHideClass="hidden"
              menuResponsive="hidden cxl:flex"
              mobileMenuResponsive="cxl:hidden block"
              mobileMenuColor="text-main-primary"
            />
        </aside>

        <div className="cxl:ml-[190px] c3xl:ml-[248px]">

          <div className="fixed top-0 left-0 z-[999] w-full">
            <CommonHeader
              logoSrc="/main/main_logo.png"
              primaryColor="text-[#ffffff] hover:text-main-primary"
              activeColor="text-main-primary"
              bgSticky="bg-dark"
              showHideClass="hidden"
              menuResponsive="hidden cxl:flex"
              mobileMenuResponsive="cxl:hidden block"
              mobileMenuColor="text-main-primary"
            />
          </div>

          <HeroSidebar />

          <MainIntro
            title="Welcome to my world" 
            paraOne="I'm a young tech enthasist and entrepreneur who love to take risk. I grew up in a tech family in New York City."
            paraClasses="text-main-light-two dark:text-main-dark-two"
            headWrapperClasses="main-intro"
            introShape="c3xl:block"
            sectionPadding='py-[80px] md:py-[120px]'
            cardIconColor="text-main-primary"
            cardWrapper="bg-white dark:bg-[#2f2f2f] group"
            shapeOne="/images/main/intro-element-1.png"
          />

          <SidebarAbout
            sectionPadding='py-[80px] md:py-[120px] bg-[#f2f5fb] dark:bg-[#2a2a2a] sidebar_about'
            subtitleClass="text-main-primary dark:text-main-primary"
            imgWrapper="about-img-wrapper text-center flex cxl:justify-center justify-start"
            imageSrc='main/about-image-1.png'
            imageSrcTwo='main/about-image-2.png'
            contentWrapper="cxl:mt-0 mt-[130px]"
            btnClass="bg-main-primary hover:bg-main-secondary text-white"
            showHideClass="block"

          />

          <MainSkill
            customStyle={introCustomStyles}
            sectionPadding='pt-[80px] pb-[68px] md:pt-[120px] md:pb-[108px] clg:py-[120px]'
            skillName="text-white dark:text-white"
            progressContainer="bg-white"
            paraClasses="text-[#bdb9cb]"
            primaryColor="text-main-primary dark:text-main-primary"
            primaryBg="bg-main-primary"
            percentageLabel="text-main-primary"
            titleClass="text-white dark:text-white"
          />

          <MainPortfolio
            sectionPadding='py-[80px] md:py-[120px]'
            showHideClass="hidden c3xl:block"
            headWrapperClasses="main-intro"
            hoverPrimaryBorder="hover:border-main-primary"
            portfolioTabColor="border-main-primary bg-main-primary text-white"
            portfolioBox="main-portfolio-box"
            portfolioIconColor="bg-white text-dark"
            portfolioSubtitleColor="text-white"
            portfolioTitleColor="text-white"
            modalButtonColor="bg-main-primary"
            shapeOne="/images/main/portfolio-element-1.png"
            shapeTwo="/images/main/portfolio-element-2.png"
          />

          <MainService
            sectionPadding='py-[80px] md:py-[120px] bg-[#333333] dark:bg-[#2a2a2a]'
            titleClasses='text-white dark:text-white'
            paraClasses="text-[#bdb9cb]"
            headWrapperClasses="main-intro"
            showHideClass="hidden c3xl:block"
            serviceBoxWrapper='border-[#474747] hover:bg-white dark:hover:bg-[#3c3c3c]'
            serviceIconColor="text-main-primary bg-white bg-opacity-10 group-hover:bg-main-primary group-hover:text-white"
            boxTitle="text-white group-hover:text-dark dark:group-hover:text-white"
            boxPara="text-[#b0aac0] group-hover:text-main-dark dark:group-hover:text-[#b0aac0]"
            shapeThree="/images/main/service-element-3.png"
          />

          <MainWork
            workImage="/images/main/feature-photo.png"
            subtitleClass="text-main-primary dark:text-main-primary"
            iconBg="bg-main-primary"
            shapeOne="/images/main/blog-element-1.png"
            shapeTwo="/images/main/blog-element-2.png"
          />

          <MainTestimonial
            customStyle={testimonialCustomStyles}
            sectionPadding='pt-[80px] pb-[68px] md:pt-[120px] md:pb-[108px] clg:py-[120px] main-testimonial'
            titleClasses='text-white dark:text-white'
            paraClasses="text-[#bdb9cb] dark:text-main-dark-two"
            testimonialCard="dark:bg-[#2f2f2f]"
            testimonialCardShadow="shadow-custom-testimonial"
            headWrapperClasses="main-intro"
            bgColor="bg-main-primary"
            iconImage="/images/main/quote-icon.png"
            showHideClass="hidden" 
          />

          <MainBlog
            sectionPadding='relative py-[80px] md:py-[120px]'
            headWrapperClasses="main-intro"
            hoverColor="hover:text-main-primary"
            showHideClass="hidden c3xl:block"
          />

          <MainPartner
            sectionBgColor="bg-[#333333]"
          />

          <MainContact
            sectionPadding='relative py-[80px] md:py-[120px]'
            headWrapperClasses="main-intro"
            iconColor="text-white bg-main-primary"
            btnHover="hover:bg-main-secondary bg-main-primary text-white"
            formFocus="focus:border-[#fea68f] dark:focus:border-[#fd562a]"
            showHideClass="hidden c3xl:block" 
            shapeOne="/images/main/contact-element-1.png"
            shapeTwo="/images/main/contact-element-2.png"
          />

          <MainFooter 
            backgroundImageUrl="../images/main/footer-bg.jpg"
            scrollTopClass='bg-main-primary text-[#ffffff]' 
            footerBgColor=""
            footerLogo="/images/main/main_logo.png"
            bgColor="bg-[#212228]"
            bgHoverColor="hover:text-main-primary"
          />
        </div>
      </div>
  );
}