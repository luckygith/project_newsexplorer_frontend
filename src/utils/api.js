import { baseUrl } from "./constants";

export const APIkey = "6e4c205fce68481b80acc66926ef81e0";

  const searchQuery = ""; 

  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);
  
 export const toDate = today.toISOString().split('T')[0]; // YYYY-MM-DD ISO TO ISOLATE AFTER T  2025-06-18T14:20:00.000Z
 export const fromDate = sevenDaysAgo.toISOString().split('T')[0]; // YYYY-MM-DD
  


  // Build the URL with parameters
  const params = new URLSearchParams({
    q: searchQuery,
    apiKey: apiKey,
    from: fromDate,
    to: toDate,
    pageSize: "100"
  });
  
  const url = `${newsApiBaseUrl}?${params.toString()}`;
   
  export const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  };

//   q — what the user entered into the search bar
//   apiKey — the key you receive after registering at News API
//   from — this should be the date 7 days before the current date
//   to — the current date
//   pageSize — the maximum allowed array. Set it to 100 articles (max in the free version).
  
// Your API key is: 6e4c205fce68481b80acc66926ef81e0