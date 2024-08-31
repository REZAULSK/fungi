'use client';
import React from 'react'
import { SectionHeadOne } from '../SectionHeadOne';
import data from '@/data/data.json';
import { Tilt } from 'react-tilt'
const { serviceData } = data;

export function DesignerService(props) {
    const icon1 = `
                    <path d="M29.861 22.931v-19.192h-27.723v19.192h13.328v4.265h-3.732v1.066h8.53v-1.066h-3.732v-4.265h13.328zM3.205 4.804h25.59v17.060h-25.59v-17.060z" fill="currentColor"/>
            `,
            icon2 = `
                    <path d="M21.76 12.725c-2.003 0-4.095 1.81-6.549 2.067v-1.046c0.014-2.569 1.939-5.217 5.156-5.217h0.61c2.96 0 6.003-2.343 6.328-6.294h-1.050c-0.314 3.296-2.831 5.245-5.278 5.245h-0.61c-3.806 0-6.169 3.221-6.203 6.229h-0.002v0.040c0 0.008-0.001 0.017-0.001 0.026h0.001v1.018c-2.454-0.257-4.546-2.067-6.548-2.067-2.156 0-7.614 4.277-7.614 12.66 0 4.245 2.865 4.379 3.23 4.379 0.025 0 0.038 0 0.038 0 1.779 0 3.422-0.855 5.475-2.909s2.874-2.592 4.362-2.592c0.593 0 1.306 0 1.54 0 0.049 0 0.085 0 0.085 0 0.233 0 0.947 0 1.54 0 1.489 0 2.309 0.539 4.362 2.592s3.695 2.909 5.475 2.909c0 0 0.013 0 0.038 0 0.364 0 3.229-0.134 3.229-4.379 0-8.383-5.457-12.66-7.613-12.66zM26.155 28.717l-0.025-0.001h-0.025c-1.494 0-2.909-0.778-4.733-2.601-2.015-2.015-3.107-2.899-5.104-2.899h-3.164c-1.997 0-3.089 0.884-5.104 2.899-1.824 1.823-3.239 2.601-4.733 2.601l0.002-0.003-0.040 0.003c-0.512 0-2.181-0.24-2.181-3.33 0-8.010 5.217-11.611 6.565-11.611 0.792 0 1.731 0.422 2.726 0.869 1.269 0.57 2.707 1.216 4.356 1.229 1.631-0.013 3.069-0.66 4.339-1.229 0.995-0.447 1.934-0.869 2.726-0.869 1.346 0 6.564 3.601 6.564 11.611 0 3.091-1.669 3.33-2.169 3.331z" fill="currentColor"/>
                    <path d="M8.396 16.921h-1.049v2.098h-2.098v1.049h2.098v2.098h1.049v-2.098h2.098v-1.049h-2.098z" fill="currentColor"/>
                    <path d="M19.407 17.967c-0.869 0-1.574 0.704-1.574 1.574 0 0.869 0.705 1.574 1.574 1.574s1.573-0.705 1.573-1.574c0-0.87-0.704-1.574-1.573-1.574zM19.407 20.065c-0.289 0-0.524-0.236-0.524-0.524 0-0.29 0.236-0.525 0.524-0.525s0.524 0.235 0.524 0.525c0 0.289-0.235 0.524-0.524 0.524z" fill="currentColor"/>
                    <path d="M23.603 19.016c-0.869 0-1.574 0.704-1.574 1.574s0.705 1.574 1.574 1.574c0.87 0 1.573-0.705 1.573-1.574 0-0.87-0.704-1.574-1.573-1.574zM23.603 21.114c-0.289 0-0.525-0.236-0.525-0.525s0.236-0.524 0.525-0.524c0.29 0 0.524 0.235 0.524 0.524s-0.234 0.525-0.524 0.525z" fill="currentColor"/>
            `,
            icon3 = `
                    <path d="M30.394 4.005h-28.789v1.066h2.132v19.192h11.729v2.666h-8.53v1.066h18.126v-1.066h-8.53v-2.666h11.729v-19.192h2.133v-1.066zM27.196 23.197h-22.391v-18.126h22.391v18.126z" fill="currentColor"/>
                    <path d="M14.401 8.27h-6.397v6.398h6.398v-6.398zM13.334 13.601h-4.265v-4.265h4.265v4.265z" fill="currentColor"/>
                    <path d="M16.533 13.601h7.464v1.066h-7.464v-1.066z" fill="currentColor"/>
                    <path d="M16.533 8.27h7.464v1.066h-7.464v-1.066z" fill="currentColor"/>
                    <path d="M16.533 10.935h7.464v1.066h-7.464v-1.066z" fill="currentColor"/>
                    <path d="M8.003 16.8h15.994v1.066h-15.994v-1.066z" fill="currentColor"/>
                    <path d="M8.003 19.998h15.994v1.066h-15.994v-1.066z" fill="currentColor"/>
            `,
            icon4 = `
                    <path d="M22.931 15.467v-6.397c0-3.827-3.103-6.931-6.93-6.931-3.828 0-6.932 3.103-6.932 6.931v6.398h-3.732v14.394h21.325v-14.394h-3.732zM10.136 9.069c0-3.234 2.631-5.864 5.865-5.864s5.863 2.631 5.863 5.864v6.398h-11.729v-6.398zM25.596 28.795h-19.192v-12.262h19.192v12.262z" fill="currentColor"/>
            `,
            icon5 = `
                    <path d="M28.262 5.87c0-1.472-1.194-2.665-2.666-2.665s-2.666 1.193-2.666 2.665c0 1.289 0.916 2.365 2.133 2.612v18.18h1.066v-18.18c1.217-0.247 2.133-1.323 2.133-2.612zM25.596 7.47c-0.882 0-1.599-0.717-1.599-1.599s0.717-1.599 1.599-1.599c0.882 0 1.599 0.717 1.599 1.599s-0.717 1.599-1.599 1.599z" fill="currentColor"/>
                    <path d="M6.937 23.517v-18.18h-1.066v18.18c-1.217 0.247-2.132 1.322-2.132 2.612 0 1.472 1.194 2.666 2.666 2.666s2.666-1.194 2.666-2.666c0-1.29-0.916-2.365-2.133-2.612zM6.404 27.729c-0.882 0-1.599-0.717-1.599-1.599s0.717-1.599 1.599-1.599 1.599 0.717 1.599 1.599-0.717 1.599-1.599 1.599z" fill="currentColor"/>
                    <path d="M16.533 13.388v-8.050h-1.066v8.050c-1.217 0.247-2.133 1.323-2.133 2.612s0.916 2.365 2.133 2.612v8.050h1.066v-8.050c1.217-0.247 2.133-1.323 2.133-2.612s-0.916-2.365-2.133-2.612zM16 17.599c-0.882 0-1.599-0.717-1.599-1.599s0.717-1.599 1.599-1.599 1.599 0.717 1.599 1.599-0.717 1.599-1.599 1.599z" fill="currentColor"/>
            `,
            icon6 = `
                    <path d="M23.97 19.732h4.292v-8.53h-24.524v7.997c0 5.594 4.535 10.129 10.129 10.129 5.414 0 9.824-4.251 10.102-9.596zM23.997 12.268h3.199v6.397h-3.199v-6.398zM13.867 28.262c-4.997 0-9.063-4.066-9.063-9.063v-6.931h18.126v6.931c0 4.998-4.066 9.063-9.063 9.063z" fill="currentColor"/>
                    <path d="M3.738 30.394h20.259v-1.066h-20.259z" fill="currentColor"/>
                    <path d="M9.069 3.205h1.066v4.798h-1.066v-4.798z" fill="currentColor"/>
                    <path d="M17.599 3.205h1.066v4.798h-1.066v-4.798z" fill="currentColor"/>
                    <path d="M13.334 1.606h1.066v6.398h-1.066v-6.397z" fill="currentColor"/>
            `
    const iconSet = [icon1, icon2, icon3, icon4, icon5, icon6]
            
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
            <div id='service' className={`relative ${props.sectionPadding}`}>
                <div className="container">
                    <SectionHeadOne
                        title="Service" 
                        paraOne="Duis aute irure dolor in reprehen pteur sint occaecat cupidatat non proident, sunt in culim id est."
                        titleClasses={`relative inline-block leading-[1] text-[20px] xs:text-[24px] font-poppins uppercase mb-4 xs:mb-6 font-bold ${props.titleClasses}`}
                        paraClasses={`text-[1.1rem] sm:text-[1.25rem] font-normal font-opensans ${props.paraClasses}`}
                        headWrapperClasses={`section-title w-[80%] md:w-1/2 mx-auto mb-[40px] md:mb-[72px] text-center ${props.headWrapperClasses}`}
                    />
                    <div className="grid grid-cols-1 clg:grid-cols-2 cxl:grid-cols-3 gap-[24px] sm:gap-[26px] px-[10px] xs:px-0 service-grid">
                        {serviceData.map((item, index) => (
                            <Tilt key={index} options={defaultOptions}>
                                <div className={`border p-[24px] xs:py-[60px] xs:px-12 xs:text-center text-start rounded-[10px] transition-all duration-300 flex items-start xs:items-center justify-start xs:justify-center flex-col group ${props.serviceBoxWrapper}`} key={index}>
                                    <span className={`mb-[20px] sm:mb-[30px] flex transition-all duration-300 w-[84px] h-[84px] xs:w-[96px] xs:h-[96px] items-center justify-center rounded-full main-service-icon ${props.serviceIconColor}`}>
                                        <svg
                                            width="34"
                                            height="34"
                                            fill="currentColor"
                                            viewBox="0 0 30 30"
                                            dangerouslySetInnerHTML={{ __html: iconSet[index] }}
                                        />
                                    </span>
                                    <h3 className={`font-poppins font-bold text-[24px] xs:text-[28px] mb-[20px] sm:mb-[30px] ${props.boxTitle}`}>{item.title}</h3>
                                    <p className={` font-opensans text-[18px] ${props.boxPara}`}>{item.description}</p>
                                </div>
                            </Tilt>
                        ))}
                    </div>
                </div>
                
                <div className={`${props.showHideClass}`}>
                    <img className='absolute left-[5%] top-[12%] animate-animUpDown' src={props.shapeOne} alt="" />
                    <img className='absolute c3xl:right-[5%] cxl:right-[2%] top-[48%] animate-animUpDown z-20' src={props.shapeTwo} alt="" />
                    <img className='absolute c3xl:left-[5%] cxl:left-[2%] -bottom-[2%] animate-animUpDown z-20' src={props.shapeThree} alt="" />
                </div>
            </div>
        </>
    )
}
