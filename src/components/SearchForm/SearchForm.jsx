import React, { useState} from 'react'
import useForm from '../../hooks/useForm';
import './SearchForm.css'

function SearchForm({handleSearchForm}) {


  const { values, handleChange, isDisabled } = useForm({
    query: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.query) {
      return;
    }
    handleSearchForm(values.query);
  };

  return (
<div className="search-form">
<div className="search-form__container">
  <p className="search-form__title">What's going on in the world?</p>
  <p className="search-form__description">Find the latest news...</p>
  <div className="search-form__search-container">
    <input value={values.query} onChange={handleChange} className="search-form__search-container-input" type="text" placeholder='Enter topic'/>
    <button type='submit' className="search-form__search-container-button" disabled={isDisabled} >Search</button>
  </div>
</div>
</div>
  )
}
  
export default SearchForm;