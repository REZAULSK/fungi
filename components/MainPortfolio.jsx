import React from 'react'
import singlePortfolioData from '@/data/data.json';
import { SectionTab } from './SectionTab';
import { SectionHeadOne } from './SectionHeadOne';

export function MainPortfolio(props) {
    const singlePortfolio = singlePortfolioData.singlePortfolioData;
    const tabs = ['All', 'Programming', 'Development', 'Design', 'Application'];
    return (
        <>
            <div id='portfolio' className={`relative ${props.sectionPadding}`}>
                <div className="container">
                    <SectionHeadOne
                        title="Portfolio" 
                        paraOne="Duis aute irure dolor in reprehen pteur sint occaecat cupidatat non proident, sunt in culim id est."
                        titleClasses="relative inline-block leading-[1] text-[20px] xs:text-[24px] font-poppins text-dark dark:text-white uppercase mb-4 xs:mb-6 font-bold"
                        paraClasses="text-[1.1rem] sm:text-[1.25rem] font-normal text-main-light-two dark:text-main-dark-two font-opensans"
                        headWrapperClasses={`section-title w-[80%] md:w-1/2 mx-auto mb-[40px] md:mb-[72px] text-center ${props.headWrapperClasses}`}
                    />
                    <SectionTab
                        tabs={tabs}
                        items={singlePortfolio}
                        portfolioTabColor={props.portfolioTabColor}
                        hoverPrimaryBorder={props.hoverPrimaryBorder}
                        portfolioBox={props.portfolioBox}
                        portfolioIconColor={props.portfolioIconColor}
                        portfolioSubtitleColor={props.portfolioSubtitleColor}
                        portfolioTitleColor={props.portfolioTitleColor}
                        modalButtonColor={props.modalButtonColor}
                    />
                </div>
                <div className={`${props.showHideClass}`}>
                    <img className='absolute left-[5%] top-[10%] animate-animUpDown' src={props.shapeOne} alt="" />
                    <img className='absolute c3xl:right-[5%] cxl:right-[2%] -bottom-[2%] animate-animUpDown z-20' src={props.shapeTwo} alt="" />
                </div>
            </div>
        </>
    )
}
