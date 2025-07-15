import React from "react";
import "../RegisterModal/RegisterModal.css";

import ModalwithForm from "../ModalWithForm/ModalwithForm";
import useForm from "../../hooks/useForm";

const RegistrationModal = ({
	handleCloseModal,
	handleRegistration,
	isOpen,
	handleLoginClick,
	isLoading,
}) => {
	const { values, handleChange, isDisabled } = useForm({
		email: "",
		password: "",
		username: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		handleRegistration(values);
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
			buttonText={isLoading ? "Saving changes..." : "Save changes"}
		>
			<label
				htmlFor="email"
				className="modal__label"
			>
				Email{""}
			</label>
			<input
				type="email"
				value={values.email}
				onChange={handleChange}
				className="modal__input"
				placeholder="Email"
				id="email"
				name="email"
			/>
			<span
				className="modal__input-error"
				id="modal__input-error"
			></span>
			<label
				htmlFor="email"
				className="modal__label"
			>
				Password{""}
			</label>
			<input
				type="password"
				value={values.password}
				onChange={handleChange}
				className="modal__input"
				placeholder="Password"
				id="password"
				name="password"
			/>
			<span
				className="modal__input-error"
				id="modal__input-error"
			></span>

			<label
				htmlFor="username"
				className="modal__label"
			>
				Username{""}
			</label>
			<input
				type="username"
				value={values.username}
				onChange={handleChange}
				className="modal__input"
				placeholder="Username"
				id="usename"
				name="username"
			/>
			<span
				className="modal__input-error"
				id="modal__input-error"
			></span>

			<div className="modal__buttons-container">
				<button
					type="submit"
					disabled={isLoading || isDisabled}
					className={
						isDisabled ? "modal__form-submit-disabled" : "modal__form-submit"
					}
				>
					Sign up
				</button>
				<div className="modal__to-register-container">
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
	);
};

export default RegistrationModal;
