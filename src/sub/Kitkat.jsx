import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Navbar from '../components/Navbar';

function Kitkat(){
    return(
        <header>
            <Header />
            <br />
            <div className="navbarsub">
            </div>
        <div className='kitkat'>
        <Link to="/allworks" className='public-header'><img className='back'src={`${process.env.PUBLIC_URL}/images/back.png`} alt="home"/></Link>
            <div className='kitkattitlegroup'>
                <h1 className='kitkattitle'>Kit-Kat</h1>
                <a href="https://wearefleshandbones.com/" target='fleshandbones'> 
                    <h2 className='kitkattagline'>Flesh and Bones Inc.</h2>
                </a>
                <h3 className='tools'>Adobe Photoshp / Adobe Illustrator</h3>
            </div>
            <span className='inlinekitkat'>
                <div className='kitkatpicgroup'>
                <h3 className='kitkatbody'>Recently I was contracted to help with a series of commercials for KitKat via Flesh and Bones inc. 
                    I was tasked with editing frame by frame by masking the kitkat/crumbs, editing out defects and re rendering the backgrounds. </h3>
                &nbsp;
                <img className='kitkatgif1'src={`${process.env.PUBLIC_URL}/images/lunchbreak.gif`} />
                </div>
                <img className='kitkatpic'src={`${process.env.PUBLIC_URL}/images/kitkat.png`} />
            </span>
                <br />
                <br />
                <br />
                <br />
                <img className='kitkatgif2'src={`${process.env.PUBLIC_URL}/images/winterbreak.gif`} />
        </div>
        </header>
    )
}
export default Kitkat