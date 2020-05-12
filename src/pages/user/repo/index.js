import React from 'react';

import './styles.css';

const Repo = ({ repo }) => {

  const handleClick = () => window.open(repo.html_url, '_blanc');

  return (
    <div className='container' onClick={() => handleClick()}>
      <div style={{ backgroundColor: '#6CDFCA', padding: 20, borderRadius: 4 }}>
        <div style={{ marginBottom: 5 }} >
          <span style={{ color: '#364960', fontFamily: 'Roboto', fontSize: 26 }}>
            {repo.name}
          </span>
        </div>
        <div style={{ marginBottom: 20 }}>
          <span style={{ color: '#364960', fontFamily: 'Roboto', fontSize: 14 }}>
            {repo.description}
          </span>
        </div>
        <div>
          <span style={{ fontFamily: 'Roboto', color: '#5f51ff', fontSize: 14 }}>
            {repo.language}
          </span>
        </div>
      </div>
    </div>
  )

}

export default Repo;