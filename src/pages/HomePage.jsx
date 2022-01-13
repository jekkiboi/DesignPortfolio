import React from "react";
import {Fade} from 'react-reveal'
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Navbar from '../components/Navbar';



function Homepage(){
    return(
    <body className="projectPage">
              <Header />
            <br />
            <br />
            <br />
            <br />
                <header>
                    <Fade up>
                        <img className='gif' src={process.env.PUBLIC_URL + '/images/Gif2.gif'} alt=""/>
                    </Fade>
                </header>
                <h1 className="tagline">Jack Mayer</h1>
                <div className="navbar">
                    <Navbar />
                </div>
                <br />
                <br />
                <br />
            </body>

    )
}
    
export default Homepage