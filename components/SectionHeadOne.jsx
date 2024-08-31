import React from 'react'

export function SectionHeadOne(props) {
    return (
        <>
            <div className={`${props.headWrapperClasses}`}>
                <h2 className={`${props.titleClasses}`}>{props.title}</h2>
                <p  className={`${props.paraClasses}`}>{props.paraOne}</p>
            </div>
        </>
    )
}
