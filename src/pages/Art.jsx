import React from 'react';
import { Link } from 'react-router-dom'
import AllGallery from '../galleries/AllGallery'
import Home from '../components/Home';
import Header from '../components/Header';
function Art() {
    return (
        <div>
            <Header />
            <br />
            <Home />
            <div className='container'>
            <h1 className='subtitle'>Art</h1>

            </div>  
        </div>
    )
  }
  export default Art