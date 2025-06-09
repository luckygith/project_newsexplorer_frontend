import React from 'react';
import { Link } from 'react-router-dom';

import '../Header/Header.css';


function Header () {
  return (
    <header className="header">
      

<p className="header__logo">NewsExplorer</p>
<div className='header__links'>
<Link className="header__home-button" to="/">
Home
</Link>
<button className="header__sign-in-button" type='button' >
    Sign in
</button>
</div>

    </header>
    

  )
}

export default Header