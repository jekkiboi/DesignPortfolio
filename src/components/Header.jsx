import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
      <div>
        <div className='header'>
              <Link to="/" className='public-header'>Home</Link>
                &nbsp;&nbsp;
                <Link to="/photo" className='public-header'>Photo</Link>
                &nbsp;&nbsp;
                <Link to="/contact" className='public-header'>Contact</Link>
        </div>
      </div>  
    )
  }
  export default Header