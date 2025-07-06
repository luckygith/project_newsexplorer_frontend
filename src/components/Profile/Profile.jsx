import React from "react";
import "../Profile/Profile.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ItemsArray from "../../utils/ItemsArray"; // make sure this is correctly defined
import NewsCard from "../NewsCard/NewsCard"; // assuming you're rendering cards

function Profile({
	handleSaveCard,
	handleMenuIcon,
	handleLoginClick,
	handleLogout,
	isLoggedIn,
	savedNewsCards,
	handleRemoveCard,
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
					<h3 className="profile__title">
						Elise, you have {savedNewsCards.length} saved articles
					</h3>
					<p className="profile__heading">
						By keywords: Nature, Yellowstone, and 2 others
					</p>
				</div>
				<div className="profile__saved-cards">
					<div className="profile__news-cards-container">
						<ul className="profile__news-cards-list">
							{isLoggedIn &&
								savedNewsCards.map((newsCard) => (
									<NewsCard
										key={newsCard._id}
										newsCard={newsCard}
										handleLoginClick={handleLoginClick}
										handleSaveCard={handleSaveCard}
										isLoggedIn={isLoggedIn}
										handleRemoveCard={handleRemoveCard}
									/>
								))}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}

export default Profile;
