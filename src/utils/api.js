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
				_id: 0,
				publishedAt: "November 4, 2020",
				title: "Everyone Needs a Special 'Sit Spot' in Nature",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				source: { name: "treehugger" },
				urlToImage:
					"https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
			},
			{
				_id: 1,
				publishedAt: "February 19, 2019",
				title: "Nature makes you better",
				description:
					"Suspendisse non nisl maximus, ultrices arcu ac, vehicula quam. Integer sed diam a orci varius ultrices. Aliquam iaculis nisl a lacinia egestas. Proin pellentesque risus ut lectus pellentesque lobortis. Phasellus sagittis tempus enim vitae accumsan. Ut posuere tincidunt nunc, et interdum justo accumsan vel. Donec augue nibh, vehicula a dui et, molestie ultrices augue.",
				source: { name: "national geographic" },
				urlToImage:
					"https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			},
			{
				_id: 2,
				publishedAt: "October 19, 2020",
				title: "Nostalgic Photos of Tourists in U.S. National Parks",
				description:
					"Morbi tincidunt urna suscipit ligula elementum finibus. Mauris eu mauris tincidunt, posuere dolor vel, ullamcorper nunc. Duis facilisis quis magna sit amet varius. Maecenas tempus magna sit amet justo gravida laoreet. Vivamus eu vestibulum magna, vel convallis nunc. Duis nisi sapien, scelerisque nec fermentum eget, gravida vel diam. Pellentesque ullamcorper consectetur dui, ut malesuada neque tempus id.",
				source: { name: "national geographic" },
				urlToImage:
					"https://images.unsplash.com/photo-1546464677-c25cd52c470b?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
			},
			{
				_id: 3,
				publishedAt: "November 4, 2020",
				title: "Grand Teton Renews Historic Crest Trail",
				description:
					"In vitae blandit enim. Ut mattis odio nec vulputate tincidunt. Donec scelerisque est vel iaculis placerat. Mauris a laoreet purus. Praesent eu augue a felis finibus accumsan. Donec eget erat dolor. Sed lorem lacus, congue lacinia scelerisque ut, eleifend nec enim.",
				source: { name: "national parks traveler" },
				urlToImage:
					"https://images.unsplash.com/photo-1710609942195-b9dab8f48fc6?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
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
