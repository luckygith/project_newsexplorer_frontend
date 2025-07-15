import { baseUrl } from "./constants";

// const baseUrl = "https://nomoreparties.co/news/v2/everything";

export const APIkey = "6e4c205fce68481b80acc66926ef81e0";

export const checkResponse = (res) => {
	if (res.ok) {
		return res.json();
	} else {
		return Promise.reject(`Error: ${res.status}`);
	}
};

export function fetchArticles(q) {
	console.log(card._id);
	return fetch(`${baseUrl}?q=${q}&apiKey=${APIkey}`)
		.then(checkResponse)
		.then((res) => {
			return res;
		});
}
