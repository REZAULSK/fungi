'use client';
import React, { useState } from 'react';
import MainModal from './Modal';
export function SectionTab({ tabs, items, portfolioTabColor, hoverPrimaryBorder, portfolioBox, portfolioIconColor, portfolioSubtitleColor, portfolioTitleColor, modalButtonColor }) {
    const [activeTabs, setActiveTabs] = useState(["All"]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const handleTabClick = (tab) => {
        if (activeTabs === tab) {
            setActiveTabs(null); // Deselect the tab if it's already active
        } else {
            setActiveTabs(tab);
        }
    };
    const filteredItems = items.filter(item =>
        activeTabs.length === 0 || item.categories.some(category => activeTabs.includes(category))
    );
    // const tabColor = activeTabs.includes(tab) ? portfolioTabColor : '';
    return (
        <div>
            <div className="tabs flex text-center mb-12 justify-center gap-1 flex-wrap">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`px-4 py-[6px] border-[1px] border-[#e0e0e0] rounded-[4px] text-[16px] font-opensans dark:text-white transition-all ${hoverPrimaryBorder} ${
                            activeTabs.includes(tab) ? portfolioTabColor : ''
                        }`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div  className="tab-content grid clg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {filteredItems.map((item, index) => (
                    <div
                        key={index}
                        className={`rounded-[10px] cursor-pointer overflow-hidden relative bg-[#774691] portfolio-box ${portfolioBox}`}
                        onClick={() => setSelectedProduct(item)}
                    >
                        <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                        <div className="portfolio-box-text text-white text-center w-full absolute left-0 z-20 transition-all duration-300 p-9 opacity-0 bottom-[40%]">
                            <span className={`opacity-80 text-[14px] xs:text-[16px] uppercase block font-bold mb-[6px] font-opensans ${portfolioSubtitleColor}`}>{item.categories[1]}</span>
                            <h4 className={`font-bold text-[20px] xs:text-[21px] leading-[1.3] capitalize font-poppins ${portfolioTitleColor}`}>{item.name}</h4>
                        </div>
                        <div className={`portfolio-box-icon absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 w-12 h-12 bg-opacity-60 flex justify-center items-center rounded-full z-20 opacity-0 hover:bg-opacity-100 ${portfolioIconColor}`}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="20" 
                                height="20" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="feather feather-plus">
                                <line x1="12" y1="5" x2="12" y2="19"/>
                                <line x1="5" y1="12" x2="19" y2="12"/>
                            </svg>
                        </div>
                    </div>
                ))}
            </div >
            <MainModal
                isOpen={!!selectedProduct}
                onRequestClose={() => setSelectedProduct(null)}
                product={selectedProduct}
                commonModal={"portfolioModal"}
                modalButtonColor={modalButtonColor}
            />
        </div>
    );
}
