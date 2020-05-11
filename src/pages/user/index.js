import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

// import { Container } from './styles';
import '../../assets/css/global.css';

const User = () => {

  const { user } = useParams();

  const [userProfile, setUserProfile] = useState({
    repos_url: ''
  });
  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {

    const getUser = async () => {
      await fetch('http://api.github.com/users/' + user).then(async (res) => {
        if (res.ok) {

          const result = await res.json();
          console.log(result)

          setUserProfile(result);

        }
        else alert('Not Found user');
      });
    }

    const getRepos = async () => {
      await fetch(userProfile.repos_url).then(async (res) => {
        if (res.ok) {

          const result = await res.json();
          console.log(result);

          setUserRepos(result);

        }
        else alert('No Repo Url Provided');
      });
    }

    const getDataFromGitHub = async () => {
      if (user) {
        await getUser();
        await getRepos();
      }
      else alert('cade o usuario');
    }

    getDataFromGitHub();

  }, [user, userProfile.repos_url]);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, backgroundColor: '#364960' }} >

        <div>
          <img src={userProfile.avatar_url} style={{ maxWidth: 200, maxHeight: 200, borderRadius: '50%' }} alt='user_image' />
        </div>

        <div>
          <span className='white'>
            {userProfile.name}
          </span>
        </div>

        <div>
          <span>
            {userProfile.bio}
          </span>
        </div>

        <div>
          <span>
            {userProfile.company}
          </span>
        </div>

      </div>

      <div style={{ flex: 8, padding: 20 }}>
        {
          userRepos.map((repo) => {
            return (
              <div key={repo.id}>
                <span>
                  {repo.name}
                </span>
              </div>
            )
          })
        }
      </div>

    </div>
  )

}

export default User;
