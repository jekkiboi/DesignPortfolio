import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Navbar from '../components/Navbar';

function Dakota5(){
    return(

        <header>
        <Header />
        <br />
        <br />
        <br />
        <br />
        <Link to="/dakota" className='public-header'>
        <img className='back'src={`${process.env.PUBLIC_URL}/images/back.png`} alt="home"/>
        </Link>
        <br />
        <br />
        <br />
        <br />
        <img className='bigdakota5'src={`${process.env.PUBLIC_URL}/images/dakota5.jpg`} alt="dakota5"/>
        </header>
   
    
    )
}
export default Dakota5