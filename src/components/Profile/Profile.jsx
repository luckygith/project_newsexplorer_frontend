import React from "react";
import "../Profile/Profile.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Profile({
	handleSaveCard,
	handleMenuIcon,
	handleLoginClick,
	handleLogout,
	isLoggedIn,
}) {
	return (
		<>
			<Header
				handleMenuIcon={handleMenuIcon}
				handleLoginClick={handleLoginClick}
				handleLogout={handleLogout}
				isLoggedIn={isLoggedIn}
			/>
			<section className="profile__content">
				<div className="profile__text-container">
					<p className="profile__subtitle">Saved articles</p>
					<h3 className="profile__title">Elise, you have 5 saved articles</h3>
					<p className="profile__heading">
						By keywords: Nature, Yellowstone, and 2 other
					</p>
				</div>
			</section>
			<Main handleSaveCard={handleSaveCard} />
		</>
	);
}

export default Profile;
