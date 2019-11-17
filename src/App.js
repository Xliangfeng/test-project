import React from 'react';
import './App.css';
import { Router } from 'react-router-dom'
import routes from './routes'


function App(props) {
  return (
    <Router history={props.history}>
      <div className="App">
        {routes}
      </div>
  </Router>
  );
}

export default App;
