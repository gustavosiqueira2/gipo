import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import App from './app.routes';
import User from '../pages/user';

const Routes = () => {

  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path='/' component={App} /> */}
        <Route exact path='/u/:user?' component={User} />
      </Switch>
    </BrowserRouter>
  )

}

export default Routes;
