import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
      <div>
        <div className='header'>
          <span className='inlineheader'>     
            <span className="headerlinks">
           
              <Link to="/my-full-site" className='public-header'>Home</Link>
                &nbsp;&nbsp;
                <Link to="/about" className='public-header'>About</Link>
                &nbsp;&nbsp;
                <Link to="/contact" className='public-header'>Contact</Link>
               
            </span>
          </span>
        </div>
      </div>  
    )
  }
  export default Header