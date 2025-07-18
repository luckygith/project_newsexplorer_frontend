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

function Header({ handleLoginClick, handleMenuIcon, handleLogout }) {
	const currentUser = useContext(CurrentUserContext);
	const isLoggedIn = currentUser && currentUser.username;

	const location = useLocation();
	const savedNewsPagePath = location.pathname === "/saved-news";

	const headerTextStyle = {
		color: savedNewsPagePath ? "black" : "white",
		position: savedNewsPagePath ? "relative" : "absolute",
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
			className={"header"}
			style={headerTextStyle}
		>
			<div
				className="header__container"
				style={headerContainerStyle}
			>
				<p className="header__logo">NewsExplorer</p>
				<div className="header__links">
					<Link
						className={`header__home-button header__link ${savedNewsPagePath ? "header__home-button--dark header__link--dark" : "header__home-button--light header__link--light"}`}
						to="/"
					>
						Home
					</Link>
					{isLoggedIn ? (
						<>
							<Link
								className={`header__profile-news-button header__link ${savedNewsPagePath ? "header__home-button--dark header__link--dark" : "header__home-button--light header__link--light"}`}
								to="/saved-news"
							>
								Saved Articles
							</Link>
							<Link
								className={`header__profile-button header__button header__link ${savedNewsPagePath ? "header__profile-button--dark" : "header__profile-button--light"}`}
								type="button"
								to="/"
								style={headerButtonStyle}
							>
								{currentUser.username}
								<img
									src={savedNewsPagePath ? logoutDark : logoutLight}
									alt=""
									className="header__profile-button-icon"
									onClick={handleLogoutClick}
									to="/"
								/>
							</Link>
						</>
					) : (
						<>
							<a
								className="header__sign-in-button header__button"
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
		</header>
	);
}

export default Header;
