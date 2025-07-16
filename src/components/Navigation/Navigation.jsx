import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Header from "../Header/Header";
import useModalClose from "../../hooks/modal";
import close from "../../assets/close.svg";
import { useLocation } from "react-router-dom";

const Navigation = ({ handleLoginClick, handleCloseModal }) => {
	const location = useLocation();
	const savedNewsPagePath = location.pathname === "/saved-news";

	return (
		<div className="navigation">
			<div className="navigation__modal-container">
				<div className="navigation__header">
					<div className="navigation__header-logo">
						<div className="navigation__header-logo-item header__logo">
							NewsExplorer
						</div>
					</div>
					<button className="navigation__close">
						<img
							src={close}
							alt="Close menu"
							onClick={handleCloseModal}
						/>
					</button>
				</div>
				<div className="navigation__items">
					<Link
						className="navigation__items-home"
						to="/"
					>
						Home
					</Link>
					<Link
						className="navigation__items-profile-news"
						to="/saved-news"
					>
						Saved Articles
					</Link>

					<p
						className="navigation__items-login header__sign-in-button"
						type="button"
						onClick={handleLoginClick}
					>
						Sign in
					</p>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
