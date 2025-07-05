import { baseUrl } from "./constants";

export const APIkey = "6e4c205fce68481b80acc66926ef81e0";

// const today = new Date();
// const fromDate = new Date(today);
// fromDate.setDate(today.getDate() - 7);
// const to = today.toISOString().split('T')[0]; //splits after year in the string
// const from = fromDate.toISOString().split('T')[0];

export const checkResponse = (res) => {
	if (res.ok) {
		return res.json();
	} else {
		return Promise.reject(`Error: ${res.status}`);
	}
};

export const fetchArticles = (query) => {
	return Promise.resolve({
		articles: [
			{
				_id: 4,
				title: "Fake Article",
				urlToImage: "https://fake.com/image.jpg",
				publishedAt: "2025-06-25T00:00:00Z",
				description: "This is a fake article description.",
				source: { name: "national geographic" },
			},
			{
				_id: 5,
				title: "Fake Article 2 ",
				urlToImage: "https://fake.com/imagesf.jpg",
				publishedAt: "2025-06-27T00:00:00Z",
				description: "This is another fake article description.",
				source: { name: "treehugger" },
			},
			{
				_id: 6,
				title: "Fake Article 3",
				urlToImage: "https://fake.com/image.jpg",
				publishedAt: "2025-06-29T00:00:00Z",
				description: "Lorem Ipsum so and so.",
				source: { name: "national geographic" },
			},
			{
				_id: 7,
				title: "Fake Article ",
				urlToImage: "https://fake.com/image.jpg",
				publishedAt: "2025-06-30T00:00:00Z",
				description: "When the moon hits the sky like a big pizza pie.",
				source: { name: "national parks traveler" },
			},
		],
	});
};

export const fetchSavedArticles = () => {
	return Promise.resolve({
		articles: [
			{
				_id: 4,
				title: "Fake SAVED Article",
				urlToImage: "https://fake.com/image.jpg",
				publishedAt: "2025-06-25T00:00:00Z",
				description: "This is a fake article description.",
				source: { name: "national geographic" },
			},
			{
				_id: 5,
				title: "Fake SAVED Article 2 ",
				urlToImage: "https://fake.com/imagesf.jpg",
				publishedAt: "2025-06-27T00:00:00Z",
				description: "This is another fake article description.",
				source: { name: "treehugger" },
			},
			{
				_id: 6,
				title: "Fake SAVED Article 3",
				urlToImage: "https://fake.com/image.jpg",
				publishedAt: "2025-06-29T00:00:00Z",
				description: "Lorem Ipsum so and so.",
				source: { name: "national geographic" },
			},
			{
				_id: 7,
				title: "Fake SAVED Article ",
				urlToImage: "https://fake.com/image.jpg",
				publishedAt: "2025-06-30T00:00:00Z",
				description: "When the moon hits the sky like a big pizza pie.",
				source: { name: "national parks traveler" },
			},
		],
	});
};

export const getUserInfo = () => {
	return Promise.resolve({
		email: "email@example.com",
		username: "username",
		_id: "fake-user-id-123",
	});
};

export const addSavedArticle = (article) => {
	return Promise.resolve(article);
};

export const removeSavedArticles = (article) => {
	return Promise.resolve({ article });
};

// Create api file

// getUserInfo API

// getArticles API

// addSavedArticles API

// editArticles API

// removeSavedArticles API

//   q — what the user entered into the search bar
//   apiKey — the key you receive after registering at News API
//   from — this should be the date 7 days before the current date
//   to — the current date
//   pageSize — the maximum allowed array. Set it to 100 articles (max in the free version).

// Your API key is: 6e4c205fce68481b80acc66926ef81e0
