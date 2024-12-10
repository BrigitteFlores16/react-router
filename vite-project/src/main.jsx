import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx'


import 'boostrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';

import * as boostrap from 'bootstrap';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);