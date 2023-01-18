import React from 'react'
import './Futures.css'
import vector2 from '../../assets/img/vector2.png'
import vector3 from '../../assets/img/vector3.png'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    { uv: 0 },
    { uv: 300 },
    { uv: 250 },
    { uv: 300 },
    { uv: 290 },
    { uv: 500 },
    { uv: 300 },
    { uv: 500 },
    { uv: 300 },
    { uv: 280 },
    { uv: 270 },
    { uv: 500 },
];

export const Futures = () => {
    return (
        <div className='futures'>
            <div className='futures_txt'>
                <p>Futures</p>
                <button>See more</button>
            </div>
            <div className='futures_info'>
                <div className='futures_info_item'>
                    <h4>3/22/2022 17:51:03 PM</h4>
                    <div className='futures_info_img'>
                        <ul>
                            <li><img src={vector2} /><span className='futures_info_img_green' >$0.74</span></li>
                            <li><img src={vector3} /><span className='futures_info_img_red'>0.58%</span></li>
                        </ul>
                    </div>
                </div>
                <div className='futures_info_btn'>
                    <button>$3,698.58</button>
                </div>
            </div>
            <div className='futures_chartJs'>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={200}
                        height={60}
                        data={data}
                        margin={{ top: 5, right: 0, left: 0, bottom: 0, }}>
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
                <div className='futures_chartJs_day'>
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
            <div className='futures_list'>
                <ul>
                    <li><p>Asset:</p>
                        <div className='hr1' ></div>
                        <h5 className='h5_color'>ES</h5>
                    </li>
                    <li><p>Margin balance</p>
                        <div className='hr2' ></div>
                        <h5 className='h5_col'>$12.50</h5>
                    </li>
                    <li><p>Wallet Balance</p>
                        <div className='hr3' ></div>
                        <h5 className='h5_col'>$5,225.00</h5>
                    </li>
                </ul>
            </div>
        </div>
    )
}
