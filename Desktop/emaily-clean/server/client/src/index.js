
import 'materialize-css/dist/css/materialize.min.css'; 


import React from 'react';
import ReactDOM from "react-dom/client";

import Redux from 'redux';
import { createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux';
import reducers from './reducers';
import {thunk} from 'redux-thunk';
import App from './components/app';




const store = createStore(reducers,{},applyMiddleware(thunk));



const el = document.getElementById("root"); 
const root = ReactDOM.createRoot(el);

root.render(<Provider store={store}><App/></Provider>);