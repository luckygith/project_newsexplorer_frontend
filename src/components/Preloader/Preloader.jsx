import React from "react";
import "../Preloader/Preloader.css";
// import notFound from "../../assets/notFound.svg";
import preloaderIcon from "../../assets/preloaderIcon.svg";

function Preloader() {
	return (
		<div className="preloader__news-cards_search">
			<img
				className="news-cards__preloader-icon"
				src={preloaderIcon}
				alt="loading icon"
			/>
			<p className="main__cards-search-text">Searching for news...</p>
		</div>
	);
}

export default Preloader;
