import React from 'react';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from './components/Index';
import Auth from './containers/Auth/Auth';
import AuthSuccess from './containers/Auth/Auth.success';
import ConfirmRegistration from './components/ConfirmRegistration/ConfirmRegistration';

function App() {
  return (
    <Router>
      <div className="font-sans w-full h-full m-0">
        <Route path="/" component={Index} />
        <Switch>
          <Route path="/register" component={Auth} />
          <Route path="/register-success" component={AuthSuccess} />
          <Route path="/confirm-account" component={ConfirmRegistration} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
