import React from 'react'
import './Analytics.css'
import count from '../../assets/img/count_img.png'
import binance from '../../assets/img/binance_img.png'
import binanc from '../../assets/img/binance.png'
import total from '../../assets/img/total_img.png'
import fees from '../../assets/img/fees_img.png'
export const Analytics = () => {
    return (
        <div className='analytic'>
            <div className='analytic_txt'>
                <p>Analytics</p>
                <button>See more</button>
            </div>
            <div className='analytic_list'>
                <ul>
                    <li>
                        <img src={count} />
                        <p>Total Trade Count</p>
                        <span>128</span>
                    </li>
                    <li>
                        <img src={binance} />
                        <p>The Most Used Exchanges</p>
                        <span><img src={binanc} />Binance</span>
                    </li>
                    <li>
                        <img src={total} />
                        <p>Total Withdraw</p>
                        <span>$200</span>
                    </li>
                    <li>
                        <img src={fees} />
                        <p>Total Fee Paid</p>
                        <span>$12</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
