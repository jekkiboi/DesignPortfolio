import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
      <div>
        <div className='header'>
          <span className='inlineheader'>     
            <span className="headerlinks">
           
              <Link to="/design" className='public-header'>Home</Link>
                &nbsp;&nbsp;
                <Link to="/photo" className='public-header'>Photo</Link>
                &nbsp;&nbsp;
                <Link to="/contact" className='public-header'>Contact</Link>
               
            </span>
          </span>
        </div>
      </div>  
    )
  }
  export default Header