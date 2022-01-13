import React from 'react';
import Homepage from '../pages/Homepage';
import { Switch, Route } from 'react-router-dom';
import Photo from '../pages/Photo';
import AllWorks from '../components/AllWorks';
import Design from '../components/Design';
import Kitkat from '../sub/Kitkat';
// import About from '../pages/About';
// import Hscredit from '../pages/Hscredit';
// import Lizzie from '../pages/Lizzie';
// import Tamagotchi from '../pages/Tamagotchi';
// import Contact from '../pages/Contact';

function Routes(props){
  
    return(
     <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/photo' component={Photo} />
        <Route exact path='/design' component={Design} />
        <Route exact path='/allworks' component={AllWorks} />
        <Route exact path='/photo' component={Photo} />
        {/* sub */}
        <Route exact path='/kitkat' component={Kitkat} />
      </Switch>

    )
}

export default Routes;