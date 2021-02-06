import React from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './styles/button.module.css';
import Home from './containers/Home/Home';

function App() {
  return (
    <div className={styles.button}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
