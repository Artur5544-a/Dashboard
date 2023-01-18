import React from 'react'
import './Coins.css'
import up from '../../assets/img/up.png'
import down from '../../assets/img/down.png'
export const Coins = () => {
    return (
        <div className='coins'>
            <div className='coins_txt'>
                <span>Coins</span>
                <button>See more</button>
            </div>
            <div className='coins_text'>
                <h1>TOP <span className='coins_text_color_green'>Gainer</span> </h1>
                <h3>Apecoin</h3>
                <div className='coins_text_img'>
                    <img src={up} />
                    <span className='coins_text_span'>0.74%</span>
                </div>
                <div className='coins_text_down'>
                    <h1>Top <span className='coins_text_color_red'>Looser</span></h1>
                    <h3>Apecoin</h3>
                    <div className='coins_text_down_img'>
                        <img src={down} />
                        <span className='coins_text_down_span'>0.74%</span>
                    </div>
                </div>
            </div>
            <div className='coins_text_down_day'>
                <span>1h</span>
                <span>24h</span>
                <span>7d</span>
                <span>1m</span>
                <span>3m</span>
                <span>6m</span>
                <span>1y</span>
                <span>All</span>
            </div>
        </div>
    )
}
