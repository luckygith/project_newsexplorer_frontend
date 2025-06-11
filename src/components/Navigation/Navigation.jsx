import React from 'react'
import '../Navigation/Navigation.css'

function Navigation() {
  return (
    <div className="navigation">
    <div className="navigation__container">
      <p className="navigation__title">What's going on in the world?</p>
      <p className="navigation__description">Find the latest news on any topic and save them in your personal account.</p>
      <div className="navigation__search-container">

      <input className="navigation__search-container-input" type="text" placeholder='Enter topic' />
      <button type="submit" className="navigation__search-container-button">
        Search
      </button>
      </div>
    </div>
  </div>
  )
}
  
export default Navigation