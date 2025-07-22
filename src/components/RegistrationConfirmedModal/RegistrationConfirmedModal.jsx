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
			title="Registration successfully completed!"
			handleCloseModal={handleCloseModal}
			handleSubmit={handleSubmit}
		>
			<button
				type="button"
				className="modal__to-register-button"
				onClick={handleOrLoginClick}
			>
				Sign in
			</button>
		</ModalwithForm>
	);
};

export default RegistrationConfirmedModal;
