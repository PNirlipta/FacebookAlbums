import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import User from './Profile';
import Albums from './Albums';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/profile" component={User} />
        <Route path="/albums" component={Albums} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister();
