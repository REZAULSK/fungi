import React from 'react'

export function PortfolioModal(props) {
    return (
        <>
            <div className="max-w-[1140px] mx-auto min-h-customModalMinHeight flex items-center relative w-auto pointer-events-none">
                <div className="max-h-full overflow-hidden relative flex flex-col w-full bg-white dark:bg-dark rounded-lg shadow-lg pointer-events-auto bg-clip-padding">
                    <div className="sm:pt-[36px] pt-[20px] sm:pb-3 sm:px-[36px] px-[20px] overflow-y-auto relative flex-1 dark:border-dark">
                        <img className='rounded-[12px]' src={props.product.largeImage} alt="" />
                        <div className="flex justify-between gap-4 sm:gap-6 pt-4 sm:pt-[30px] pb-[24px] clg:flex-row flex-col">
                            <div className="flex-1 clg:w-[66%] w-full">
                                <h2 className="md:text-[36px] sm:text-[26px] xs:text-[24px] text-[22px] font-poppins text-dark dark:text-white font-bold mb-2 sm:mb-3">{props.product.name}</h2>
                                <p className="md:text-[18px] text-[16px] font-opensans text-main-dark mb-3">{props.product.description}</p>
                                <p className="md:text-[18px] text-[16px] font-opensans text-main-dark">{props.product.description2}</p>
                            </div>
                            <div className="clg:w-[34%] w-full">
                                    {props.product.meta.map((meta, index) => (
                                        <ul className='bg-[#f6f6f6] p-5 xs:p-[30px] rounded-[8px]' key={index}>
                                            <li className="text-[16px] font-opensans text-main-dark mb-[12px] sm:mb-[18px]">Project Type: <span className='font-bold text-dark ml-2'>{meta.projectType}</span></li>
                                            <li className="text-[16px] font-opensans text-main-dark mb-[12px] sm:mb-[18px]">Client: <span className='font-bold text-dark ml-2'>{meta.client}</span></li>
                                            <li className="text-[16px] font-opensans text-main-dark mb-[12px] sm:mb-[18px]">Duration: <span className='font-bold text-dark ml-2'>{meta.duration}</span></li>
                                            <li className="text-[16px] font-opensans text-main-dark mb-[12px] sm:mb-[18px]">Task: <span className='font-bold text-dark ml-2'>{meta.task}</span></li>
                                            <li className="text-[16px] font-opensans text-main-dark">Budget: <span className='font-bold text-dark ml-2'>{meta.budget}</span></li>
                                        </ul>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
