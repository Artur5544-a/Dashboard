import React from 'react'
import './Binance.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import logo from '../../../assets/img/binance.png'
const data = [
    { uv: 0 },
    { uv: 2900 },
    { uv: 3200 },
    { uv: 3400 },
    { uv: 3800 },
    { uv: 3500 },
    { uv: 4000 },
];
export const Binance = () => {
    return (
        <div className='aside_binance'>
            <div className='aside_binance_item'>
                <div className='aside_binance_logo'>
                    <div className='logo'>
                        <img src={logo} />
                        <span>Binance</span>
                    </div>

                    <div className='aside_binance_price'>
                        <h4>$1000.00</h4>
                    </div>
                </div>
                <div className='aside_binance_chartjs'>
                    <p>4.85%</p>
                    <ResponsiveContainer>
                        <AreaChart
                            width={200}
                            height={600}
                            data={data}
                            margin={{ top: 5, right: 0, left: 0, bottom: 5, }}>
                            <Area type="monotone" dataKey="uv" stroke="#61E224" fill="rgba(255, 255, 255, 0.19) " />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='hr'></div>
            <div className='aside_binance_text1 aside_binance_text'>
                <img src={logo} />
                <span>Binance Savings</span>
            </div>
            <div className='aside_binance_text2 aside_binance_text'>
                <img src={logo} />
                <span>Binance Futures</span>
            </div>



        </div>
    )
}
