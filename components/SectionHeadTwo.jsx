import React from 'react'

export function SectionHeadTwo(props) {
    return (
        <>
            <span className={`${props.subtitleClass}`}>{props.subTitle}</span>
            <h2 className={`${props.titleClasses}`}>{props.title}</h2>
            {props.paraOne && <p className={`${props.paraClasses} mb-4`}>{props.paraOne}</p>}
            {props.paraTwo && <p className={` ${props.paraClasses}`}>{props.paraTwo}</p>}
        </>
    )
}
