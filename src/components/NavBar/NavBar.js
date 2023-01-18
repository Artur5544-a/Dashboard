import React from 'react'
import './NavBar.css'
import logo from '../../assets/img/logo.png'
import home from '../../assets/img/home.png'
import folder from '../../assets/img/folder.png'
import pricing from '../../assets/img/pricing.png'
import market from '../../assets/img/market.png'
import futures from '../../assets/img/futures.png'
import setings from '../../assets/img/setings.png'
import sun from '../../assets/img/sun.png'
import { IoIosArrowDown } from 'react-icons/io';
export const NavBar = () => {
    return (
        <nav className='nav'>
            <div className='navbar'>
                <div className='navbar_logo'>
                    <img src={logo} />
                </div>
                <div className='navbar_list'>
                    <ul>
                        <li><img src={home} />Home</li>
                        <li><img src={folder} />Portfolio <IoIosArrowDown /></li>
                        <li><img src={pricing} />Pricing</li>
                        <li><img src={market} />Marketplace</li>
                        <li><img src={futures} />Futures</li>
                        <li><img src={setings} />Settings <IoIosArrowDown /></li>
                    </ul>
                </div>
                <div className='navbar_users'>
                    <div className='navbar_user'>
                        <h3>D</h3>
                    </div>
                    <div className='navbar_sun'>
                        <img src={sun} />
                    </div>
                </div>

            </div>
        </nav>
    )
}
