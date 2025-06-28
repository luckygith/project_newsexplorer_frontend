import React, { useState} from 'react'
import useForm from '../../hooks/useForm';
import './SearchForm.css'

function SearchForm({handleSearchForm, preloader}) {


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
  <form className="search-form__search-container" onSubmit={handleSubmit}>
    <input name="query" value={values.query} onChange={handleChange} className="search-form__search-container-input" type="text" placeholder='Enter topic'/>
    <button type='submit' className="search-form__search-container-button" disabled={isDisabled} >Search</button>
  </form>
</div>
</div>
  )
}
  
export default SearchForm;