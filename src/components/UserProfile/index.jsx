import React from 'react';

const UserProfile = ({user}) => {
  return (
    <div className="user-profile">
      <img src={user.imgSrc} alt={`${user.firstName} ${user.lastName}`} />
      <div className="user-info">
        <h2>{`${user.firstName} ${user.lastName}`}</h2>
        <p>Email: {user.email}</p>
        <p>Gender: {user.isMale ? 'Male' : 'Female'}</p>
      </div>
    </div>
  );
}

export default UserProfile;
