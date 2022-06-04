import React from 'react'
import Banner from './Banner';
import Casings from './Casings';
import Keyboard from './Keyboard';
import Monitors from './Monitors';
import Motherboard from './Motherboard';
import Mouse from './Mouse';
import PowerSupply from './PowerSupply';
import Processors from './Processors';
import Ram from './Rams';
import Ssd from './Ssd';

function Home() {
    return (
        <div>
            <Banner></Banner>
            <Processors></Processors>
            <Motherboard></Motherboard>
            <Ram></Ram>
            <Ssd></Ssd>
            <PowerSupply></PowerSupply>
            <Casings></Casings>
            <Monitors></Monitors>
            <Keyboard></Keyboard>
            <Mouse></Mouse>
        </div>
    )
}

export default Home;
