import React, { useContext } from 'react';
import UserProfile from '../../components/UserProfile';
import Header from '../../components/Header';
import Footer from '../../components/Footer/indexs';
import UserContext from '../../contexts/userContext';
import Button from '../../components/Button';
import styles from './ProfilePage.module.scss'

const ProfilePage = (props, ) => {
    
  const [user] = useContext(UserContext);
    
  
  return (
    <>
      <Header/>
      <section className={styles.container}>
        <section className={styles.aside}>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </section>
        <section className={styles.section}>
          <UserProfile user ={user}/>
        </section>
      </section>
      <Footer/>
    </>
  );
};

export default ProfilePage;
