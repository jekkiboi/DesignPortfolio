import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Navbar from '../components/Navbar';

function Dakota(){
    return(
        <header>
            <Header />
            <br />
            <div className="navbarsub">
            </div>
        <div className='kitkat'>
        <Link to="/allworks" className='public-header'><img className='back'src={`${process.env.PUBLIC_URL}/images/back.png`} alt="home"/></Link>
            <div className='kitkattitlegroup'>
                <h1 className='kitkattitle'>Dakota Johnson</h1>
                <a href="https://www.instagram.com/dakota.rosemarie/?hl=en" target='dakota'> 
                    <h2 className='kitkattagline'>@dakota.rosemarie</h2>
                </a>
                <h3 className='tools'>Adobe Photoshp / Adobe Illustrator</h3>
            </div>
            <span className='inlinekitkat'>
                <div className='kitkatpicgroup'>
                <h3 className='kitkatbody'>I shot Dakota in a variety of looks using multiple sets to flesh out Dakota's look book. Shot in 35mm Canon EOS 70D DSLR </h3>
                &nbsp;
                <img className='dakota3'src={`${process.env.PUBLIC_URL}/images/dakota2.jpg`} />
                </div>
                <img className='kitkatpic'src={`${process.env.PUBLIC_URL}/images/dakota1.jpg`} />
            </span>
                <br />
                <br />
                <br />
                <br />
                <img className='dakotathumbnail'src={`${process.env.PUBLIC_URL}/images/dakotathumbnails.png`} />
                <br />
                <br />
                <img className='dakota2'src={`${process.env.PUBLIC_URL}/images/dakota2.jpg`} />
                <span className='inlineDakota'>
                <Link to="/dakota5" className='dakotas'>
                <img className='dakota5'src={`${process.env.PUBLIC_URL}/images/dakota5.jpg`} alt="dakota5"/>
                </Link>
                <Link to="/dakota6" className='dakotas'>
                <img className='dakota5'src={`${process.env.PUBLIC_URL}/images/dakota6.jpg`} alt="dakota6"/>
                </Link>
                <Link to="/dakota7" className='dakotas'>
                <img className='dakota5'src={`${process.env.PUBLIC_URL}/images/dakota7.jpg`} alt="dakota7"/>
                </Link>
                </span>
                <span className='inlineDakota2'>
                <Link to="/dakota9" className='dakotas'>
                <img className='dakota9'src={`${process.env.PUBLIC_URL}/images/dakota9.jpg`} alt="dakota9"/>
                </Link>
                <Link to="/dakota8" className='dakotas'>
                <img className='dakota8'src={`${process.env.PUBLIC_URL}/images/dakota8.jpg`} alt="dakota7"/>
                </Link>
                </span>
        </div>
        </header>
    )
}
export default Dakota