'use client';
import React, { useState, useEffect } from 'react';
import data from '@/data/data.json';
import { useInView } from 'react-intersection-observer';
const { counterData } = data;

const IconComponent = ({ icon }) => (
    <svg
      width="60"
      height="60"
      fill="currentColor"
      viewBox="0 0 30 30" 
      dangerouslySetInnerHTML={{ __html: icon }}
    />
);
export function CounterSection(props) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [progress, setProgress] = useState(counterData.map(() => 0));

    useEffect(() => {
        if (inView) {
            const duration = 2000;
            counterData.forEach((item, index) => {
                let start = 0;
                const end = item.value;
                const increment = end / (duration / 16);

                const animate = () => {
                    start += increment;
                    if (start < end) {
                        setProgress((prevProgress) => {
                            const newProgress = [...prevProgress];
                            newProgress[index] = Math.min(Math.ceil(start), end);
                            return newProgress;
                        });
                        requestAnimationFrame(animate);
                    } else {
                        setProgress((prevProgress) => {
                            const newProgress = [...prevProgress];
                            newProgress[index] = end;
                            return newProgress;
                        });
                    }
                };
                animate();
            });
        }
    }, [inView]);

    return (
        <>
            <div className={`relative ${props.sectionPadding}`}>
                <div className="container">
                    <div ref={ref} className="grid grid-cols-1 xs:grid-cols-2 clg:grid-cols-4 gap-[40px] sm:gap-[60px] clg:gap-[26px] xs:px-[10px] px-0">
                        {counterData.map((item, index) => (
                            <div className="counter-section-wrapper flex flex-col justify-center items-center text-center" key={index}>
                                <span className={`mb-[20px] sm:mb-[40px] ${props.iconClasses}`}> <IconComponent icon={item.icon} /></span>
                                <h4 className={`text-[20px] sm:text-[24px] leading-[1.4] mb-[10px] sm:mb-[18px] font-poppins font-bold ${props.titleClasses}`} dangerouslySetInnerHTML={{ __html: item.title }}></h4>
                                <p className='text-[40px] sm:text-[48px] text-[#bdb9cb] font-medium font-opensans flex'>
                                    <strong>{progress[index]}</strong>
                                    <span className='-top-[20px] left-[5px] text-[60%]'>{progress[index] > 100 ? '+' : ''}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}