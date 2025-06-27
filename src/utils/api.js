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
        title: "Fake Article",
        urlToImage: "https://fake.com/image.jpg",
        publishedAt: "2025-06-27T00:00:00Z",
        description: "This is a fake article description.",
        source: { name: "Fake News Source" },
      },
      // You can add more fake articles here
    ],
  });
};

export const getUserInfo = () => {
  return Promise.resolve({email:"email@example.com", username: "username",  _id: "fake-user-id-123",});
};

export const addSavedArticles = (article) => {
  return Promise.resolve({article});
};

export const removeSavedArticles = (articleId) => {
  return Promise.resolve({articleId});
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