import React, { useEffect, useState } from 'react'

const Tokens = (props) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const fetchToken = async () => {
            let req = await fetch('https://lunarcrush.com/api3/market-pairs/:coin')
            let res = await req.json();
            console.log('res', res)
            setToken(res.data)
        };
        fetchToken();
    }, [props.id]);

    if (token) {
        console.log(token)
        return (
            <section className="Tokens">
                <h1 className='Token'>Tokens</h1>
                <h2>Here are the Top 100 Tokens!</h2>
                <p>{token.map(element => (
                    <h1>{element.name} {element.logo}</h1>
                ))}</p>
            </section>
        )
    }
}
export default Tokens

