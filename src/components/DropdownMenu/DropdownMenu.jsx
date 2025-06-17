import React from 'react'
import './DropdownMenu.css'; 
import Header from '../Header/Header';
import useModalClose from '../../hooks/modal';
import close from '../../assets/close.svg'

const DropdownMenu = ({handleLoginClick, handleCloseModal}) => {

  const savedNewsPagePath = location.pathname === "/saved-news"



  return (
    <div className="dropdown-menu">
    {/* <p className="header__logo">NewsExplorer</p> */}
 
 
  <div className="dropdown-menu__modal-container">
    <div className="dropdown-menu__header">
      <div className="dropdown-menu__header-logo">
      <p className="dropdown-menu__header-logo-item header__logo">
      NewsExplorer
      </p>
      </div>
      <button className="dropdown-menu__close">
        <img src={close} alt="" onClick={handleCloseModal}/>
      </button>
    </div>
    <div className="dropdown-menu__items">
      <p className="dropdown-menu__items-home">Home</p>
      <p className="dropdown-menu__items-login header__sign-in-button" type='button' onClick={handleLoginClick}>
      Sign in
      </p>
    </div>
  </div>
    
    
    </div>
  )
}

export default DropdownMenu;