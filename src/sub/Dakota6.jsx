import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Navbar from '../components/Navbar';

function Dakota6(){
    return(

        <header>
        <Header />
        <br />
        <br />
        <br />
        <br />
        <img className='bigdakota5'src={`${process.env.PUBLIC_URL}/images/dakota6.jpg`} alt="dakota6"/>
        <br />
        <h1 className='undertitle'>Model: Dakota Johnson <br />
            December 2021 <br />
            Livermore CA
        </h1>
        <br />
        <br />
        <br />
        <br />
        </header>
   
    
    )
}
export default Dakota6