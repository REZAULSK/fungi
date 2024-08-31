'use client';
import React from 'react'
import { SectionHeadOne } from './SectionHeadOne';
import { GoogleMaps } from './GoogleMap';
import { ContactForm } from './ContactForm';
import contactData from '@/data/data.json';
export function MainContact(props) {
    const contacts = contactData.contactData;
    const icon1 = `<path xmlns="http://www.w3.org/2000/svg" d="M16.001 1.072c5.291 0 9.596 4.305 9.596 9.597 0 1.683-0.446 3.341-1.29 4.799l-8.307 14.394-8.308-14.395c-0.843-1.456-1.289-3.115-1.289-4.798 0-5.292 4.305-9.597 9.597-9.597zM16.001 14.4c2.058 0 3.731-1.674 3.731-3.731s-1.674-3.731-3.731-3.731c-2.058 0-3.732 1.674-3.732 3.731s1.674 3.731 3.732 3.731zM16.001 0.006c-5.889 0-10.663 4.775-10.663 10.663 0 1.945 0.523 3.762 1.432 5.332l9.23 15.994 9.23-15.994c0.909-1.57 1.432-3.387 1.432-5.332 0-5.888-4.774-10.663-10.662-10.663v0zM16.001 13.334c-1.472 0-2.666-1.193-2.666-2.665 0-1.471 1.194-2.665 2.666-2.665s2.665 1.194 2.665 2.665c0 1.472-1.193 2.665-2.665 2.665v0z" fill="currentColor"/>`,
    icon2 = `<path xmlns="http://www.w3.org/2000/svg" d="M23.407 30.394c-2.431 0-8.341-3.109-13.303-9.783-4.641-6.242-6.898-10.751-6.898-13.785 0-2.389 1.65-3.529 2.536-4.142l0.219-0.153c0.979-0.7 2.502-0.927 3.086-0.927 1.024 0 1.455 0.599 1.716 1.121 0.222 0.442 2.061 4.39 2.247 4.881 0.286 0.755 0.192 1.855-0.692 2.488l-0.155 0.108c-0.439 0.304-1.255 0.869-1.368 1.557-0.055 0.334 0.057 0.684 0.342 1.068 1.423 1.918 5.968 7.55 6.787 8.314 0.642 0.6 1.455 0.685 2.009 0.218 0.573-0.483 0.828-0.768 0.83-0.772l0.059-0.057c0.048-0.041 0.496-0.396 1.228-0.396 0.528 0 1.065 0.182 1.596 0.541 1.378 0.931 4.487 3.011 4.487 3.011l0.050 0.038c0.398 0.341 0.973 1.323 0.302 2.601-0.695 1.327-2.85 4.066-5.079 4.066zM9.046 2.672c-0.505 0-1.746 0.213-2.466 0.728l-0.232 0.162c-0.827 0.572-2.076 1.435-2.076 3.265 0 2.797 2.188 7.098 6.687 13.149 4.914 6.609 10.532 9.353 12.447 9.353 1.629 0 3.497-2.276 4.135-3.494 0.392-0.748 0.071-1.17-0.040-1.284-0.36-0.241-3.164-2.117-4.453-2.988-0.351-0.238-0.688-0.358-0.999-0.358-0.283 0-0.469 0.1-0.532 0.14-0.104 0.111-0.39 0.405-0.899 0.833-0.951 0.801-2.398 0.704-3.424-0.254-0.923-0.862-5.585-6.666-6.916-8.459-0.46-0.62-0.641-1.252-0.538-1.877 0.187-1.133 1.245-1.866 1.813-2.26l0.142-0.099c0.508-0.363 0.4-1.020 0.316-1.242-0.157-0.414-1.973-4.322-2.203-4.781-0.188-0.376-0.336-0.533-0.764-0.533z" fill="currentColor"/>`,
    icon3=`<path xmlns="http://www.w3.org/2000/svg" d="M28.244 7.47h-25.572v17.060h26.656v-17.060h-1.084zM27.177 8.536l-10.298 10.298c-0.47 0.47-1.289 0.47-1.759 0l-10.3-10.298h22.356zM3.738 8.961l6.923 6.922-6.923 6.923v-13.846zM4.589 23.464l6.827-6.826 2.951 2.95c0.436 0.436 1.016 0.677 1.633 0.677s1.197-0.241 1.633-0.677l2.951-2.951 6.826 6.826h-22.822zM28.262 22.807l-6.923-6.924 6.923-6.924v13.848z" fill="currentColor"/>`
    const iconSet = [icon1, icon2, icon3];
    const IconComponent = ({ icon }) => (
        <svg
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 30 30"
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      );
    return (
        <>
            <div id='contact' className={props.sectionPadding}>
                <div className="container">
                    <SectionHeadOne
                        title="Get in touch" 
                        paraOne="Duis aute irure dolor in reprehen pteur sint occaecat cupidatat non proident, sunt in culim id est."
                        titleClasses="relative inline-block leading-[1] text-[20px] xs:text-[24px] font-poppins text-dark dark:text-white uppercase mb-4 xs:mb-6 font-bold"
                        paraClasses="text-[1.1rem] sm:text-[1.25rem] font-normal text-main-light-two dark:text-main-dark-two font-opensans"
                        headWrapperClasses={`section-title w-[80%] md:w-1/2 mx-auto mb-[40px] md:mb-[72px] text-center ${props.headWrapperClasses}`}
                    />
                    <div className="grid md:grid-cols-2 clg:grid-cols-3 gap-[30px] clg:gap-[5px]">
                        {contacts.map((item, index) => (
                            <div className="flex gap-6 md:gap-[40px] clg:gap-[25px] justify-start clg:justify-center" key={index}>
                                <span className={`w-[60px] h-[60px] shrink-0 rounded-full flex items-center justify-center ${props.iconColor}`}>
                                    <IconComponent icon={iconSet[index]} />
                                </span>
                                <div className="">
                                    <h4 className="text-[21px] md:text-[24px] font-poppins font-bold text-dark dark:text-white mb-2">{item.title}</h4>
                                    <span className='text-[16px] md:text-[18px] text-main-dark font-opensans dark:text-[#b0aac0]'>{item.info}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 cxl:grid-cols-2 mt-[60px]">
                        <div className="mr-0 cxl:mr-[90px] mb-[50px] cxl:mb-0">
                            <GoogleMaps />
                        </div>
                        <div className="">
                            <h3 className='md:text-[36px] text-[26px] font-poppins font-bold text-dark dark:text-white mb-[26px] cxl:mb-[30px]'>Write me a message</h3>
                            <ContactForm btnHover={props.btnHover} formFocus={props.formFocus} />
                        </div>
                    </div>
                </div>
                <div className={props.showHideClass}>
                    <img className='absolute right-[7%] top-[12%] animate-animUpDown' src={props.shapeOne} alt="" />
                    <img className='absolute left-[4%] -bottom-[2%] animate-animUpDown z-20' src={props.shapeTwo} alt="" />
                </div>
            </div>
        </>
    )
}
