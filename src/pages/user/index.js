import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Repo from './repo';

const User = () => {

  const { user } = useParams();

  const [userProfile, setUserProfile] = useState({
    login: '',
    id: '',
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: '',
    name: '',
    company: '',
    blog: '',
    location: '',
    email: '',
    hireable: '',
    bio: '',
    public_repos: '',
    public_gists: '',
    followers: '',
    following: '',
    created_at: '',
    updated_at: '',
  });
  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {

    const getUser = async () => {
      await fetch('http://api.github.com/users/' + user).then(async (res) => {
        if (res.ok)
          setUserProfile(await res.json());
        else
          alert('Not Found user');
      });
    }

    const getRepos = async () => {
      await fetch(userProfile.repos_url).then(async (res) => {
        if (res.ok)
          setUserRepos(await res.json());
        else
          alert('No Repo Url Provided');
      });
    }

    const getDataFromGitHub = async () => {
      if (user) {
        await getUser();
        await getRepos();
      }
      else
        alert('cade o usuario');
    }

    getDataFromGitHub();

  }, [user, userProfile.repos_url]);

  const handleClickBlog = () => window.open(userProfile.blog, '_blanc');

  const handleClickGithubProfile = () => window.open(userProfile.html_url, '_blanc');

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-md-2 shadow px-4">
          <div className="row justify-content-center d-none d-sm-none d-md-flex">
            <img style={{ maxHeight: 150, maxWidth: 150 }} className='rounded-circle my-4' src={userProfile.avatar_url} alt='user_avatar' />
          </div>
          <div className="row">
            <span style={{ fontSize: 29 }}>
              {userProfile.name ? userProfile.name : userProfile.login}
            </span>
          </div>
          <div className="row mb-2">
            <span className="text-muted">
              {userProfile.name && userProfile.login}
            </span>
          </div>
          <div className="row mb-4">
            {userProfile.company && (
              <>
                <span className="material-icons mr-1" style={{ fontSize: 22 }}>
                  business
                </span>
                <span className="font-weight-light">
                  {userProfile.company}
                </span>
              </>
            )}
          </div>
          <div className="row mb-4">
            <span>
              {userProfile.bio}
            </span>
          </div>
          <div className="row mb-1">
            {userProfile.location && (
              <div className="col">
                <div className="row">
                  <span className="material-icons mr-1" style={{ fontSize: 22 }}>
                    location_on
                  </span>
                  <span >
                    Location
                  </span>
                </div>
                <div className="row">
                  <span>
                    {userProfile.location}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="row mb-1">
            {userProfile.blog && (
              <div className="col">
                <div className="row">
                  <span className="material-icons mr-1 text-primary" style={{ fontSize: 22 }}>
                    language
                  </span>
                  <span className="text-primary">
                    Blog
                  </span>
                </div>
                <div className="row">
                  <span className="text-primary pointer" style={{ fontSize: 16 }} onClick={() => handleClickBlog()}>
                    {userProfile.blog}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="row py-1 fixed-bottom shadow bg-white">
            <span className="text-purple pointer ml-4" onClick={() => handleClickGithubProfile()}>
              Github Profile
            </span>
            <span className="material-icons text-purple pointer ml-2" onClick={() => handleClickGithubProfile()}>
              send
            </span>
          </div>
        </div>
        <div className="col-md-10">
          <div className="row py-2 mx-md-1">
            {userRepos.map((repo) => <Repo repo={repo} key={repo.id} />)}
          </div>
        </div>
      </div>
    </div>
  )

}

export default User;
