import React from 'react';

const Repo = ({ repo }) => {

  const handleClick = () => window.open(repo.html_url, '_blanc');

  return (
    <div className="float-left col-md-4 col-12" onClick={() => handleClick()}>
      <div className="card mb-3 pointer repo-container">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title text-purple mb-3">
            {repo.name}
          </h5>
          <p className="card-text mb-2">
            {repo.description}
          </p>
          <div className="border rounded float-left mr-1 px-1" style={{ display: 'flex', alignItems: 'center', width: 'fit-content' }} >
            <span className="material-icons mr-1" style={{ fontSize: 18 }}>
              visibility
            </span>
            {repo.watchers_count}
          </div>
          <div className="border rounded float-left mr-1 px-1" style={{ display: 'flex', alignItems: 'center', width: 'fit-content' }} >
            <span className="material-icons mr-1" style={{ fontSize: 18 }}>
              grade
            </span>
            {repo.stargazers_count}
          </div>
          <div className="border rounded px-1" style={{ display: 'flex', alignItems: 'center', width: 'fit-content' }} >
            <span className="material-icons mr-1" style={{ fontSize: 18 }}>
              account_tree
            </span>
            {repo.forks_count}
          </div>
          <div className="card-text">
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
            <small className="text-right text-warning float-right">
              {repo.language}
            </small>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Repo;
