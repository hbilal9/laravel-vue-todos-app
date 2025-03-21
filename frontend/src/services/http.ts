import axios from "axios";

export function http() {
	const instance = axios.create({
		baseURL: import.meta.env.VITE_API_BASE_URL,
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	});

	instance.interceptors.request.use(
		(config) => {
			// Add any request interceptors here
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	instance.interceptors.response.use(
		(response) => {
			// Add any response interceptors here
			return response.data;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	return instance;
}
