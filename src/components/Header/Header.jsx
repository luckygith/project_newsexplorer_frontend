import React from 'react';
import '../Header/Header.css';


function Header () {
  return (
    <header className="header">
<p className="header__logo">NewsExplorer</p>
<div className='header__links'>
<Link to="/">
<p className="header__home">Home</p>
</Link>
<button className="header__sign-in-button" type='button' onClick={handleSignInClick}>
    Sign in
</button>
</div>
    </header>
    

  )
}

export default Header