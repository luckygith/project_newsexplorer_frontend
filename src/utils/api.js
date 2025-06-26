import { baseUrl } from "./constants";

export const APIkey = "6e4c205fce68481b80acc66926ef81e0";

const today = new Date();
const fromDate = new Date(today);
fromDate.setDate(today.getDate() - 7);

const to = today.toISOString().split('T')[0]; //splits after year in the string
const from = fromDate.toISOString().split('T')[0];

  export const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  };

export const fetchArticles = (query) => {

  const url = `${baseUrl}?q=${query}&from=${from}&to=${to}&pageSize=100&apiKey=${APIkey}`;

  return fetch(url).then(checkResponse);
};


//   const params = ({
//     q: searchQuery,
//     apiKey: apiKey,
//     from: fromDate,
//     to: toDate,
//     pageSize: "100"
//   });
  
//   const url = `${newsApiBaseUrl}?${params.toString()}`;
   

  
  // export function getArticles() {
  //   return fetch(`${baseUrl}/articles`).then(checkResponse);
  // }

Create api file

getUserInfo API

getArticles API

addSavedArticles API

editArticles API

removeSavedArticles API





//   q — what the user entered into the search bar
//   apiKey — the key you receive after registering at News API
//   from — this should be the date 7 days before the current date
//   to — the current date
//   pageSize — the maximum allowed array. Set it to 100 articles (max in the free version).
  
// Your API key is: 6e4c205fce68481b80acc66926ef81e0