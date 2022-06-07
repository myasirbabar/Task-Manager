import './index.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Because of strict mode first time useEffect Runs Twice 
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);

reportWebVitals();
