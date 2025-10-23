import { baseUrl, baseUrlPersonal } from "./constants.js";
import { checkResponse } from "./api.js";

export const register = (username, email, password) => {
	// 	if (username && email && password)
	// 		  return fetch(`${baseUrl}/signup`, {
	//     method: "POST",
	//     headers: {
	//       Accept: "application/json",
	//       "Content-Type": "application/json",
	//     },
	//     body: JSON.stringify({ email, password, name, avatar }),
	//   }).then(checkResponse);

	return fetch(`${baseUrlPersonal}/signup`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password, username }),
	}).then(checkResponse);
};

export const authorize = (email, password, token) => {
	return fetch(`${baseUrlPersonal}/signin`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ email, password }),
	}).then(checkResponse);
	// return new Promise((resolve, reject) => {
	// 	resolve({ token: "fake-jwt-token" });
	// });
	// } else {
	// 	return Promise.reject(new Error("Invalid token"));
	// }
};

export const checkToken = (token) => {
	// Pretend we did a fetch request that gave us back a user
	if (token === "fake-jwt-token") {
		return new Promise((resolve, reject) => {
			resolve({
				data: {
					username: "name",
					email: "email@example.com",
					_id: "fake-id",
				},
			});
		});
	} else {
		return Promise.reject(new Error("Invalid token"));
	}
};

// export const register = (email, password, username) => {
//     return fetch(`${baseUrl}/signup`, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password, username }),
//     }).then(checkResponse);
//   };

//   export const authorize = (email, password, token) => {
//     return fetch(`${baseUrl}/signin`, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ email, password }),
//     }).then(checkResponse);
//   };
