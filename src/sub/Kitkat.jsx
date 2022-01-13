import React from 'react';
import { Link } from 'react-router-dom'


function Kitkat(){
    return(
        <div className='kitkat'>
            <h1>Kit-Kat</h1>
            <h2>Flesh and Bones Inc.</h2>
            <span>
                <h3>Recently I was contracted to help with a series of commercials for KitKat via Flesh and Bones inc. I went frame by frame and masked the kitkat/crumbs and spruced the kitkats. </h3>
            <img className=''src={`${process.env.PUBLIC_URL}/images/kitkat.png`} />
            </span>
            <img className=''src={`${process.env.PUBLIC_URL}/images/lunchbreak.gif`} />
            <br />
            <img className=''src={`${process.env.PUBLIC_URL}/images/winterbreak.gif`} />
        </div>
    )
}
export default Kitkat