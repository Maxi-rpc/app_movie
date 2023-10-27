import axios from "axios";

export const get_movie = async () => {
	const API_KEY = "cdeb86f4ce19cefbee0ef70f25040e5b";
	const API_SESSION = `api_key=${API_KEY}`;
	const API_URL_BASE = `https://api.themoviedb.org/3`;
	const API_URL_SEARCH = `search/movie?query=Jack+Reacher`;
	const url = `${API_URL_BASE}/${API_URL_SEARCH}&${API_SESSION}`;
	let data = {};
	try {
		const response = await axios.get(url);
		console.log(response.data);
		data["status"] = response.status;
		data["data"] = response.data;
	} catch (error) {
		console.error(error);
	}
};
