import React from 'react';

import './CSS/normalize.css';
import './CSS/main.css';
import './CSS/fontawesome.min.css';

import { Topbar, Stories, Feed, Drawer } from './components';

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [users, setUsers] = React.useState([]);

  function catchStories (usuario) {
    const stories = usuario.flatMap(({ stories }) => stories);

    console.log({ stories })

    return stories;
  }

  React.useEffect(() => {
    fetch('https://624c9312c172b69d69274ae4.mockapi.io/api/v1/users')
      .then((response) => response.json())
      .then((answer) => setUsers(answer));
  }, []);



  return (
    <React.Fragment>
      <Drawer open={drawerOpen} closeChat={setDrawerOpen} />

      <Topbar openChat={setDrawerOpen} />

      {users.lenght === 0
        ? ('Loading...')
        : (
          <React.Fragment>
            <Stories dates={catchStories(users)} />

            <Feed />
          </React.Fragment>
        )
      }



    </React.Fragment>

  );
}

export default App;
