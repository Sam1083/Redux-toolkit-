import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { store } from './reduxStore/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 

  
  <Provider store={store}>
    <BrowserRouter>
      <main>
        <App />
      </main>
    </BrowserRouter>
  </Provider>
);


