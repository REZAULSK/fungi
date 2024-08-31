'use client';
import React, { useState } from 'react';
import data from '@/data/data.json';
import { SectionHeadOne } from './SectionHeadOne';
import PortfolioModal from './Modal';
const { SingleBlogData, BlogData } = data;

export function MainBlog(props) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const SingleBlog = SingleBlogData;
    const allBlogs = BlogData;
    return (
        <>
            <div id='blog' className={props.sectionPadding}>
                <div className="container">
                    <SectionHeadOne
                        title="From my blog" 
                        paraOne="Duis aute irure dolor in reprehen pteur sint occaecat cupidatat non proident, sunt in culim id est."
                        titleClasses="relative inline-block leading-[1] text-[20px] xs:text-[24px] font-poppins text-dark dark:text-white uppercase mb-4 xs:mb-6 font-bold"
                        paraClasses="text-[1.1rem] sm:text-[1.25rem] font-normal text-main-light-two dark:text-main-dark-two font-opensans"
                        headWrapperClasses={`section-title w-[80%] md:w-1/2 mx-auto mb-[40px] md:mb-[72px] text-center ${props.headWrapperClasses}`}
                    />
                    <div className="grid grid-cols-1 clg:grid-cols-2 gap-[26px]">
                        <div className="relative">
                            {SingleBlog.map((item, index) => (
                                <div key={index} className="relative single-blog-wrapper group">
                                    <div className="rounded-[10px] relative overflow-hidden transition-all duration-300">
                                        <img className='w-full' src={item.image} alt="" />   
                                        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300"></div>
                                    </div>
                                    <div className="absolute md:left-12 md:bottom-12 md:right-12 xs:left-[30px] xs:bottom-[30px] xs:right-[30px] left-[20px] bottom-[20px] right-[20px]">
                                        <ul className='flex gap-3 items-center mb-[6px]'>
                                            <li className='flex items-center gap-1 text-white text-[14px] csm:text-[16px] font-opensans'>
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16" viewBox="0 0 32 32">
                                                    <path d="M16 3.205c-7.066 0-12.795 5.729-12.795 12.795s5.729 12.795 12.795 12.795 12.795-5.729 12.795-12.795c0-7.066-5.729-12.795-12.795-12.795zM16 27.729c-6.467 0-11.729-5.261-11.729-11.729s5.261-11.729 11.729-11.729 11.729 5.261 11.729 11.729c0 6.467-5.261 11.729-11.729 11.729z" fill="currentColor"/>
                                                    <path d="M16 17.066h-6.398v1.066h7.464v-10.619h-1.066z" fill="currentColor"/>
                                                </svg>
                                                {item.date}
                                            </li>
                                            <li className={`flex items-center gap-1 cursor-pointer text-white text-[14px] csm:text-[16px] font-opensans transition-all duration-300 ${props.hoverColor}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16" viewBox="0 0 32 32">
                                                    <path d="M26.663 7.737h-13.861v-0.533c0-1.178-0.955-2.133-2.133-2.133h-5.331c-1.178 0-2.132 0.955-2.132 2.133v17.593c0 1.178 0.955 2.133 2.132 2.133h21.325c1.178 0 2.133-0.955 2.133-2.133v-14.928c0-1.178-0.955-2.133-2.133-2.133zM4.271 7.203c0-0.588 0.479-1.066 1.066-1.066h5.331c0.588 0 1.066 0.478 1.066 1.066v1.599h14.928c0.588 0 1.066 0.478 1.066 1.066v1.066h-23.457v-3.732zM26.663 25.863h-21.325c-0.588 0-1.066-0.479-1.066-1.066v-12.795h23.457v12.795c0 0.588-0.479 1.066-1.066 1.066z" fill="currentColor"/>
                                                </svg>
                                                {item.category}
                                            </li>
                                        </ul>
                                        <h3 onClick={() => setSelectedProduct(item)} className={`text-white transition-all duration-300 text-[21px] csm:text-[24px] cxl:text-[28px] c2xl:text-[30px] font-poppins font-bold cursor-pointer leading-[1.3] ${props.hoverColor}`}>{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className=" grid grid-cols-1 csm:grid-cols-2 gap-[26px]">
                            {allBlogs.map((item, index) => (
                                <div key={index} className="relative single-post-wrapper border border-[#e0e0e0] dark:border-[#474747] rounded-[10px] group">
                                    <div className="relative overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-[10px]">
                                        <img src={item.image} alt="" /> 
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>  
                                    </div>
                                    <div className="absolute cxl:top-[30px] cxl:left-[30px] cxl:bottom-[30px] cxl:right-[30px] clg:top-[20px] clg:left-[20px] clg:bottom-[20px] clg:right-[20px] top-[30px] left-[30px] bottom-[30px] right-[30px] z-10">
                                        <ul className=''>
                                            <li className='flex items-center gap-1 text-[#948daa] group-hover:text-white text-[16px] font-opensans absolute bottom-0 left-0 z-10'>
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16" viewBox="0 0 32 32">
                                                    <path d="M16 3.205c-7.066 0-12.795 5.729-12.795 12.795s5.729 12.795 12.795 12.795 12.795-5.729 12.795-12.795c0-7.066-5.729-12.795-12.795-12.795zM16 27.729c-6.467 0-11.729-5.261-11.729-11.729s5.261-11.729 11.729-11.729 11.729 5.261 11.729 11.729c0 6.467-5.261 11.729-11.729 11.729z" fill="currentColor"/>
                                                    <path d="M16 17.066h-6.398v1.066h7.464v-10.619h-1.066z" fill="currentColor"/>
                                                </svg>
                                                {item.date}
                                            </li>
                                            <li className='cursor-pointer text-[#948daa] group-hover:text-white text-[16px] font-opensans transition-all duration-300 absolute top-0 left-0 '>
                                                <div className={`flex items-center gap-1 ${props.hoverColor}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16" viewBox="0 0 32 32">
                                                        <path d="M26.663 7.737h-13.861v-0.533c0-1.178-0.955-2.133-2.133-2.133h-5.331c-1.178 0-2.132 0.955-2.132 2.133v17.593c0 1.178 0.955 2.133 2.132 2.133h21.325c1.178 0 2.133-0.955 2.133-2.133v-14.928c0-1.178-0.955-2.133-2.133-2.133zM4.271 7.203c0-0.588 0.479-1.066 1.066-1.066h5.331c0.588 0 1.066 0.478 1.066 1.066v1.599h14.928c0.588 0 1.066 0.478 1.066 1.066v1.066h-23.457v-3.732zM26.663 25.863h-21.325c-0.588 0-1.066-0.479-1.066-1.066v-12.795h23.457v12.795c0 0.588-0.479 1.066-1.066 1.066z" fill="currentColor"/>
                                                    </svg>
                                                    {item.category}
                                                </div>
                                            </li>
                                        </ul>
                                        <div className={`z-30 text-dark dark:text-white relative mt-[30px] group-hover:text-white`}>
                                            <h3 onClick={() => setSelectedProduct(item)} className={`leading-[1.2] cxl:leading-[1.3] transition-all duration-300 text-[18px] cxl:text-[21px] font-poppins font-bold cursor-pointer ${props.hoverColor}`} >{item.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={props.showHideClass}>
                    <img className='absolute left-[5%] top-[15%] animate-animUpDown' src={props.shapeOne} alt="" />
                    <img className='absolute c3xl:right-[10%] cxl:right-[8%] bottom-[10%] animate-animUpDown z-20' src={props.shapeTwo} alt="" />
                </div>
                <PortfolioModal
                isOpen={!!selectedProduct}
                onRequestClose={() => setSelectedProduct(null)}
                product={selectedProduct}
                commonModal={"blogModal"}
                />
            </div>
        </>
    )
}
