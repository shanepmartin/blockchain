import React, { useState } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import NFT from "./NFT";
import Tokens from "./Tokens";
import Defi from "./Defi";
import Metaverse from "./Metaverse";
import Web3 from "./Web3";

function RoutesContainer() {

    const [page, setPage] = useState("/")

    return (
        <body className="routes-body">
            <div>
                <RoutesContainer onChangePage={setPage} />
                <Routes>
                    <Route path="/NFT">
                        <NFT />
                    </Route>
                    <Route path="/Tokens">
                        <Tokens />
                    </Route>
                    <Route path="/Defi">
                        <Defi />
                    </Route>
                    <Route path="/Metaverse">
                        <Metaverse />
                    </Route>
                    <Route path="/Web3">
                        <Web3 />
                    </Route>
                </Routes>
            </div>
        </body>
    )
}


export default RoutesContainer