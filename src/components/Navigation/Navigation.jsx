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
		<nav className="navigation">
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
				<ul className="navigation__items">
					<li>
						<Link
							className="navigation__items-home"
							to="/"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className="navigation__items-profile-news"
							to="/saved-news"
						>
							Saved Articles
						</Link>
					</li>
					<ul className="navigation__items-logging-button">
						{isLoggedIn ? (
							<li>
								<Link
									className="navigation__items-logging"
									to="/"
									type="button"
									onClick={handleLogoutClick}
								>
									Sign out
								</Link>
							</li>
						) : (
							<li
								className="navigation__items-logging"
								type="button"
								onClick={handleLoginClick}
							>
								Sign in
							</li>
						)}
					</ul>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
