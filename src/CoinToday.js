import React, { useState, useEffect } from 'react'

const CoinToday = (props) => {
    const [coin, setCoin] = useState(null);

    useEffect(() => {
        const fetchCoin = async () => {
            let req = await fetch('https://lunarcrush.com/api3/coinoftheday');
            let coin = await req.json();
            console.log('coin', coin)
            setCoin(coin)
        };
        fetchCoin();
    }, [props.id]);

    if (coin) {
        return (
            <section className="home">
                {/* <h1>Welcome to the BlockChain Almanac, your Intro to all things Crypto!</h1> */}
                <h2>Coin of the Day: {coin.name} ({coin.symbol})</h2>
            </section>
        )
    }        
}

export default CoinToday