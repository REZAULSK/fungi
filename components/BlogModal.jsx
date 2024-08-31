import React from 'react'
import Link from 'next/link'
import { BsClock, BsCalendar3, BsFillFolderFill, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

export function BlogModal(props) {
    

    return (
        <>
            <div className="max-w-[1140px] mx-auto min-h-customModalMinHeight flex items-center relative w-auto pointer-events-none">
                <div className="max-h-full overflow-hidden relative flex flex-col w-full bg-white dark:bg-dark rounded-lg shadow-lg pointer-events-auto bg-clip-padding">
                    <div className="sm:pt-[36px] pt-[20px] sm:pb-3 sm:px-[36px] px-[20px] overflow-y-auto relative flex-1 dark:border-dark">
                        <img className='rounded-[12px]' src={props.product.largeImage} alt="" />
                        <div className="flex justify-between gap-4 sm:gap-6 pt-4 sm:pt-[30px] pb-[24px] clg:flex-row flex-col">
                            <div className="flex-none clg:w-[66%] w-full mx-auto">
                                <h2 className="md:text-[36px] sm:text-[26px] xs:text-[24px] text-[22px] font-poppins text-dark dark:text-white font-bold mb-4 sm:mb-8 mt-3 text-center">{props.product.title}</h2>
                                <ul className='flex justify-center items-center text-[16px] mb-[30px] text-[#948daa] gap-3 sm:gap-[24px] font-opensans flex-wrap'>
                                    <li><Link href="#" className='hover:text-main-primary transition-all duration-300 flex items-center gap-2'><BsFillFolderFill /> {props.product.category} </Link></li>
                                    <li className='flex items-center gap-2'> <BsCalendar3 />{props.product.date}</li>
                                    <li className='flex items-center gap-2'> <BsClock /> {props.product.time}</li>
                                </ul>
                                <p className="md:text-[18px] text-[16px] font-opensans text-main-dark mb-3">{props.product.description1}</p>
                                <p className="md:text-[18px] text-[16px] font-opensans text-main-dark mb-3">{props.product.description2}</p>
                                <p className="md:text-[18px] text-[16px] font-opensans text-main-dark mb-3">{props.product.description3}</p>
                                <p className="md:text-[18px] text-[16px] font-opensans text-main-dark">{props.product.description4}</p>
                                <div className="mt-[48px] flex justify-between gap-3 items-center flex-wrap">
                                    <div className="flex items-start sm:items-center">
                                        <h4 className='uppercase text-[16px] font-poppins text-[#222222] mr-3 font-bold'>Tags:</h4>
                                        <ul className='flex gap-2 items-center flex-wrap'>
                                            <li><Link href="#" className='hover:text-main-primary transition-all duration-300 font-opensans text-[#948daa]'> Web Design </Link></li>
                                            <li><Link href="#" className='hover:text-main-primary transition-all duration-300 font-opensans text-[#948daa]'> Social Media </Link></li>
                                            <li><Link href="#" className='hover:text-main-primary transition-all duration-300 font-opensans text-[#948daa]'> Application </Link></li>
                                        </ul>
                                    </div>
                                    <div className="flex items-center">
                                        <h4 className='uppercase text-[16px] font-poppins text-[#222222] mr-3 font-bold'>Tags:</h4>
                                        <ul className='flex gap-2 items-center text-[24px]'>
                                            <li><Link href="#" className='hover:text-main-primary transition-all duration-300 font-opensans text-[#1877f2]'> <BsFacebook /> </Link></li>
                                            <li><Link href="#" className='hover:text-main-primary transition-all duration-300 font-opensans text-[#1da1f2]'> <BsTwitter /> </Link></li>
                                            <li><Link href="#" className='hover:text-main-primary transition-all duration-300 font-opensans text-[#0077b5]'> <BsLinkedin /> </Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
