const apiServer = "https://8080-c51edddf-8ac0-4c19-85b0-ef4072c02d0c.ws-us02.gitpod.io";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			venue: [],
			profile: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			generateToken: (username, password) => {
				let store = getStore();
				// lets assume that you have a variable in your store for user to store user data when logged in
				// and another variable for the login status

				fetch(apiServer + "/jwt-auth/v1/token", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						username: username,
						password: password
					})
				})
					.then(response => {
						if (response.status !== 200) {
							return "Connection error: " + response.status;
						}

						response.json().then(data => {
							store.user = data;
							store.loggedIn = true;
							store.profiles = data;
							setStore({ store });
						});
					})
					.catch(err => {
						return err;
					});
			},
			getVenue: () => {
				fetch(apiServer + "/wp-json/sample_api/v1/venue", {
					method: "GET"
				})
					.then(response => {
						if (response.status !== 200) {
							return "Connection error: " + response.status;
						}

						response.json().then(data => {
							let store = getStore();
							store.venue = data;
							setStore({ store });
						});
					})
					.catch(err => {
						return err;
					});
			},
			getProfile: () => {
				fetch(apiServer + "/wp-json/sample_api/v1/profile", {
					method: "GET"
				})
					.then(response => {
						if (response.status !== 200) {
							return "Connection error: " + response.status;
						}

						response.json().then(data => {
							let store = getStore();
							store.profile = data;
							setStore({ store });
						});
					})
					.catch(err => {
						return err;
					});
			},
			checkToken: () => {
				let store = getStore();
				let tokenCheck = JSON.parse(localStorage.getItem("yourApp-userData"));

				if (tokenCheck !== null) {
					// set current user data to store
					store.user = tokenCheck;
					setStore({ store });

					// fetch to validate current token
					fetch(apiServer + "/jwt-auth/v1/token/validate", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + token
						}
					})
						.then(response => {
							response.json().then(data => {
								// token is valid
								setStore({
									...store,
									loggedIn: true
								});
							});
						})
						.catch(err => {
							return err;
						});
				} else {
					setStore({
						...store,
						loggedIn: false,
						user: null
					});
				}
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				fetch(
					"https://8080-c51edddf-8ac0-4c19-85b0-ef4072c02d0c.ws-us02.gitpod.io/wp-json/sample_api/v1/venue",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(object)
					}
				)
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Examine the text in the response
						response.json().then(data => {
							console.log(data);
						});
					})
					.catch(function(err) {
						console.log("Fetch Error :-S", err);
					});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
