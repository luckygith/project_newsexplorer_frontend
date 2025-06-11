import React from 'react'
import '../LoginModal/LoginModal.css'
import ModalwithForm from '../ModalWithForn/ModalwithForm'
import useForm from '../../hooks/useForm'
import { useState } from 'react'



const LoginModal =({
  handleCloseModal,
  handleLogin,
  handleRegistration,
  handleRegisterClick
}) => {

  const { values, handleChange, setValues, isDisabled } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values); 
    // onSubmit(values);
    setValues({ email: "", password: "" })
  };

  
  const handleOrRegisterClick = () => {
    handleRegisterClick()
  };



  return (
    <ModalwithForm
    title="Sign in"
    handleCloseModal={handleCloseModal}
    onSubmit={handleSubmit}
    >
<label htmlFor="email" className="modal__label">
  Email{""}
</label>
   <input type="email" value={values.email} onChange={handleChange} className="modal__input" placeholder='Email' id='email' name='email' />
   <span className="modal__input-error"
            id="modal__input-error"
          ></span>
   <label htmlFor="email" className="modal__label">
  Password{""}
</label>
   <input type="password" value={values.password} onChange={handleChange}className="modal__input" placeholder='Password' id='password' name='password' />
   <span className="modal__input-error"
            id="modal__input-error"
          ></span>

<div className="modal__buttons-container">
        <button
          type="submit"
          className="modal__form-submit"
          disabled={isDisabled}
          // disabled={isLoading || isDisabled}
        >
          Sign in
          {/* {isLoading ? "Logging in..." : "Log In"} */}
        </button>
        <div className='modal__to-register-container'>
          or
        <button
          type="button"
          className="modal__to-register-button"
          onClick={handleOrRegisterClick}
        >
          Sign up
        </button>
        </div>
      </div>
    </ModalwithForm>
 
  )
}

export default LoginModal