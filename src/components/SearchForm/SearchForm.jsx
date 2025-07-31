import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import "./SearchForm.css";

function SearchForm({ handleSearchForm, preloader }) {
	const { values, handleChange, isDisabled } = useForm({
		q: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!values.q) {
			console.log("Please type to search articles");
			return;
		}
		handleSearchForm(values.q);
	};

	return (
		<div className="search-form">
			<div className="search-form__container">
				<h1 className="search-form__title">What's going on in the world?</h1>
				<p className="search-form__description">
					Find the latest news on any topic and save them in your personal
					account
				</p>
				<form
					className="search-form__search-container"
					onSubmit={handleSubmit}
				>
					<input
						required
						name="q"
						value={values.q}
						onChange={handleChange}
						className="search-form__search-container-input"
						type="text"
						placeholder="Enter topic"
					/>
					<button
						type="submit"
						className="search-form__search-container-button"
						disabled={isDisabled}
					>
						Search
					</button>
				</form>
			</div>
		</div>
	);
}

export default SearchForm;
