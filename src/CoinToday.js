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
            <article>
                <section style={{ marginLEft: "400px", width: "80%", fontSize: "40px" }} className="home">
                        <div className='column'></div>
                        <div className="box has-text-centered" style={{ marginRight: "855px", marginLeft: "640px" }}></div>
                    <h2>Coin of the Day: {coin.name} ({coin.symbol})</h2>
                    <img className='cardano'
                        src='https://ih1.redbubble.net/image.2817155423.9351/st,small,507x507-pad,600x600,f8f8f8.jpg'
                        alt='new'
                    />    
                </section>
            </article>        
        )
    }        
}

export default CoinToday