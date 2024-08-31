import React from 'react'
import ProgressBar from './ProgressBar';
import { SectionHeadTwo } from './SectionHeadTwo';
import data from '@/data/data.json';
const { skillData } = data;
export function MainSkill(props) {
    return (
        <>
            <div className={`${props.sectionPadding}`} style={props.customStyle}>
                <div className="container">
                    <div className="grid clg:grid-cols-2 grid-cols-1 gap-4">
                        <div className="pr-[72px]">
                            <SectionHeadTwo
                                title="I'm great in what I do and I'm loving it" 
                                subTitle="My Skills" 
                                paraOne="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariat non proident, sunt in culpa qui officia deserunt laborum."
                                subtitleClass={`text-[18px] uppercase block font-poppins font-bold ${props.primaryColor}`}
                                titleClasses={`text-[30px] sm:text-[48px] mb-[30px] sm:mb-[30px] font-bold font-poppins leading-[1.2] ${props.titleClass}`}
                                paraClasses={`text-[16px] sm:text-[18px] md:text-[20px] font-opensans ${props.paraClasses}`}
                            />
                        </div>
                        <div className="self-end">
                            {skillData.map((data, index) => (
                                <ProgressBar 
                                    key={index}
                                    skill={data.title}
                                    percentage={data.percentage}
                                    skillName={`text-[16px] font-poppins font-bold mb-3 ${props.skillName}`}
                                    ProgressContainer={`progress-container w-full h-2 rounded-[10px] overflow-hidden ${props.progressContainer}`}
                                    ProgressBar={`progress h-full ${props.primaryBg}`}
                                    percentageLabel={`text-[16px] absolute top-[2px] right-0 ${props.percentageLabel}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
