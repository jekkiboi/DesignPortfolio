import React from 'react';
import { Link } from 'react-router-dom'
import AllGallery from '../galleries/AllGallery'
import Home from '../components/Home';
import Header from '../components/Header';
function AllWorks() {
    return (
        <div>
            <Header />
            <br />
            <Home />
            <h1 className='subtitle'>  </h1>
            <br />
            <br />
            <br />
            <AllGallery />
            
        </div>
    )
  }
  export default AllWorks