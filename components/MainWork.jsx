'use client';
import React from 'react'
import { SectionHeadTwo } from './SectionHeadTwo';
import { Tilt } from 'react-tilt'

export function MainWork(props) {
    const workData = [
        {
            title: "Lifetime Support",
            info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit anim id est laborum."
        },
        {
            title: "No Coding Required",
            info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit anim id est laborum."
        },
        {
            title: "Regular Updates",
            info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit anim id est laborum."
        }
    ]

    const icon1 = `
                <path d="M16.533 2.685v-1.612h-1.066v1.612c-8.573 0.281-15.461 7.298-15.461 15.889 0 0.565 0.031 1.144 0.094 1.722l1.062-0.038c0.065-1.789 1.516-3.191 3.306-3.191 1.825 0 3.311 1.486 3.311 3.312h1.066c0-1.826 1.486-3.312 3.312-3.312 1.806 0 3.276 1.453 3.309 3.25v8.255c0 1.299 1.056 2.356 2.355 2.356s2.356-1.057 2.356-2.356h-1.066c0 0.711-0.579 1.29-1.29 1.29s-1.289-0.578-1.289-1.29v-8.194h0.003c0-1.826 1.485-3.312 3.311-3.312s3.312 1.486 3.312 3.312h1.066c0-1.826 1.486-3.312 3.311-3.312 1.774 0 3.226 1.389 3.304 3.162l1.063 0.032c0.059-0.565 0.090-1.133 0.090-1.687 0-8.591-6.888-15.607-15.461-15.889zM27.537 16c-1.657 0-3.101 0.925-3.844 2.286-0.743-1.36-2.189-2.286-3.845-2.286s-3.101 0.925-3.844 2.286c-0.743-1.36-2.189-2.286-3.845-2.286s-3.102 0.925-3.845 2.286c-0.743-1.36-2.188-2.286-3.844-2.286-1.354 0-2.561 0.606-3.362 1.568 0.523-7.714 7.003-13.83 14.894-13.83 7.89 0 14.369 6.115 14.893 13.827-0.803-0.959-2.009-1.565-3.356-1.565z" fill="currentColor"/>`,
            icon2=`
                <path d="M29.871 6.026l-13.871-5.1-14.394 5.283v19.642l14.394 5.222 14.394-5.222v-19.634l-0.524-0.192zM15.467 29.746l-12.795-4.642v-17.747l12.795 4.642v17.747zM16 11.058l-12.326-4.472 12.326-4.524 12.315 4.528-12.315 4.468zM29.328 25.104l-12.795 4.642v-17.747l12.795-4.623v17.728z" fill="currentColor"/>`,
            icon3=`
                <path d="M20.48 18.613l-1.12 7.84 7.627-1.173-2.987-3.040c1.013-1.867 1.6-3.947 1.6-6.24 0-7.093-5.707-12.8-12.8-12.8v1.067c6.453 0 11.733 5.28 11.733 11.733 0 1.973-0.48 3.787-1.333 5.44l-2.72-2.827zM20.587 25.173l0.64-4.267 3.52 3.627-4.16 0.64z" fill="currentColor"/>
                <path d="M1.067 16c0-2.827 1.013-5.387 2.667-7.413l3.253 3.307 1.12-7.84-7.627 1.227 2.453 2.56c-1.813 2.187-2.933 5.067-2.933 8.16 0 7.093 5.707 12.8 12.8 12.8v-1.067c-6.453 0-11.733-5.28-11.733-11.733zM6.827 5.387l-0.64 4.267-3.52-3.627 4.16-0.64z" fill="currentColor"/>`
    const iconSet = [icon1, icon2, icon3]

    const defaultOptions = {
        reverse:        false,
        max:            18,
        perspective:    1000,
        scale:          1,
        speed:          1000,
        transition:     true,
        axis:           null,
        reset:          true,
        easing:         "cubic-bezier(.03,.98,.52,.99)",
    }
    return (
        <>
            <div className="relative py-[80px] md:py-[120px]">
                <div className="container">
                    <div className="grid grid-cols-1 cxl:grid-cols-2 cxlgap-[24px]">
                        <div className="cxl:mb-0 mb-[60px]">
                            <Tilt options={defaultOptions} className="flex justify-center text-center cxl:text-justify cxl:justify-start ">
                                <img className='cxl:w-auto w-[80%] md:w-[60%]' src={props.workImage} alt="" />
                            </Tilt>
                        </div>
                        <div className="c2xl:pl-[120px] cxl:pl-[60px]">
                            <SectionHeadTwo
                                title="Best result with top user experience" 
                                subTitle="Why work with me" 
                                paraOne="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eureh lit anim id est laborum."
                                subtitleClass={`${props.subtitleClass} text-[18px] uppercase block font-poppins font-bold`}
                                titleClasses="text-dark dark:text-white text-[30px] sm:text-[48px] mb-[30px] sm:mb-[30px] font-bold font-poppins leading-[1.2]"
                                paraClasses="text-main-dark dark:text-main-light-two text-[16px] sm:text-[18px] font-opensans"
                            />
                            <div className="mt-[36px]">
                                {workData.map((item, index) => (
                                    <div key={index} className="flex items-start mb-[36px] last:mb-0 gap-6">
                                        <div className="">
                                <span className={`w-[60px] h-[60px] rounded-full flex items-center justify-center text-white ${props.iconBg}`}>
                                            <svg
                                                width="26"
                                                height="26"
                                                fill="currentColor"
                                                viewBox="0 0 30 34"
                                                dangerouslySetInnerHTML={{ __html: iconSet[index] }}
                                            />
                                        </span>
                                        </div>
                                        <div className="content-wrapper">
                                            <h4 className='text-[21px] mb-3 text-dark dark:text-white font-poppins font-bold'>{item.title}</h4>
                                            <p className='text-[#615978] dark:text-main-light-two font-opensans text-[16px] sm:text-[18px]'>{item.info}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
