import React from 'react'
import './SearchForm.css'

function SearchForm() {
  return (


<div className="search-form">
<div className="search-form__container">
  <p className="search-form__title">What's going on in the world?</p>
  <p className="search-form__description">Find the latest news...</p>
  <div className="search-form__search-container">
    <input className="search-form__search-container-input" type="text" placeholder='Enter topic'/>
    <button className="search-form__search-container-button">Search</button>
  </div>
</div>
</div>
  )
}
  
export default SearchForm;