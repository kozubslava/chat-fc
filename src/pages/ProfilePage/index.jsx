import React from 'react';
import UserProfile from '../../components/UserProfile';
const ProfilePage = (props) => {
  const user = {
    imgSrc: 'https://ic.pics.livejournal.com/pereverstal/78513478/101084/101084_800.jpg',
    firstName: 'Jone',
    lastName: 'Doe',
    isMale:true,
    email: 'jone@doe.com',
    password: '12345678',
    
    
  };
  return (
    <>
      <UserProfile user ={user}/>
    </>
  );
}

export default ProfilePage;
