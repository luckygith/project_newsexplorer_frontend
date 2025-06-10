import React from 'react'
import ModalwithForm from '../ModalWithForn/ModalwithForm'

const RegistrationConfirmedModal = ({handleCloseModal, handleLoginClick}) => {
  
    const handleOrLoginClick = () => {
        handleLoginClick();
      };
   
    return (
    <ModalwithForm
    title="Registration succesfully completed!"
    handleCloseModal={handleCloseModal}
    // isOpen={isOpen}
    // onSubmit={handleSubmit}
    >
        <button
          type="button"
          className="modal__to-register-button"
          onClick={handleOrLoginClick}
        >
          Sign in
        </button>
    </ModalwithForm>
  )
}

export default RegistrationConfirmedModal