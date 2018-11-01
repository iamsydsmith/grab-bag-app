import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import App from './components/App.js';

const familyUrl = 'http://mac-grab-bag.herokuapp.com/family'


ReactDOM.render(<App />, document.getElementById('root'));
