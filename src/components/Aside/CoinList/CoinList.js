import React from 'react'
import './CoinList.css'
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import coin from '../../../assets/img/coin.png'
import pen from '../../../assets/img/pen.png'
import deletee from '../../../assets/img/delete.png'
const data = [
    { uv: 4000 },
    { uv: 3500 },
    { uv: 3800 },
    { uv: 3400 },
    { uv: 3200 },
    { uv: 2900 },
    { uv: 0 },
];

export const CoinList = () => {
    return (
        <div className='coin_list'>
            <ul>
                <li>
                    <img src={coin} />
                    <span>Coinbase</span>
                    <p>4.85%</p>
                    <ResponsiveContainer>
                        <AreaChart
                            width={200}
                            height={600}
                            data={data}
                            margin={{ top: 5, right: 0, left: 0, bottom: 5, }}>
                            <Area type="monotone" dataKey="uv" stroke="#FF0000" fill="rgba(255, 255, 255, 0.19) " />
                        </AreaChart>
                    </ResponsiveContainer>
                    <div className='coin_list_icon'>
                        <img src={pen} />
                        <img src={deletee} />
                    </div>
                </li>
                <li>
                    <img src={coin} />
                    <span>Coinbase</span>
                    <p>4.85%</p>
                    <ResponsiveContainer>
                        <AreaChart
                            width={200}
                            height={600}
                            data={data}
                            margin={{ top: 5, right: 0, left: 0, bottom: 5, }}>
                            <Area type="monotone" dataKey="uv" stroke="#FF0000" fill="rgba(255, 255, 255, 0.19) " />
                        </AreaChart>
                    </ResponsiveContainer>
                    <div className='coin_list_icon'>
                        <img src={pen} />
                        <img src={deletee} />
                    </div>
                </li>
                <li>
                    <img src={coin} />
                    <span>Coinbase</span>
                    <p>4.85%</p>
                    <ResponsiveContainer>
                        <AreaChart
                            width={200}
                            height={600}
                            data={data}
                            margin={{ top: 5, right: 0, left: 0, bottom: 5, }}>
                            <Area type="monotone" dataKey="uv" stroke="#FF0000" fill="rgba(255, 255, 255, 0.19) " />
                        </AreaChart>
                    </ResponsiveContainer>
                    <div className='coin_list_icon'>
                        <img src={pen} />
                        <img src={deletee} />
                    </div>
                </li>
                <li>
                    <img src={coin} />
                    <span>Coinbase</span>
                    <p>4.85%</p>
                    <ResponsiveContainer>
                        <AreaChart
                            width={200}
                            height={600}
                            data={data}
                            margin={{ top: 5, right: 0, left: 0, bottom: 5, }}>
                            <Area type="monotone" dataKey="uv" stroke="#FF0000" fill="rgba(255, 255, 255, 0.19) " />
                        </AreaChart>
                    </ResponsiveContainer>
                    <div className='coin_list_icon'>
                        <img src={pen} />
                        <img src={deletee} />
                    </div>
                </li>

            </ul>














        </div>
    )
}
