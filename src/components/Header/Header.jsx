import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import "../Header/Header.css";
import menuIconWhite from "../../assets/menuIconWhite.svg";
import menuIconBlack from "../../assets/menuIconBlack.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import logoutLight from "../../assets/logoutLight.svg";
import logoutDark from "../../assets/logoutDark.svg";
import NewsCard from "../NewsCard/NewsCard";
import SearchForm from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";

function Header({
	handleLoginClick,
	handleMenuIcon,
	handleLogout,
	handleSearchForm,
	preloader,
	isLoading,
}) {
	const currentUser = useContext(CurrentUserContext);
	const isLoggedIn = currentUser && currentUser.username;

	const location = useLocation();
	const savedNewsPagePath = location.pathname === "/saved-news";

	const headerTextStyle = {
		color: savedNewsPagePath ? "black" : "white",
		// position: savedNewsPagePath ? "relative" : "absolute",
	};

	const headerContainerStyle = {
		borderBottom: savedNewsPagePath
			? "1px solid rgba(0,0,0,0.5)"
			: "1px solid rgba(255,255,255,0.2)",
	};

	const headerButtonStyle = {
		border: savedNewsPagePath
			? "1px solid rgba(0,0,0,0.5)"
			: "1px solid rgba(255,255,255,0.2)",
	};

	const handleMenuIconClick = () => {
		handleMenuIcon();
	};

	const handleLogoutClick = () => {
		console.log("handleLogoutClick");
		handleLogout();
	};

	return (
		<header
			className={` ${savedNewsPagePath ? "header--saved-news" : "header"}`}
			style={headerTextStyle}
		>
			<div
				className="header__container"
				style={headerContainerStyle}
			>
				<p className="header__logo">NewsExplorer</p>
				<div className="header__links">
					<Link
						className={`header__link--home header__link ${savedNewsPagePath ? "header__link--dark" : " header__link--light header__link--active-home"}`}
						to="/"
					>
						Home
					</Link>
					{isLoggedIn ? (
						<>
							<Link
								className={`header__link--saved header__link ${savedNewsPagePath ? "header__link--dark" : "header__link--light "}`}
								to="/saved-news"
							>
								Saved Articles
							</Link>
							<Link
								className={`header__button-profile header__button header__link ${savedNewsPagePath ? "header__button-profile--dark" : "header__button-profile--light"}`}
								type="button"
								to="/"
								style={headerButtonStyle}
							>
								{currentUser.username}
								<img
									src={savedNewsPagePath ? logoutDark : logoutLight}
									alt=""
									className="header__button-profile-icon"
									onClick={handleLogoutClick}
									to="/"
								/>
							</Link>
						</>
					) : (
						<>
							<a
								className="header__button-signin header__button"
								type="button"
								style={headerButtonStyle}
								onClick={handleLoginClick}
							>
								Sign in
							</a>
						</>
					)}
				</div>

				<button className="header__menu-icon">
					<img
						src={savedNewsPagePath ? menuIconBlack : menuIconWhite}
						alt="header drop down menu"
						onClick={handleMenuIconClick}
					/>
				</button>
			</div>
			{!savedNewsPagePath && (
				<SearchForm
					handleSearchForm={handleSearchForm}
					preloader={preloader}
					isLoading={isLoading}
				/>
			)}
		</header>
	);
}

export default Header;
