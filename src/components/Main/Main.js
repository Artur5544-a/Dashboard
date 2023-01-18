import React from 'react'
import { Analytics } from '../Analytics/Analytics'
import { Aside } from '../Aside/Aside'
import { AsideSection } from '../AsideSection/AsideSection'
import { Coins } from '../Coins/Coins'
import { Exchanges } from '../Exchanges/Exchanges'
import { Futures } from '../Futures/Futures'
import { Holding } from '../Holding/Holding'
import { Peterson } from '../Peterson/Peterson'
import { TotalPoint } from '../TotalPoint/TotalPoint'
import './Main.css'

export const Main = () => {
    return (
        <div className='main'>
            <div className='mains'>
                <Aside />
                <AsideSection />
            </div>

            <div className='main_item'>
                <TotalPoint />
                <Exchanges />
                <Coins />
                <Peterson />
                <Analytics />
                <Futures />
                <Holding />
            </div>

        </div>
    )
}
