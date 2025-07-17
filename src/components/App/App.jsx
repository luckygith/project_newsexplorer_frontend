import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import ModalwithForm from "../ModalWithForm/ModalWithForm";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegistrationConfirmedModal from "../RegistrationConfirmedModal/RegistrationConfirmedModal";
import NewsCard from "../NewsCard/NewsCard";
import Navigation from "../Navigation/Navigation";
import {
	addSavedArticle,
	fetchArticles,
	fetchSavedArticles,
	getUserInfo,
} from "../../utils/api";
import { authorize, register } from "../../utils/auth";
import { setToken, getToken, removeToken } from "../../utils/token";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
	const [newsCard, setNewsCard] = useState({
		_id: "",
		title: "",
		urlToImage: "",
		publishedAt: "",
		description: "",
		source: "",
	});

	const [activeModal, setActiveModal] = useState("");
	const [currentUser, setCurrentUser] = useState({});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [savedNewsCards, setSavedNewsCards] = useState([]);
	const [newsCards, setNewsCards] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [preloader, setPreloader] = useState(false);
	const [isSearched, setIsSearched] = useState(false);

	const [isLoading, setIsLoading] = useState(false);

	const [isEmptySearch, setIsEmptySearch] = useState(false);
	// HANDLERS

	const handleSearchForm = (q) => {
		if (!q) {
			console.log("Please type to search articles");
			setNewsCards([]);
			return;
		}
		setSearchQuery(q);
		setIsSearched(true);
		setPreloader(true);
		fetchArticles(q)
			.then((res) => {
				if (res.articles.length === 0) {
					setIsEmptySearch(true);
					setNewsCards([]);
					// return;
					throw new Error("Nothing Found");
				}
				setNewsCards(res.articles);
				console.log(res.articles);
				setIsSearched(true);
				console.log(isSearched);
			})
			.catch((error) => {
				console.error(
					"Sorry, something went wrong during the request. Please try again later."
				);
				setIsEmptySearch(true);
				setNewsCards([]);
				setIsSearched(true);
				console.error(error);
			})
			.finally(() => {
				setPreloader(false);
			});
	};

	const handleLogin = ({ email, password }) => {
		console.log("setup LOGIN");
		setPreloader(true);
		if (!email || !password) {
			console.log("Login incomplete");
			return;
		}
		const token = getToken();
		authorize(email, password, token)
			.then((data) => {
				if (data.token) {
					setToken(data.token);
					console.log(data);
					return getUserInfo(data.token);
				}
				throw new Error("token not received");
			})
			.then(({ username, email, _id }) => {
				setCurrentUser({ username, email, _id });
				setIsLoggedIn(true);
				console.log(currentUser.username);
				console.log("User data fetched:", { username, email, _id });
				handleCloseModal();
			})
			.catch((error) => {
				console.error("Error, login request unsuccessful", error);
			})
			.finally(() => setPreloader(false));
	};

	const handleRegistration = ({ username, email, password }) => {
		setPreloader(true);
		if (!email || !password || !username) {
			return;
		}
		register(username, email, password)
			.then((data) => {
				if (data) {
					console.log(data);
					console.log(email);
					setIsLoggedIn(true);
				}
			})
			.then(() => {
				handleRegistrationConfirmedClick();
				console.log("registration api on the way!");
			})
			.catch((error) => {
				console.error("Error, registration request unsuccessful", error);
			})
			.finally(() => setPreloader(false));
	};

	// NEWS CARD FUNCTIONS

	const handleRemoveCard = (newsCard) => {
		// Filter out the article with the same title
		const newsCardToRemove = savedNewsCards.filter(
			(card) => card.title !== newsCard.title
		);
		setSavedNewsCards(newsCardToRemove);
		localStorage.setItem("storedNewsCards", JSON.stringify(newsCardToRemove));
		console.log("REMOVED ARTICLE:", newsCard.title);
	};

	const handleSaveCard = (newsCard) => {
		const jwt = getToken();

		const isDuplicateCard = savedNewsCards.some(
			(cardToSave) => cardToSave.title === newsCard.title
		);
		if (isDuplicateCard) {
			console.log("This article is already saved.");
			return;
		}

		addSavedArticle(newsCard)
			.then(({ article }) => {
				console.log(article);
				setNewsCard({
					title: newsCard.title,
					urlToImage: newsCard.urlToImage,
					publishedAt: newsCard.publishedAt,
					description: newsCard.description,
					source: newsCard.source.name,
					jwt,
				});
				setSavedNewsCards((prevSaved) => {
					// PREVSAVED MOST UPDATED ARRAY
					const updated = [newsCard, ...prevSaved]; // CREATES NEW ARRAY WITH ADDING NEW NEWSCARD CARD FIRST
					localStorage.setItem("storedNewsCards", JSON.stringify(updated)); // STORE ARRAY AS STRING
					return updated; // RETURNING UPDATED ARRAY TO UPDATE STATE
				});
				console.log("Saved article:", newsCard);
			})
			.catch((err) => {
				console.error("Failed to save article:", err);
			})
			.finally(() => {
				console.log("handlesavedcard finally block");
			});
	};

	// USE EFFECTS

	// is user logged in
	useEffect(() => {
		const jwt = getToken();

		if (jwt) {
			getUserInfo(jwt)
				.then(({ username, email, _id }) => {
					setIsLoggedIn(true);
					setCurrentUser({ username, email, _id });
				})
				.catch(console.error);
		}
	}, []);

	// saved news cards
	useEffect(() => {
		console.log("Updated savedNewsCards:", savedNewsCards);
	}, [savedNewsCards]);

	// news cards as per login
	useEffect(() => {
		const jwt = getToken();
		if (!jwt) return;

		fetchArticles()
			.then((res) => {
				console.log(res);
				console.log(isSearched);
			})
			.catch((err) => {
				console.error("Error fetching saved articles:", err);
			});
	}, []);

	// saved newscards as per login
	useEffect(() => {
		const jwt = getToken();
		if (!jwt) return;

		fetchSavedArticles()
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.error("Error fetching saved articles:", err);
			});
	}, [isLoggedIn]);

	// get currently stored news cards
	useEffect(() => {
		const storedNewsCards = localStorage.getItem("storedNewsCards");
		if (storedNewsCards) {
			setSavedNewsCards(JSON.parse(storedNewsCards));
		}
	}, []);

	// HANDLERS

	const handleRegistrationConfirmedClick = () => {
		setActiveModal("registration-confirmed");
	};

	const handleMenuIcon = () => {
		setActiveModal("navigation-menu");
	};

	const handleRegisterClick = () => {
		handleCloseModal();
		setActiveModal("registration");
	};

	const handleCloseModal = () => {
		setActiveModal("");
	};

	const handleLoginClick = () => {
		handleCloseModal();
		setActiveModal("login");
	};

	const handleLogoutClick = () => {
		handleLogout();
		handleCloseModal();
	};

	const handleLogout = (token) => {
		setIsLoggedIn(false);
		setCurrentUser({});
		removeToken(token);
		console.log("handleLOGOUT!");
	};

	const handleNewsCardsButton = () => {
		console.log("handle news cards button function");
	};

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="page">
				<div className="page__content">
					<Header
						handleLoginClick={handleLoginClick}
						handleMenuIcon={handleMenuIcon}
						handleLogout={handleLogout}
						handleLogin={handleLogin}
					/>

					<Routes>
						<Route
							path="/"
							element={
								<>
									<SearchForm
										handleSearchForm={handleSearchForm}
										preloader={preloader}
										isLoading={isLoading}
									/>
									<Main
										handleLoginClick={handleLoginClick}
										handleSaveCard={handleSaveCard}
										newsCards={newsCards}
										preloader={preloader}
										isLoggedIn={isLoggedIn}
										handleNewsCardsButton={handleNewsCardsButton}
										handleRemoveCard={handleRemoveCard}
										newsCard={newsCard}
										savedNewsCards={savedNewsCards}
										isSearched={isSearched}
										isEmptySearch={isEmptySearch}
									/>
									<About />
								</>
							}
						/>
						<Route
							path="/saved-news"
							element={
								<Profile
									newsCards={newsCards}
									savedNewsCards={savedNewsCards}
									handleSaveCard={handleSaveCard}
									handleMenuIcon={handleMenuIcon}
									handleLoginClick={handleLoginClick}
									isLoggedIn={isLoggedIn}
									handleLogout={handleLogout}
									handleRemoveCard={handleRemoveCard}
								/>
							}
						/>
					</Routes>
					<Footer />
				</div>

				{activeModal === "login" && (
					<LoginModal
						isOpen={activeModal === "login"}
						handleCloseModal={handleCloseModal}
						handleLogin={handleLogin}
						handleRegistration={handleRegistration}
						handleRegisterClick={handleRegisterClick}
						isLoading={isLoading}
					/>
				)}

				{activeModal === "registration" && (
					<RegisterModal
						isOpen={activeModal === "registration"}
						handleCloseModal={handleCloseModal}
						handleRegistration={handleRegistration}
						handleLoginClick={handleLoginClick}
						isLoading={isLoading}
					/>
				)}

				{activeModal === "registration-confirmed" && (
					<RegistrationConfirmedModal
						isOpen={activeModal === "registration-confirmed"}
						handleLoginClick={handleLoginClick}
						handleCloseModal={handleCloseModal}
						isLoading={isLoading}
					/>
				)}

				{activeModal === "navigation-menu" && (
					<Navigation
						handleLogoutClick={handleLogoutClick}
						isLoggedIn={isLoggedIn}
						isOpen={activeModal === "navigation-menu"}
						handleLoginClick={handleLoginClick}
						handleCloseModal={handleCloseModal}
						isLoading={isLoading}
					/>
				)}
			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
