import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './w3.css'

import { Provider } from 'react-redux'
import store from './redux/Store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
      
    
    
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.register();
