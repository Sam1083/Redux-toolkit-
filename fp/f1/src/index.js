import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import reduxStore from './reduxStore/store';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <Provider store={reduxStore.store}>
  <PersistGate loading={null} persistor={reduxStore.persistor}>
      <BrowserRouter>
        <main>
          <App />
        </main>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);






