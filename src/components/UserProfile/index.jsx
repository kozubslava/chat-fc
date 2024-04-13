import React from 'react';
// import SlideImg1 from "../../images/Sheba1.jpeg";


const UserProfile = ({user}) => {
  return (
    <div className="user-profile">
      <img src={ user.imgSrc} alt={`${user.firstName} ${user.lastName}`} />
      <div className="user-info">
        <h2>{`${user.firstName} ${user.lastName}`}</h2>
        <p>Email: {user.email}</p>
        <p>Gender: {user.isMale ? 'Male' : 'Female'}</p>
      </div>
      <button>update data</button>
    </div>
  );
}

export default UserProfile;
