'use client';
import { useEffect, useState } from 'react';

export function ScrollToTop(props) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
  
    const icon = `<path strokeWidth="2" d="M20.665 18.745l0.754-0.754-5.419-5.419-5.419 5.419 0.754 0.754 4.132-4.132v16.877h1.066v-16.877z" fill="currentColor"/>
      <path strokeWidth="2" d="M13.334 26.159v-1.066h-6.931v-18.126h19.192v18.126h-6.931v1.066h7.997v-20.259h-21.325v20.259z" fill="currentColor"/>`
    return (
      <div className="absolute -top-[84px] md:-top-[110px] right-0 md:right-[40px]">
        {isVisible && (
            <button
            onClick={scrollToTop}
            className={`w-[60px] h-[60px] flex justify-center items-center rounded-full shadow-lg transition-opacity duration-300 ${props.customColor}`}
            >
                <svg
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 30 30"
                    stroke='currentColor'
                    strokeWidth={1}
                    dangerouslySetInnerHTML={{ __html: icon }}
                />
            </button>
        )}
      </div>
    );
}
