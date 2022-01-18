import React from 'react';
import { Link } from 'react-router-dom'

function AllGallery() {
    return (

    <div className='container'>
             <Link to="/kitkat" className='item-a'><img className='split'src={`${process.env.PUBLIC_URL}/images/Thumbnaila.png`} alt="winterbreak"/></Link>
             <Link to="/dakota" className='item-b'><img className='split'src={`${process.env.PUBLIC_URL}/images/Thumbnailb.png`} alt=""/></Link>
             <Link to="/claude9" className='item-c'><img className='split'src={`${process.env.PUBLIC_URL}/images/Thumbnailc.png`} alt=""/></Link>
             <Link to="/kitkat" className='item-d'><img className=''src={`${process.env.PUBLIC_URL}/images/.png`} alt=""/></Link>
             <Link to="/kitkat" className='item-e'><img className=''src={`${process.env.PUBLIC_URL}/images/.png`} alt=""/></Link>
             <Link to="/kitkat" className='item-f'><img className=''src={`${process.env.PUBLIC_URL}/images/.png`} alt=""/></Link>
             <Link to="/kitkat" className='item-g'><img className=''src={`${process.env.PUBLIC_URL}/images/.png`} alt=""/></Link>
             <Link to="/kitkat" className='item-h'><img className=''src={`${process.env.PUBLIC_URL}/images/.png`} alt=""/></Link>
             <Link to="/kitkat" className='item-i'><img className=''src={`${process.env.PUBLIC_URL}/images/.png`} alt=""/></Link>
             <Link to="/kitkat" className='item-j'><img className=''src={`${process.env.PUBLIC_URL}/images/.png`} alt=""/></Link>
             <Link to="/kitkat" className='item-k'><img className=''src={`${process.env.PUBLIC_URL}/images/.png`} alt=""/></Link>
             <Link to="/kitkat" className='item-l'><img className=''src={`${process.env.PUBLIC_URL}/images/.png`} alt=""/></Link>
             <Link to="/kitkat" className='item-m'><img className=''src={`${process.env.PUBLIC_URL}/images/.png`} alt=""/></Link>
             <Link to="/kitkat" className='item-n'><img className=''src={`${process.env.PUBLIC_URL}/images/.png`} alt=""/></Link>
             <Link to="/kitkat" className='item-o'><img className=''src={`${process.env.PUBLIC_URL}/images/.png`} alt=""/></Link>
      </div>  
    )
  }
  export default AllGallery