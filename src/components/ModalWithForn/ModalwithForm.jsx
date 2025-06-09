import React from 'react'
import '../ModalWithForn/ModalwithForm.css'

const ModalwithForm = ({onSubmit}) => {
  
  
  
  return (
<div className="modal">
  <div className="modal__content">
    <button type="button" className="modal__close">
    </button>
    <div className="modal__form-container">
      <h3 className="modal__title"></h3>
    <div className="modal__form" onSubmit={onSubmit}></div>
    </div>
  </div>
</div>
  )
}

export default ModalwithForm