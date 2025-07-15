export const baseUrl = "https://newsapi.org/v2/everything";

// process.env.NODE_ENV ===
// "production" ? "https://nomoreparties.co/news/v2/everything" : "https://newsapi.org/v2/everything";

export const formatDate = (dateString) => {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};
