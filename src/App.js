import React from 'react';

import './CSS/normalize.css';
import './CSS/main.css';
import './CSS/fontawesome.min.css';

import { Topbar, Stories, Feed } from './components';

function App() {
  return (
  <React.Fragment>

  <Topbar />

  <Stories />

  <Feed />

  </React.Fragment>
 
  );
}

export default App;
