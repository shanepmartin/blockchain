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

        <article>
            <section style={{marginLeft:"400px",width: "80%", fontSize: "50px"}} className="">
                <div className="column"></div>
                <div className="column"></div>
                <div className="box has-text-centered" style={{marginRight: "855px", marginLeft: "640px"}}>
                <h1 className='NFTs'>Non Fungible Tokens (NFTs)</h1>
                <h2 className='top'>Here are the Top 100 NFT Collections!</h2>
                </div>   
                    
                    <div style={{ flexDirection: "row", overflowY: "auto", maxHeight: "1500px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px"}} className='column has-text-centered'>
                {
                    nft.map(function (n){
                        return ([
                            <div className="box" style={{paddingTop: "-40px", paddingBottom: "40px", width: "400px", fontSize: "25px"}}>
                                <p>{n.id}: {n.name}</p>
                                <img style={{  height: "300px", width: "300px"}} src={n.logo} alt="logo"/>
                            </div>
                        ])
                    })
                }
                </div>
            </section>
        </article>
        )
    }
}    

export default NFT