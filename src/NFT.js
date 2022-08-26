import React, { useState, useEffect } from 'react'

const NFT = (props) => {
    const [nft, setNFT] = useState(null);

    useEffect(() => {
        const fetchNFT = async () => {
            let req = await fetch('https://lunarcrush.com/api3/nfts/list')
            let res = await req.json();
            setNFT(res.data)
        };
        fetchNFT();
    }, [props.id]);

    if (nft) {
        console.log(nft)
        return (
            <section className="NFT">
                <h1 className='NFTs'>Non Fungible Tokens (NFTs)</h1>
                <h2>Here are the Top 100 NFT Collections!</h2>
                <div className='options'>
                {
                    nft.map(function (n){
                        return ([
                            <div style={{ marginLeft: "1300px", display: "grid" }}>
                            <p>{n.id}: {n.name}</p>
                                <img style={{  height: "400px", width: "400px"}} src={n.logo} alt="logo"/>
                            </div>
                        ])
                    })
                }
                </div>
            </section>
        )
    }
}    

export default NFT