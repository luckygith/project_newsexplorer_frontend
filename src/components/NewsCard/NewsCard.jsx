import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "../NewsCard/NewsCard.css";
import saveButton from "../../assets/saveButton.svg";
import unsaveButton from "../../assets/unsaveButton.svg";
import trash from "../../assets/trash.svg";
import { useLocation } from "react-router-dom";
import { formatDate } from "../../utils/constants";

function NewsCard({
	newsCard,
	handleLoginClick,
	handleSaveCard,
	handleRemoveCard,
}) {
	console.log(newsCard.url);
	const currentUser = useContext(CurrentUserContext);
	const isLoggedIn = currentUser && currentUser.username;
	const [isSaved, setIsSaved] = useState(false);

	function handleSaveClick() {
		if (!isLoggedIn) {
			return;
		}

		setIsSaved(!isSaved);
		handleSaveCard(newsCard);
	}

	function handleRemoveCardClick() {
		if (!isLoggedIn) {
			return;
		}
		console.log("handleremove clickedddd");
		handleRemoveCard(newsCard);
	}

	const formattedPublishedAt = formatDate(newsCard.publishedAt);

	const location = useLocation();
	const savedNewsPagePath = location.pathname === "/saved-news";

	return (
		<li className="news-card">
			<div className="news-card__container">
				<div className="news-card__header">
					{savedNewsPagePath ? (
						<>
							<button
								type="button"
								onClick={handleRemoveCardClick}
								className="news-card__remove-from-saved"
							>
								Remove from saved
							</button>
							<img
								className="news-card__trash-button"
								src={trash}
								alt="remove saved article button"
							/>
						</>
					) : (
						<>
							{!isLoggedIn && (
								<button
									className="news-card__sign-to-save-button"
									onClick={handleLoginClick}
								>
									Sign in to save articles
								</button>
							)}

							<img
								className="news-card__save-button"
								src={isSaved ? saveButton : unsaveButton}
								onClick={isLoggedIn ? handleSaveClick : null}
								alt="save article button"
							/>
						</>
					)}
				</div>
				<img
					src={newsCard.urlToImage}
					alt="article image"
					className="news-card__image"
				/>
				<div className="news-card__text-container">
					<div className="news-card__content">
						<h3 className="news-card__date">{formattedPublishedAt}</h3>
						<h2 className="news-card__title">{newsCard.title}</h2>
						<p className="news-card__description">{newsCard.description}</p>
					</div>
					<h3 className="news-card__category">{newsCard.source.name}</h3>
				</div>
			</div>
		</li>
	);
}

export default NewsCard;
