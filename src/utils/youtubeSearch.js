import * as api from "youtube-search";
import youtubeOptions from "../config/youtubeOptions";

const youtubeSearch = term => cb => {
	api(term, youtubeOptions, (err, result) => {
		if(err) return console.log(err);
	
		cb(result);
	})
};

export default youtubeSearch;