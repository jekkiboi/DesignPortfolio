import React from 'react';
import HomePage from '../pages/HomePage';
import { Routes, Route } from 'react-router-dom';

// import About from '../pages/About';
// import Work from '../pages/Work';
// import Hscredit from '../pages/Hscredit';
// import Lizzie from '../pages/Lizzie';
// import Tamagotchi from '../pages/Tamagotchi';
// import Contact from '../pages/Contact';

function Routed(props){
  
    return(
     <Routes>
        <Route  path='/home' component={HomePage}/>
        {/* <Route exact path='/about' component={About} /> */}
        {/* <Route exact path='/contact' component={Contact} /> */}
        {/* <Route exact path='/work' component={Work} /> */}
        {/* <Route exact path='/hscredit' component={Hscredit} /> */}
        {/* <Route exact path='/lizzie' component={Lizzie} /> */}
        {/* <Route exact path='/tamagotchi' component={Tamagotchi} /> */}
      </Routes>
        
    )
}

export default Routed;