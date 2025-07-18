import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../Main/Main.css";

import NewsCard from "../NewsCard/NewsCard";
// import preloaderIcon from "../../assets/preloaderIcon.svg";
import notFound from "../../assets/notFound.svg";
// import { ItemsArray } from "../../utils/ItemsArray";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Preloader from "../Preloader/Preloader";

function Main({
	handleLoginClick,
	handleSaveCard,
	isLoggedIn,
	preloader,
	newsCards,
	handleRemoveCard,
	isEmptySearch,
	isSearched,
}) {
	const currentUser = useContext(CurrentUserContext);

	const [isSaved, setIsSaved] = useState(false);

	const location = useLocation();
	const savedNewsPagePath = location.pathname === "/saved-news";

	const newsCardsTitleStyle = {
		visibility: savedNewsPagePath ? "hidden" : "visible",
	};

	const [count, setCount] = useState(3);

	const handleNewsCardsButtonClick = () => {
		handleNewsCardsButton();
	};

	const handleNewsCardsButton = () => {
		console.log("handle news cards button function");
		setCount((count) => count + 3);
		console.log(count);
	};

	return (
		<>
			{isSearched && (
				<main className="main">
					<section className="main__news-cards-container">
						{preloader ? (
							<Preloader />
						) : (
							<>
								<div className="main__cards-section">
									{newsCards.length === 0 && isEmptySearch ? (
										<div className="main__cards-search_empty">
											<img
												src={notFound}
												alt="nothing found icon"
											/>
											<h1 className="main__cards-search_empty-title">
												Nothing found
											</h1>
											<p className="main__cards-search-text">
												Sorry, but nothing matched your search terms.
											</p>
										</div>
									) : (
										<>
											<h1
												style={newsCardsTitleStyle}
												className="main__news-cards-title"
											>
												Search Results
											</h1>

											<ul className="main__news-cards-list">
												{newsCards.slice(0, count).map((newsCard) => (
													<NewsCard
														newsCards={newsCards}
														newsCard={newsCard}
														key={newsCard.url}
														handleLoginClick={handleLoginClick}
														handleSaveCard={handleSaveCard}
														isLoggedIn={isLoggedIn}
														handleRemoveCard={handleRemoveCard}
													/>
												))}
											</ul>
										</>
									)}
								</div>
							</>
						)}

						{count < newsCards.length && (
							<div className="main__news-cards-extension">
								<button
									className="main__news-cards-extensions-button"
									type="button"
									onClick={handleNewsCardsButtonClick}
								>
									Show more
								</button>
							</div>
						)}
					</section>
				</main>
			)}
		</>
	);
}

export default Main;
