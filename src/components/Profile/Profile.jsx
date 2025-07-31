import React from "react";
import "../Profile/Profile.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ItemsArray from "../../utils/ItemsArray"; // make sure this is correctly defined
import NewsCard from "../NewsCard/NewsCard"; // assuming you're rendering cards
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({
	handleSaveCard,
	handleMenuIcon,
	handleLoginClick,
	handleLogout,
	isLoggedIn,
	savedNewsCards,
	handleRemoveCard,
}) {
	const currentUser = useContext(CurrentUserContext);
	return (
		<div className="profile__container">
			<>
				<section className="profile__content">
					<div className="profile__text-container">
						<h2 className="profile__subtitle">Saved articles</h2>
						<h1 className="profile__title">
							{currentUser.username}, you have {savedNewsCards.length} saved
							articles
						</h1>
						<h3 className="profile__heading">
							By keywords:{" "}
							<span className="profile__heading-keywords">
								Nature, Yellowstone, and 2 others
							</span>
						</h3>
					</div>
					<div className="profile__saved-cards">
						<div className="profile__news-cards-container">
							<ul className="profile__news-cards-list">
								{isLoggedIn &&
									savedNewsCards.map((newsCard) => (
										<NewsCard
											key={newsCard.url}
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
		</div>
	);
}

export default Profile;
