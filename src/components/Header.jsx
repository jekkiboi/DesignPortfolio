import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
      <div>
        <div className='header'>
              <Link to="/" className='public-header'><img className='thumbnail'src={`${process.env.PUBLIC_URL}/images/home.png`} alt="home"/></Link>

                &nbsp;&nbsp;
                <Link to="/contact" className='public-header'> <img className='thumbnail'src={`${process.env.PUBLIC_URL}/images/link.png`} alt="contact"/></Link>
                &nbsp;&nbsp;
                <br />
        </div>
      </div>  
    )
  }
  export default Header