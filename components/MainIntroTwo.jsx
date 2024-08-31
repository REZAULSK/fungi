import React from 'react'
import { introData } from '@/data/data'
import { SectionHeadOne } from './SectionHeadOne';

const IconComponent = ({ icon }) => (
    <svg
      width="42"
      height="42"
      fill="currentColor"
      viewBox="0 0 30 30"
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  );
export function MainIntro(props) {
    return (
        <>
            <div className="relative py-[80px] md:py-[120px]">
                <div className="container">
                    <SectionHeadOne
                        title="Welcome to my world" 
                        paraOne="I'm a young tech enthasist and entrepreneur who love to take risk. I grew up in a tech family in New York City."
                        titleClasses="relative inline-block leading-[1] text-[20px] xs:text-[24px] font-poppins text-dark dark:text-white uppercase mb-4 xs:mb-6 font-bold"
                        paraClasses="text-[1.1rem] sm:text-[1.25rem] font-normal text-main-light-two dark:text-main-dark-two font-opensans"
                        headWrapperClasses="main-intro section-title w-[80%] md:w-1/2 mx-auto mb-[40px] md:mb-[72px] text-center"
                    />
                    <div className="flex items-center justify-between flex-wrap cxl:flex-nowrap gap-[24px] px-[10px] xs:px-0">
                        {introData.map((item, index) => (
                            <div key={index} className="main-intro-item-wrapper w-full clg:w-[48.612%] cxl:w-1/3 relative border-solid border-[#e0e0e0] border-[1px] p-[30px] xs:p-[40px] sm:p-[48px]  rounded-[12px] bg-white dark:bg-[#2f2f2f] transition-all duration-300 hover:shadow-custom-main-intro hover:border-[#ffffff] dark:hover:border-[#2f2f2f] dark:border-[#2f2f2f]">
                                <span className='text-main-primary mb-2 sm:mb-3 flex'>
                                    <IconComponent icon={item.icon} />  
                                </span>
                                <h3 className="text-[24px] sm:text-[28px] mb-3 sm:mb-[18px] font-bold font-poppins dark:text-white">{item.title}</h3>
                                <p className="text-[16px] sm:text-[18px] font-opensans text-[#615978] dark:text-main-dark-two">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hidden cxl:block">
                    <img className='absolute left-[5%] top-[10%] animate-animUpDown' src="/images/main/intro-element-1.png" alt="" />
                </div>
            </div>
        </>
    )
}
