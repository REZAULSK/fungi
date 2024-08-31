import React from 'react'
import Data from '@/data/data.json'
import { SectionHeadOne } from './SectionHeadOne';
const IconComponent = ({ icon }) => (
    <svg
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 30 30"
      dangerouslySetInnerHTML={{ __html: icon }}
    />
);
const { educationData, experienceData } = Data;
export function ResumeSection(props) {
    return (
        <>
            <div className={`${props.sectionPadding}`}>
                <div className="container">
                    <SectionHeadOne
                        title="My Resume" 
                        paraOne="Duis aute irure dolor in reprehen pteur sint occaecat cupidatat non proident, sunt in culim id est."
                        titleClasses="relative inline-block leading-[1] text-[20px] xs:text-[24px] font-poppins text-dark dark:text-white uppercase mb-4 xs:mb-6 font-bold"
                        paraClasses="text-[1.1rem] sm:text-[1.25rem] font-normal text-main-light-two dark:text-main-dark-two font-opensans"
                        headWrapperClasses={`section-title w-[80%] md:w-1/2 mx-auto mb-[40px] md:mb-[72px] text-center ${props.headWrapperClasses}`}
                    />
                    <div className="grid grid-cols-1 clg:gap-0 gap-[40px] clg:grid-cols-2">
                        <div className="c2xl:mr-[72px] mr-[40px]">
                            <h3 className="clg:text-[28px] text-[24px] font-poppins font-bold text-[#222222] dark:text-white mb-[30px] cxl:mb-[48px]">My Education</h3>
                            <ul className="resume-list">
                                {educationData.map((item, index) => 
                                    <li key={index} className="flex items-start mb-[36px]">
                                        <div className="icon-box relative mr-6">
                                            <div className={`w-[60px] h-[60px] rounded-full flex items-center justify-center text-[#222222] relative z-20 icon-inner ${props.iconWrapper}`}><IconComponent icon={item.icon} /></div>
                                        </div>
                                        <div className="content">
                                            <div className="flex justify-between items-start mb-3 cxl:flex-wrap flex-col cxl:flex-row cxl:items-center cxl:gap-0 gap-2">
                                                <div className="mr-1">
                                                    <h4 className="cxl:text-[21px] text-[20px] font-poppins font-bold text-[#222222] leading-[1.2] mb-[6px] dark:text-[#ffffff]">{item.title}</h4>
                                                    <span className='text-[16px] font-poppins font-bold text-[#222222] uppercase mb-[18px] leading-[1.2] dark:text-[#ffffff]'>{item.institution}</span>
                                                </div>
                                                <span className="text-[#615978] text-[14px] cxl:text-[14.7px] font-opensans">{item.years}</span>
                                            </div>
                                            <p className="text-[18px] font-opensans text-[#615978] dark:text-main-dark-two">{item.description}</p>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="c2xl:mr-[72px] mr-[40px]">
                            <h3 className="clg:text-[28px] text-[24px] font-poppins font-bold text-[#222222] dark:text-white mb-[30px] cxl:mb-[48px]">My Experience</h3>
                            <ul className="resume-list">
                                {experienceData.map((item, index) => 
                                    <li key={index} className="flex items-start mb-[36px]">
                                        <div className="icon-box relative mr-6">
                                            <div className={`w-[60px] h-[60px] rounded-full flex items-center justify-center text-[#222222] relative z-20 icon-inner ${props.iconWrapper}`}><IconComponent icon={item.icon} /></div>
                                        </div>
                                        <div className="content">
                                            <div className="flex justify-between items-start mb-3 cxl:flex-wrap flex-col cxl:flex-row cxl:items-center cxl:gap-0 gap-2">
                                                <div className="mr-1">
                                                    <h4 className="cxl:text-[21px] text-[20px] font-poppins font-bold text-[#222222] leading-[1.2] mb-[6px] dark:text-[#ffffff]">{item.title}</h4>
                                                    <span className='text-[16px] font-poppins font-bold text-[#222222] uppercase mb-[18px] leading-[1.2] dark:text-[#ffffff]'>{item.company}</span>
                                                </div>
                                                <span className="text-[#615978] text-[14px] cxl:text-[14.7px] font-opensans">{item.years}</span>
                                            </div>
                                            <p className="text-[18px] font-opensans text-[#615978] dark:text-main-dark-two">{item.description}</p>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
