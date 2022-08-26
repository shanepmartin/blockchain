import React, { useState, useEffect } from 'react'

const NFTToday = (props) => {
    const [nft, setNFT] = useState(null);

    useEffect(() => {
        const fetchNFT = async () => {
            let req = await fetch('https://lunarcrush.com/api3/nftoftheday');
            let nft = await req.json();
            console.log('nft', nft)
            setNFT(nft)
        };
        fetchNFT();
    }, [props.id]);

    if (nft) {
        return (
            <section className="home">
                {/* <h1>Welcome to the BlockChain Almanac, your Intro to all things Crypto!</h1> */}
                <h2>NFT of the Day: {nft.name}</h2>
            </section>
        )
    }    
}

export default NFTToday