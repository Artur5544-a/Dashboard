import React from 'react'
import './Peterson.css'
import refresh from '../../assets/img/refresh.png'
import { BarChart, Bar, ResponsiveContainer, } from 'recharts';
const data = [
    { pv: 6 },
    { pv: 8 },
    { pv: 10 },
    { pv: 10 }, { pv: 8 }, { pv: 6 }, { pv: 4 }, { pv: 3 }, { pv: 3 }, { pv: 4 }, { pv: 5 }, { pv: 6 }, { pv: 7 }, { pv: 8 }, { pv: 11 }, { pv: 13 }, { pv: 15 }, { pv: 17 }, { pv: 16 },
    { pv: 15 },{ pv: 13 },{ pv: 11 },
    { pv: 10 },
    { pv: 11 },
    { pv: 12 },
    { pv: 13 },
    { pv: 14 },
    { pv: 13 },
    { pv: 11 },
    { pv: 9},
    { pv: 7},
    { pv: 7 },
    { pv: 5 },
    { pv: 8 },
    { pv:9 },
    { pv: 9 },
    { pv: 8 },
    { pv: 5 },
    { pv: 4 },
];

export const Peterson = () => {
    return (
        <div className='peterson'>
            <div className='peterson_txt'>
                <h1>D</h1>
                <div className='peterson_txt_img'>
                    <div className='peterson_txt_img_info'>
                        <img src={refresh} />
                        <span>$ 855,914.000 </span>
                    </div>

                    <div className='peterson_txt_name'>
                        <p>Mr. Nick Peterson</p>
                    </div>
                </div>
            </div>
            <div className='peterson_chartJs'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}>
                        <Bar dataKey="pv" fill="rgba(147, 126, 193, 0.6" />
                    </BarChart>
                </ResponsiveContainer>
                <div className='peterson_chartJs_day'>
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
        </div>
    )
}
