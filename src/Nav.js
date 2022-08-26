import React from 'react'
import Login from './Login'
import { Link } from "react-router-dom"


function Nav() {
    return (
        <nav className='nav'>
            <a href='/login' className='login'>
                <Login />
            </a>
            <a href='/' class='site-title'>BlockChain Almanac</a>
            <ul class='options'>
                <li>
                    <Link to="/NFT">NFT</Link>
                </li>
                <li>    
                    <Link to="/Tokens">Tokens</Link>
                </li>    
                <li>
                    <Link to="/Defi">DeFi</Link>
                </li>    
                <li>
                    <Link to="/Metaverse">Metaverse</Link>
                </li>   
                <li> 
                    <Link to="Web3">Web3</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Nav