import React from 'react';
import '../Profile/Profile.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Profile () {
  return (
    <>

    <Header />
<h3 className="profile__title">Elise, you have 5 saved articles</h3>
    <Main />
    <Footer />
    </>
  )
}

export default Profile