import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
      <div>
        <div className='header'>
            | &nbsp;
              <Link to="/design" className='public-header'>Design</Link>
                &nbsp;|&nbsp;
                <Link to="/photo" className='public-header'>Photography</Link>
                &nbsp;|&nbsp;
                <Link to="/art" className='public-header'>Art</Link>
                &nbsp;|&nbsp;
                <Link to="/allworks" className='public-header'>All</Link>
                &nbsp;|
        </div>
      </div>  
    )
  }
  export default Navbar