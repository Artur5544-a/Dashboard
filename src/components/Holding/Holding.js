import React from 'react'
import './Holding.css'
import menu from '../../assets/img/menu.png'
import avatar from '../../assets/img/avatar.png'
import menu_icon from '../../assets/img/menu_icon.png'
import vector_icon from '../../assets/img/vector_icon.png'
import { AreaChart, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';

const data = [
    { "uv": 10 },
    { "uv": 50, },
    { "uv": 0, },
    { "uv": 30 },
    { "uv": 60 },
    { "uv": 30 },
    { "uv": 50 },
]

export const Holding = () => {
    return (
        <div className='holding'>
            <div className='holding_txt'>
                <p>Holdings</p>
                <button>See more</button>
            </div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Total</th>
                    <th>1 Hour Charge</th>
                    <th>Market Cap</th>
                    <th>Price in BTC</th>
                    <th>Price Graph(7D)</th>
                    <th><img src={menu} /></th>
                </tr>
                <tr>
                    <td className='td_img_avatar'><img src={avatar} />Aave Abat v2</td>
                    <td>99</td>
                    <td>$56.48</td>
                    <td className='td_color' ><img src={vector_icon} /> 1.88%</td>
                    <td> 72.8B</td>
                    <td>9.12455558</td>
                    <td> <ResponsiveContainer>
                        <AreaChart data={data}>
                            <Area type="monotone" dataKey="uv" stroke="#32D25A" fillOpacity={1} fill="url(#colorUv)" />
                        </AreaChart>
                    </ResponsiveContainer></td>
                    <td><img src={menu_icon} /></td>
                </tr>
                <tr>
                    <td className='td_img_avatar'><img src={avatar} />Aave Abat v2</td>
                    <td>99</td>
                    <td>$56.48</td>
                    <td className='td_color' ><img src={vector_icon} /> 1.88%</td>
                    <td> 72.8B</td>
                    <td>9.12455558</td>
                    <td> <ResponsiveContainer>
                        <AreaChart data={data}>
                            <Area type="monotone" dataKey="uv" stroke="#32D25A" fillOpacity={1} fill="url(#colorUv)" />
                        </AreaChart>
                    </ResponsiveContainer></td>
                    <td><img src={menu_icon} /></td>
                </tr>
                <tr>
                    <td className='td_img_avatar'><img src={avatar} />Aave Abat v2</td>
                    <td>99</td>
                    <td>$56.48</td>
                    <td className='td_color' ><img src={vector_icon} /> 1.88%</td>
                    <td> 72.8B</td>
                    <td>9.12455558</td>
                    <td> <ResponsiveContainer>
                        <AreaChart data={data}>
                            <Area type="monotone" dataKey="uv" stroke="#32D25A" fillOpacity={1} fill="url(#colorUv)" />
                        </AreaChart>
                    </ResponsiveContainer></td>
                    <td><img src={menu_icon} /></td>
                </tr>
                
            </table>

        </div>
    )
}
