import React from 'react'
import "./AsideSection.css"
import close from '../../assets/img/close.png'
export const AsideSection = () => {
    return (
        <div className='section'>
            <div className='section_txt'>
                <p>Your free trial has been started․ There are <span className='section_txt_color_red'> 5 days</span> left.</p>
                <img src={close} />
            </div>
            <div className='section_btn'>
                <button>Subscribe</button>
            </div>
        </div>
    )
}
