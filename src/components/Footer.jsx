import React from 'react';
import { Link } from 'react-router-dom'


function Footer(){
    return(
        <div className='footer'>
           <span className='inlinefooter'> 
                <span className='footerlinks'>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/my-full-site" className='public-footer'>Home</Link>
                      &nbsp;&nbsp;
                      <Link to="/about" className='public-footer'>About</Link>
                      &nbsp;&nbsp;
                      <Link to="/contact" className='public-footer'>Contact</Link>
                      &nbsp; &nbsp;
                      <a href="https://www.instagram.com/jackwhispers/" target='instagram'> 
                        <img className='instathumbnail'src={`${process.env.PUBLIC_URL}/images/instagram.png`} alt="Instagram"/>
                    </a>
                &nbsp;
                    {/* <a href="https://www.linkedin.com/in/jack-mayer-se/" target='LinkedIn'> 
                        <img className='thumbnail'src={`${process.env.PUBLIC_URL}/images/linkedin.png`} alt="LinkedIn"/>
                    </a> */}
            &nbsp; &nbsp; 
                </span>
            </span>

            <br />
        </div>
    )
}
export default Footer