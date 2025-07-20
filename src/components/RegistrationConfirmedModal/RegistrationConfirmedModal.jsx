import React from "react";
import ModalwithForm from "../ModalWithForm/ModalwithForm";
import "../RegistrationConfirmedModal/RegistrationConfirmedModal.css";

const RegistrationConfirmedModal = ({ handleCloseModal, handleLoginClick }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		handleOrLoginClick();
	};

	const handleOrLoginClick = () => {
		handleLoginClick();
	};

	return (
		<ModalwithForm
			title="Registration succesfully completed!"
			handleCloseModal={handleCloseModal}
			// isOpen={isOpen}
			onSubmit={handleSubmit}
		>
			<div className="registration-modal__content">
				<button
					type="button"
					className="modal__to-register-button"
					onClick={handleOrLoginClick}
				>
					Sign in
				</button>
			</div>
		</ModalwithForm>
	);
};

export default RegistrationConfirmedModal;
