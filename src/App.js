import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './CSS/normalize.css';
import './CSS/main.css';
import './CSS/fontawesome.min.css';

import { RoutesController } from './Routes/Routes';

function App() {

  return (
  <BrowserRouter>
    <RoutesController />
  </BrowserRouter>
  )
}

export default App;
