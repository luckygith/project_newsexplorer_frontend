import React from 'react';
import { Link } from 'react-router-dom';

import '../Header/Header.css';


function Header ({handleLoginClick}) {
  return (
    <header className="header">
      
<div className="header__container">
<p className="header__logo">NewsExplorer</p>
<div className='header__links'>
<Link className="header__home-button" to="/">
Home
</Link>
<button className="header__sign-in-button" type='button' onClick={handleLoginClick}>
    Sign in
</button>

</div>
</div>

    </header>
    

  )
}

export default Header