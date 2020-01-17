import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

<BrowserRouter><App /></BrowserRouter>,
     document.getElementById('root'));

serviceWorker.unregister();
