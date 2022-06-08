import React from 'react';

import '../CSS/normalize.css';
import '../CSS/main.css';
import '../CSS/fontawesome.min.css';

import { Avatar, Stories, Feed, Post } from '../components';

export function Home() {

  const [users, setUsers] = React.useState([]);

  function catchStories(usuario) {
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

      {users.lenght === 0
        ? ('Loading...')
        : (
          <React.Fragment>
            <Stories>
              {catchStories(users)
              .map((story) => (

                <Avatar
                  key={story.id}
                  image={story.story}
                  size="large" selectable
                />

              ))}
            </Stories>

            <Feed>
              {users.map((user) => (
                <Post 
                  key={user.id}
                  avatar={user.avatar}
                  name={user.name}
                  photo={user.photos[0]?.picture}
                  text={user.text}
                  idUser = {user.id}
                />
              ))}
            </Feed>
          </React.Fragment>
        )
      }



    </React.Fragment>

  );
}