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
            <article>
                <section style={{marginLEft:"400px", width: "80%", fontSize: "40px"}} className="home">
                    <div className='column'></div>
                    <div className="box has-text-centered" style={{ marginRight: "855px", marginLeft: "640px" }}></div>
                    <h2>NFT of the Day: {nft.name}</h2>
                    <img 
                        src='https://nftdroops.com/wp-content/uploads/elementor/thumbs/lo6KW9fX_400x400-pnn2dyrx2ft3gvpd2gz573a4wuzhvwmkaef27cc2r4.jpg'
                        alt='new'
                        />
                </section>
            </article>    
        )
    }    
}

export default NFTToday