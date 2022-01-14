import React from "react";
import {Fade} from 'react-reveal'
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Home from '../components/Home';


function Homepage(){
    return(
    <body className="projectPage">
              <Header />
              <br />
                <header>
                    <Fade up>
                        <Home />
                    </Fade>
                </header>

            </body>
    )
}
    
export default Homepage