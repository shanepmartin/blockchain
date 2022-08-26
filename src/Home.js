import React from 'react'
import CoinToday from './CoinToday';
import NFTToday from './NFTToday';
import TrendingToday from './TrendingToday';

const Home = () => {
    
    return (
        <div className="home">
            <h1>Welcome to the BlockChain Almanac, your Intro to all things Crypto!</h1>
            <NFTToday />
            <CoinToday />
            <TrendingToday />
        </div>
    )
}      

export default Home;