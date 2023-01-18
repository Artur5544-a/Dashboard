import React from 'react'
import './TotalPoint.css'
import minus from '../../assets/img/minus.png'
import plus from '../../assets/img/plus.png'
import search_plus from '../../assets/img/search_plus.png'
import home_icon from '../../assets/img/home_icon.png'
import vector from '../../assets/img/vector.png'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    { "name": "May 2021", "uv": 10, },
    { "name": "Jun 2021", "uv": 20, },
    { "name": "Jul 2021", "uv": 10, },
    { "name": "Aug 2021", "uv": 30, },
    { "name": "Sep 2021", "uv": 25, },
    { "name": "Oct 2021", "uv": 20, },
    { "name": "Nov 2021", "uv": 10, },
    { "name": "Dec 2021", "uv": 30, }
]

export const TotalPoint = () => {
    return (
        <div className='total_point'>
            <div className='total_point_item'>
                <div className='total_point_text'>
                    <p>Total Points</p>
                    <div className='total_point_text_select'>
                        <select>
                            <option>All</option>
                            <option>50,000</option>
                            <option>100,000</option>
                            <option>150,000</option>
                            <option>200,000</option>
                            <option>250,000</option>
                            <option>300,000</option>
                            <option>350,000</option>
                        </select>
                    </div>
                    <div className='total_point_text_select_year'>
                        <select>
                            <option>1 year</option>
                            <option>2 year</option>
                            <option>3 year</option>
                            <option>4 year</option>
                            <option>5 year</option>
                            <option>6 year</option>
                            <option>7 year</option>
                            <option>8 year</option>
                            <option>9 year</option>
                            <option>10 year</option>
                            <option>11 year</option>
                            <option>12 year</option>
                        </select>
                    </div>
                </div>
                <div className='total_point_text_btn'>
                    <button>See more</button>
                </div>
            </div>
            <div className='total_point_icon'>
                <img src={minus} />
                <img src={plus} />
                <img src={search_plus} />
                <img src={home_icon} />
                <img src={vector} />
            </div>
            <div className='total_point_chartjs'>
                <ResponsiveContainer width="100%" height=" 100%">
                    <AreaChart width={730} height={250} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className='total_point_checkbox'>
                <div className='total_point_inp'>
                   <input type='checkbox' checked />
                <span>USD</span>
                <input type='checkbox' checked />
                <span>BTC</span>
                <input type='checkbox' />
                <span>ETH</span> 
                </div>
                
            </div>
        </div>
    )
}
