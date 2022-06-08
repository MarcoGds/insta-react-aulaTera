import React from 'react';
import { useLocation } from 'react-router-dom';

import '../CSS/normalize.css';
import '../CSS/main.css';
import '../CSS/fontawesome.min.css';

import { Feed, Post, Drawer, Topbar } from '../components';

export function User() {
  const [user, setUser] = React.useState([]);
  const location = useLocation();

  const id = location.pathname.split('/').at(-1);

  function catchStories(usuario) {
    const stories = usuario.flatMap(({ stories }) => stories);

    console.log({ stories })

    return stories;
  }

  React.useEffect(() => {
    fetch(`https://624c9312c172b69d69274ae4.mockapi.io/api/v1/users/${id}`)
      .then((response) => response.json())
      .then((answer) => setUser(answer));
  }, [id]);

  if (Object.keys(user).length === 0) {
    return <h2>Carregando...</h2>
  }



  return (
    <React.Fragment>
      <Drawer />

      <Topbar />

          <React.Fragment>
            <Feed>
                <Post 
                  key={user.id}
                  avatar={user.avatar}
                  name={user.name}
                  photo={user.photos[0]?.picture}
                  text={user.text}
                  idUser = {user.id}
                />
            </Feed>
          </React.Fragment>
        ).
    </React.Fragment>

  );
}