import React from 'react'
import '../ModalWithForn/ModalwithForm.css'
import useModalClose from '../../hooks/modal'
const ModalwithForm = ({onSubmit, title, children, handleCloseModal}) => {
  

  
  return (
<div className="modal">
  <div className="modal__content">
    <button type="button" className="modal__close" onClick={handleCloseModal}>
    </button>
    <div className="modal__form-container">
      <h3 className="modal__title">{title}</h3>
    <form className="modal__form" onSubmit={onSubmit}>  {children}</form>
  
    </div>
  </div>
</div>
  )
}

export default ModalwithForm