// to compile use NODE_ENV=production node_modules/.bin/webpack -p
// to run NODE_ENV=production node_modules/.bin/babel-node --presets 'react,es2015' src/server.js
// to nest routes <Route path="athlete/:id" component={AthletePage}/>

"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};