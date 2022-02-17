import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import React from 'react';
import Routers from './routers/router.jsx';

import { render } from 'react-dom';

import store from './store/configStore';

console.log(
  '%c<== F . L . C ==>',
  'color:#FF8A71;font-size:2rem;font-weight:bold;'
);

const APP = document.getElementById('app');

render(
  <Provider store={store}>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </Provider>,
  APP
);
