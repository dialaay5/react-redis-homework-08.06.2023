import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import classReducer from './reducers/classReducer'

const classStore = createStore(classReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={classStore}><App /></Provider>
  </React.StrictMode>
);
