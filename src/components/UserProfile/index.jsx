import React from 'react';
import styles from './UserProfile.module.scss'
import defaultImgSrc from "../../images/EXg7x-EWAAILbYK.jpeg";

const UserProfile = ({user}) => {

  return (
    <div className={styles.userProfile}>
      <img src={ user.imgSrc || defaultImgSrc} alt={`${user.firstName} ${user.lastName}`} />
      <div className="user-info">
        <h2>{`${user.firstName} ${user.lastName}`}</h2>
        <p>Email: {user.email}</p>
        <p>Gender: {user.isMale ? 'Male' : 'Female'}</p>
      </div>
      <button>Castomize profile</button>
    </div>
  );
}

export default UserProfile;
