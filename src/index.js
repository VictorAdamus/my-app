import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/index.css';
import reportWebVitals from './reportWebVitals';
import Users from './components/users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Users />
  </React.StrictMode>
);

reportWebVitals();
