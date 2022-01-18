import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Navbar from '../components/Navbar';

function Claude9(){
    return(
        <header>
            <Header />
            <br />
            <div className="navbarsub">
            </div>
        <div className='kitkat'>
        <Link to="/allworks" className='public-header'><img className='back'src={`${process.env.PUBLIC_URL}/images/back.png`} alt="home"/></Link>
            <div className='kitkattitlegroup'>
                <h1 className='kitkattitle'>Claude 9</h1>
                <a href="https://www.instagram.com/claude9salon/" target='dakota'> 
                    <h2 className='kitkattagline'>@claude9salon</h2>
                </a>
                <h3 className='tools'>Adobe Photoshp / Adobe Illustrator</h3>
            </div>
            <span className='inlinekitkat'>
                <div className='kitkatpicgroup'>
                <h3 className='claudebody'>Ms. Claude Kim hired me to create graphics for her in store experience. I designed Ms. Kim Three banners as well as extra graphics to create a brand for her salon. I meticulously masked and wrapped images of clouds into Google's Pacifico font. </h3>
                &nbsp;
                
                </div>
                <img className='claudepic'src={`${process.env.PUBLIC_URL}/images/CHair.png`} />
            </span>
                <br />
                <br />
                <br />
                <br />
                <img className='c9thumbnail'src={`${process.env.PUBLIC_URL}/images/plane.png`} />
                <br />
                <img className='c9thumbnail'src={`${process.env.PUBLIC_URL}/images/claudebanner.png`} />
                <br />
                <img className='c9thumbnail'src={`${process.env.PUBLIC_URL}/images/sky1.png`} />
                

        </div>
        </header>
    )
}
export default Claude9