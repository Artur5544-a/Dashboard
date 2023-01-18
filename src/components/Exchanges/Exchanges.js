import React from 'react'
import './Exchanges.css'
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
const data = [
    { name: 'Gate.io', uv: 250 },
    { name: 'Coinbase', uv: 650 },
    { name: 'Binance', uv: 390 },
    { name: 'Huobi', uv: 520 },
];

export const Exchanges = () => {
    return (
        <div className='exchanges'>
            <div className='exchanges_txt'>
                <p>Most usable exchanges</p>
                <button>See more</button>
            </div>
            <div className='exchanges_chartJs'>
                <div className='exchanges_chartJs_txt'>
                    <span>25%</span>
                    <span>76%</span>
                    <span>39%</span>
                    <span>52%</span>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={150} height={40} data={data}>
                        <XAxis dataKey="name" />
                        <Bar dataKey="uv" fill="#F7F4FF" background={{ fill: '#805AD5' }} opacity='0.5' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
