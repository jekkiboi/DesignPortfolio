import React from "react";
import {Fade} from 'react-reveal'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';


function Home(){
    return(
    <body className="homePage">
        <br />
        <br />
        <img className='gif' src={process.env.PUBLIC_URL + '/images/Gif2.gif'} alt="homegif"/>
        <h1 className="tagline">Jack Mayer</h1>
        <div className="navbar">
            <Navbar />
        </div>
    </body>
    )
}  
export default Home