import React, { useContext } from 'react';
import UserProfile from '../../components/UserProfile';
import Header from '../../components/Header';
import Footer from '../../components/Footer/indexs';
import UserContext from '../../contexts/userContext';
const ProfilePage = (props) => {
    
  const [user] = useContext(UserContext);
    
  
  return (
    <>
      <Header/>
      <UserProfile user ={user}/>
      <Footer/>
    </>
  );
};

export default ProfilePage;
