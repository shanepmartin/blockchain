import React from 'react'
import './App.css';
import Nav from './Nav';
import Home from './Home';
import NFT from "./NFT";
import Tokens from "./Tokens";
import Defi from "./Defi";
import Metaverse from "./Metaverse";
import Web3 from "./Web3";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Nav />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nft" element={<NFT />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/defi" element={<Defi />} />
          <Route path="/metaverse" element={<Metaverse />} />
          <Route path="/web3" element={<Web3 />} />
        </Routes> 
      </div>   
    </>  
  )
}
export default App;
