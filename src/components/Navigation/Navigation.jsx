import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Header from "../Header/Header";
import useModalClose from "../../hooks/modal";
import close from "../../assets/close.svg";
import { useLocation } from "react-router-dom";

const Navigation = ({
	isLoggedIn,
	handleLoginClick,
	handleCloseModal,
	handleLogout,
}) => {
	const location = useLocation();
	const savedNewsPagePath = location.pathname === "/saved-news";
	const homeNewsPagePath = location.pathname === "/";

	const handleLogoutClick = () => {
		handleLogout();
		handleCloseModal();
	};

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
					{isLoggedIn ? (
						<Link
							className="navigation__items-login header__sign-in-button"
							to="/"
							type="button"
							onClick={handleLogoutClick}
						>
							Sign out
						</Link>
					) : (
						<p
							className="navigation__items-login header__sign-in-button"
							type="button"
							onClick={handleLoginClick}
						>
							Sign in
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navigation;
