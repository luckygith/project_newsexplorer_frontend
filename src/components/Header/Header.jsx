import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../Header/Header.css';
import menuIconWhite from '../../assets/menuIconWhite.svg'
import menuIconBlack from '../../assets/menuIconBlack.svg'

function Header ({handleLoginClick, handleMenuIcon}) {

const location = useLocation();

const savedNewsPagePath = location.pathname === "/saved-news"

const headerTextStyle = {
  color: savedNewsPagePath ? "black" : "white",
};

const headerContainerStyle = {
  borderBottom: savedNewsPagePath ? "1px solid rgba(0,0,0,0.5)" : "1px solid rgba(255,255,255,0.2)",
};

const handleMenuIconClick = () => {
  handleMenuIcon()
}

  return (
    <header className="header" style={headerTextStyle}>
      
<div className="header__container" style={headerContainerStyle}>
<p className="header__logo">NewsExplorer</p>
<div className='header__links'>
<p className="header__home-button" to="/">
Home
</p>

<p className="header__sign-in-button" type='button' onClick={handleLoginClick}>
    Sign in
</p>

</div>

   <button className="header__menu-icon">
      <img src={savedNewsPagePath? menuIconBlack : menuIconWhite} alt="header drop down menu" onClick={handleMenuIconClick}/>
    </button>

</div>

    </header>
    

  )
}

export default Header