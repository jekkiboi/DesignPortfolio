import React from 'react';
import Homepage from '../pages/Homepage';
import { Switch, Route } from 'react-router-dom';
import Photo from '../pages/Photo';

// import About from '../pages/About';
// import Work from '../pages/Work';
// import Hscredit from '../pages/Hscredit';
// import Lizzie from '../pages/Lizzie';
// import Tamagotchi from '../pages/Tamagotchi';
// import Contact from '../pages/Contact';

function Routes(props){
  
    return(
     <Switch>
        <Route exact path='/design' component={Homepage}/>
        <Route exact path='/photo' component={Photo} />
      </Switch>

    )
}

export default Routes;