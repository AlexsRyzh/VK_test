import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.scss'
import FormPage from './pages/FormPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormPage />
  </React.StrictMode>
);
