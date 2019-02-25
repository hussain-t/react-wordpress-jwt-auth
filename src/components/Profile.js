import React from 'react';

const Profile = props => {
  const user = JSON.parse(localStorage.getItem('AUTH_TOKEN'));
  return (
    <div className="container">
      <div className="user-snippet">
        <h1>HT</h1>
      </div>
      <h2>{user.user_display_name}</h2>
      <button onClick={() => {
        localStorage.removeItem('AUTH_TOKEN');
        props.history.push('/');
        }}
      >
      Log Out
      </button>
    </div>
  )
}

export default Profile;