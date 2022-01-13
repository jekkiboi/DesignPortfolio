import React from 'react';
import { Link } from 'react-router-dom'

function Design() {
    return (
      <div>
        <div className='header'>
              <Link to="/design" className='public-header'>Designs</Link>
                &nbsp;&nbsp;
                <Link to="/photo" className='public-header'>Photography</Link>
                &nbsp;&nbsp;
                <Link to="/art" className='public-header'>
                <img className=''src={`${process.env.PUBLIC_URL}/images/.png`} alt="LinkedIn"/>
                    </Link>
        </div>
      </div>  
    )
  }
  export default Design