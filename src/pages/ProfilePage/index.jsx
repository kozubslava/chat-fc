import React from 'react';
import UserProfile from '../../components/UserProfile';
const ProfilePage = (props) => {
  const user = {
    imgSrc: 'https://cs14.pikabu.ru/post_img/2023/09/07/6/1694074336184867164.jpg',
    firstName: 'Jone',
    lastName: 'Doe',
    isMale:'Male',
    email: 'jone@doe',
    password: '12345678',
    
    
  };
  return (
    <>
      <UserProfile user ={user}/>
    </>
  );
}

export default ProfilePage;
