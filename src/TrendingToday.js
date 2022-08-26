import React, { useState, useEffect } from 'react'

const TrendingToday = (props) => {
    const [trending, setTrending] = useState(null);

    useEffect(() => {
        let fetchTrending = async () => {
            let req = await fetch('http://localhost:3000/results');
            let res = await req.json();
            setTrending(res)
            // setTrending(trending)
        };
        fetchTrending();
    }, [props.id]); 
    console.log(trending)
    
    if (trending) {
        return (
            <section className="home">
                {/* <h1>Welcome to the BlockChain Almanac, your Intro to all things Crypto!</h1> */}
                <h2>Trending:</h2>
                <h2>{JSON.stringify(trending[1].title)}</h2>
                <h2>{JSON.stringify(trending[3].title)}</h2>
                <h2>{JSON.stringify(trending[5].title)}</h2>
                <h2>{JSON.stringify(trending[7].title)}</h2>
                <h2>{JSON.stringify(trending[9].title)}</h2>
                <h2>{JSON.stringify(trending[11].title)}</h2>
                <h2>{JSON.stringify(trending[13].title)}</h2>
                <h2>{JSON.stringify(trending[15].title)}</h2>
            </section>
        )
    }
}

export default TrendingToday