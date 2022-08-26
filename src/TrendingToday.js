import React, { useState, useEffect } from 'react'

const TrendingToday = (props) => {
    const [trending, setTrending] = useState(null);

    useEffect(() => {
        let fetchTrending = async () => {
            let req = await fetch('http://localhost:3000/results');
            let res = await req.json();
            setTrending(res)
        };
        fetchTrending();
    }, [props.id]); 
    console.log(trending)
    
    if (trending) {
        return (
            <section className="home">
                <article>
                    <section style={{ marginLEft: "400px", width: "80%", fontSize: "40px" }} className="home">
                        <div className='column'></div>
                        <div className="box has-text-centered" style={{ marginRight: "855px", marginLeft: "640px" }}></div>
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
                </article>        
            </section>
        )
    }
}

export default TrendingToday