import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../Main/Main.css";

import NewsCard from "../NewsCard/NewsCard";
import preloaderIcon from "../../assets/preloaderIcon.svg";
import notFound from "../../assets/notFound.svg";
// import { ItemsArray } from "../../utils/ItemsArray";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main({
	handleLoginClick,
	handleSaveCard,
	isLoggedIn,
	preloader,
	newsCards,
	handleRemoveCard,

	isSearched,
}) {
	const currentUser = useContext(CurrentUserContext);

	// const IsOwnNewsCards = newsCards.filter(
	// 	(newsCard) => newsCard.isSaved === currentUser.newsCard._id
	// );
	const [isSaved, setIsSaved] = useState(false);

	const location = useLocation();
	const savedNewsPagePath = location.pathname === "/saved-news";

	// const isOwnNewsCards = savedNewsPagePath
	// 	? ItemsArray.filter((card) => card.owner === currentUser?._id)
	// 	: newsCards;

	// const isOwnNewsCards = ItemsArray.filter((newsCard) => {
	// 	newsCard.owner === currentUser._id;
	// });

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
					<section className="news-cards__container">
						{preloader ? (
							<>
								<div className="main__news-cards_search">
									<img
										className="news-cards__preloader-icon"
										src={preloaderIcon}
										alt="loading icon"
									/>
									<p className="news-cards__preloader-text">
										Searching for news...
									</p>
								</div>
							</>
						) : (
							<>
								<div className="news-cards__section">
									<h3
										style={newsCardsTitleStyle}
										className="news-cards__title"
									>
										Search Results
									</h3>

									<ul className="news-cards__list">
										{newsCards.length === 0 ? (
											isLoggedIn ? (
												<>
													<div className="news-cards__search-empty">
														<img
															src={notFound}
															alt="nothing found icon"
														/>
														<p className="news-cards__preloader-title">
															Nothing found
														</p>
														<p className="news-cards__preloader-text">
															Sorry, but nothing matched your search terms.
														</p>
													</div>
												</>
											) : null
										) : (
											<>
												{newsCards.slice(0, count).map((newsCard, _id) => (
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
											</>
										)}
									</ul>
								</div>
							</>
						)}

						{count < newsCards.length && (
							<div className="news-cards__extension">
								<button
									className="news-cards__extensions-button"
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

// <main className="main">
//   <section className="news-cards__container">

//     <div className="news-cards__preloader-section">
//       {!isLoggedIn ? (
//         <div className="stuff">Sign in to see saved articles</div>
//       ) : preloader ? (
//         <>
//           <img className="news-cards__preloader-icon" src={preloaderIcon} alt="loading icon" />
//           <p className="news-cards__preloader-text">Searching for news...</p>
//         </>
//       ) : ItemsArray.length === 0 ? (
//         <>
//           <img src={notFound} alt="nothing found icon" />
//           <p className="news-cards__preloader-title">Nothing found</p>
//           <p className="news-cards__preloader-text">
//             Sorry, but nothing matched your search terms.
//           </p>
//         </>
//       ) : null}
//     </div>

//     {isLoggedIn && ItemsArray.length > 0 && (<>
//               <h3 style={newsCardsTitleStyle} className="news-cards__title">Search Results</h3>

//       <ul className="news-cards__list">
//         {ItemsArray.slice(0, 3).map((newsCard, index) => (
//           <NewsCard
//             newsCard={newsCard}
//             key={newsCard._id || index}
//             handleLoginClick={handleLoginClick}
//             handleSaveCard={handleSaveCard}
//             isLoggedIn={isLoggedIn}
//           />
//         ))}
//       </ul>
//       </> )}

//   </section>
// </main>
