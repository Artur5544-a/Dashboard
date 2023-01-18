import React, { useState } from 'react'
import './Aside.css'
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import sortIcon from '../../assets/img/sort.png'
import search from '../../assets/img/search.png'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import metamask from '../../assets/img/metamask.png'
import pen from '../../assets/img/pen.png'
import deletee from '../../assets/img/delete.png'
import { Binance } from './Binance/Binance';
import { CoinList } from './CoinList/CoinList';
const data = [
  { uv: 4000 },
  { uv: 3500 },
  { uv: 3800 },
  { uv: 3400 },
  { uv: 3200 },
  { uv: 2900 },
  { uv: 0 },
];
export const Aside = () => {
  const [passwordType, setPasswordType] = useState('password')
  const [passwordIcon, setPasswordIcon] = useState(<BsFillEyeSlashFill />)
  const handleToggle = () => {
    if (passwordType === 'password') {
      setPasswordType('text')
      setPasswordIcon(BsFillEyeFill)
    } else {
      setPasswordType('password')
      setPasswordIcon(BsFillEyeSlashFill)
    }
  }
  return (
    <div className='aside'>
      <div className='aside_inp'>
        <div className='asside_inp_pass'>
          <input type={passwordType} placeholder='Hide small balances' />
          <span onClick={handleToggle}>
            {passwordIcon}
          </span>
        </div>
        <div className='asside_inp_sort'>
          <input type='text' placeholder='Sort' />
          <img src={sortIcon} />
        </div>
      </div>
      <div className='aside_inp_search'>
        <img src={search} />
        <input type='text' placeholder='Search your exchange' />
      </div>
      <div className='aside_metamask'>
        <div className='aside_metamask_item'>
          <div className='aside_metamask_img'>
            <img src={metamask} />
          </div>
          <div className='aside_metamask_txt'>
            <p>Metamask</p>
          </div>
          <div className='aside_metamask_chart'>
            <span>4.85%</span>
            <ResponsiveContainer>
              <AreaChart
                width={200}
                height={600}
                data={data}
                margin={{ top: 5, right: 0, left: 0, bottom: 5, }}>
                <Area type="monotone" dataKey="uv" stroke="#FF0000" fill="rgba(255, 255, 255, 0.19) " />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className='aside_metemask_icon'>
            <img src={pen} />
            <img src={deletee} />
          </div>
        </div>
      </div>
      <Binance />
      <CoinList />
    </div>
  )
}
