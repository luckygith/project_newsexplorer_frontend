import React from "react";
import "../ModalWithForm/ModalwithForm.css";
import useModalClose from "../../hooks/modal";
import useForm from "../../hooks/useForm";

const ModalwithForm = ({
	isOpen,
	onSubmit,
	title,
	children,
	handleCloseModal,
}) => {
	useModalClose(isOpen, handleCloseModal);

	return (
		<div className="modal">
			<div className="modal__content">
				<button
					type="button"
					className="modal__close"
					onClick={handleCloseModal}
				></button>
				<div className="modal__form-container">
					<h3 className="modal__title">{title}</h3>
					<form
						className="modal__form"
						onSubmit={onSubmit}
					>
						{children}
					</form>
				</div>
			</div>
		</div>
	);
};

export default ModalwithForm;
