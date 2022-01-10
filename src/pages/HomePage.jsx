import React from "react";
import {Fade} from 'react-reveal'
import { Link } from 'react-router-dom'


function Homepage(){
    return(
    <body className="projectPage">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
                <header>
                    <Fade up>
                        <img className='' src={process.env.PUBLIC_URL + '/images/Gif2.gif'} alt=""/>
                    </Fade>
                </header>

                <br />
                <br />
                <br />
            </body>

    )
}
    
export default Homepage