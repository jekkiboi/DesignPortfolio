import React from 'react';
import Homepage from '../pages/Homepage';
import { Switch, Route } from 'react-router-dom';
import AllWorks from '../pages/AllWorks';
import Design from '../pages/Design';
import Photo from '../pages/Photo';
import Art from '../pages/Art';


import Kitkat from '../sub/Kitkat';
import Dakota from '../sub/Dakota';
import Dakota5 from '../sub/Dakota5';
import Dakota6 from '../sub/Dakota6';
import Dakota7 from '../sub/Dakota7';
import Dakota8 from '../sub/Dakota8';
import Claude9 from '../sub/Claude9';
// import About from '../pages/About';
// import Contact from '../pages/Contact';

function Routes(props){
    return(
     <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/photo' component={Photo} />
        <Route exact path='/art' component={Art} />
        <Route exact path='/design' component={Design} />
        <Route exact path='/allworks' component={AllWorks} />
        {/* sub */}
        <Route exact path='/kitkat' component={Kitkat} />
        <Route exact path='/claude9' component={Claude9} />



        <Route exact path='/dakota' component={Dakota} />
        <Route exact path='/dakota5' component={Dakota5} />
        <Route exact path='/dakota6' component={Dakota6} />
        <Route exact path='/dakota7' component={Dakota7} />
        <Route exact path='/dakota8' component={Dakota8} />
      </Switch>
    )
}
export default Routes;