import React from 'react';
import '../Profile/Profile.css';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Profile () {
  return (
    <>

    <Header />
    <section className="profile__content">
    <p className="profile__subtitle">Saved articles</p>
<h3 className="profile__title">Elise, you have 5 saved articles</h3>
<p className="profile__heading">By keywords: Nature, Yellowstone, and 2 other</p>
</section>
    <Main />
    <Footer />
    </>
  )
}

export default Profile