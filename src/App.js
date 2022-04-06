import React from 'react';

import './CSS/normalize.css';
import './CSS/main.css';
import './CSS/fontawesome.min.css';

import { Topbar, Stories, Feed, Drawer } from './components';

function App() {

  const [ drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <React.Fragment>

      <Drawer open={drawerOpen} closeChat={setDrawerOpen} />

      <Topbar openChat={setDrawerOpen} />

      <Stories />

      <Feed />

    </React.Fragment>

  );
}

export default App;
