import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Repo from './repo';

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
    <div style={{ display: 'flex', justifyContent: 'flex-start', height: '100%', width: '100%' }}>
      <div style={{ position: 'relative', float: 'left', width: 240, backgroundColor: '#364960', height: '100%', padding: 20, boxShadow: 'rgba(0, 0, 0, 0.17) 2px 0px 20px 0px', zIndex: 1 }} >

        <div style={{ marginBottom: 10 }}>
          <img src={userProfile.avatar_url} style={{ maxWidth: 200, maxHeight: 200, borderRadius: '50%' }} alt='user_image' />
        </div>

        <div style={{ marginBottom: 5 }}>
          <span style={{ fontFamily: 'Roboto', fontSize: 24 }}>
            {userProfile.name ? userProfile.name : userProfile.login}
          </span>
        </div>

        <div style={{ marginBottom: 20 }}>
          <span style={{ fontFamily: 'Roboto' }}>
            {userProfile.company}
          </span>
        </div>

        <div>
          <span style={{ fontFamily: 'Roboto' }}>
            {userProfile.bio}
          </span>
        </div>

      </div>

      <div style={{ padding: 20, height: '100%', width: '100%', backgroundColor: '#455468', overflow: 'scroll' }}>
        {userRepos.map((repo) => <Repo key={repo.id} repo={repo} />)}
      </div>

    </div>
  )

}

export default User;
