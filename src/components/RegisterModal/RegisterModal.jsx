import React from 'react';
import '../RegisterModal/RegisterModal.css';

import ModalwithForm from '../ModalWithForn/ModalwithForm';
import useForm from '../../hooks/useForm';


const RegistrationModal =({
  handleCloseModal,
  handleRegistration,
  isOpen,
}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(); //(values)
  };

  const handleOrLoginClick = () => {
    handleLoginClick();
  };


  return (
    <ModalwithForm
    title="Sign up"
    handleCloseModal={handleCloseModal}
    onSubmit={handleSubmit}
    isOpen={isOpen}
    >
<label htmlFor="email" className="modal__label">
  Email{""}
</label>
   <input type="email" className="modal__input" placeholder='Email' id='email' name='email' />
   <span className="modal__input-error"
            id="modal__input-error"
          ></span>
   <label htmlFor="email" className="modal__label">
  Password{""}
</label>
   <input type="password" className="modal__input" placeholder='Password' id='password' name='password' />
   <span className="modal__input-error"
            id="modal__input-error"
          ></span>

<div className="modal__buttons-container">
        <button
          type="submit"
          className="modal__form-submit"
          // disabled={isLoading || isDisabled}
        >
          Sign up
          {/* {isLoading ? "Logging in..." : "Log In"} */}
        </button>
        <div className='modal__to-register-container'>
          or
        <button
          type="button"
          className="modal__to-register-button"
          onClick={handleOrLoginClick}
        >
          Sign in
        </button>
        </div>
      </div>
    </ModalwithForm>
 
  )
}

export default RegistrationModal