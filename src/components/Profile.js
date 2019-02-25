import React from 'react';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('AUTH_TOKEN'));
  return (
    <div className="container">{user.user_display_name}</div>
  )
}

export default Profile;