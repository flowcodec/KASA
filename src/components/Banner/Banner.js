import React from 'react';
import { Link } from 'react-router-dom'
import Logo from "@/assets/LOGO.svg"
import './Banner.css'

const Banner = () => {
    return (
        <header>
            <div className='blockHeader'>
                <img src={Logo} alt="logo Kasa orange"></img>
                <nav>
                    <Link to='/'><p>Accueil</p></Link>
                    <Link className='last' to='/about'><p>A Propos</p></Link>
                </nav>
            </div>
      </header>
    );
};

export default Banner;