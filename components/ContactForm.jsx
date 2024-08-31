'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export function ContactForm(props) {
  const [state, handleSubmit] = useForm("mqkrrekd");
  
  return (
    <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
                <input id="name" type="name" name="name" placeholder='Name*' className={`border border-[#ced4da] py-3 px-[18px] rounded-[4px] focus-visible:outline-none focus:border dark:bg-[#2a2a2a] dark:border-[#606060] dark:text-[#b0aac0] ${props.formFocus}`} />
                <ValidationError prefix="Name" field="name" errors={state.errors} />

                <input id="email" type="email" name="email" placeholder='Email*' className={`border border-[#ced4da] py-3 px-[18px] rounded-[4px] focus-visible:outline-none focus:border dark:bg-[#2a2a2a] dark:border-[#606060] dark:text-[#b0aac0] ${props.formFocus}`} />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <textarea id="message" name="message" placeholder='Your message here*' className={`h-[180px] border border-[#ced4da] py-3 px-[18px] rounded-[4px] focus-visible:outline-none focus:border dark:bg-[#2a2a2a] dark:border-[#606060] dark:text-[#b0aac0] ${props.formFocus}`} />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" className={`cxl:py-[15px] cxl:px-[42px] py-[12px] px-[30px] rounded-[5px] font-poppins uppercase text-[16px] font-bold transition-all duration-300 w-fit ${props.btnHover}`} disabled={state.submitting}> Send message </button>

            {state.succeeded && <p className="text-green-500">Great ! Your message has been sent !!</p>}
        </form>
    </>
  );
}