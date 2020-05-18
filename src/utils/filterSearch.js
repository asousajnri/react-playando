import stringToArray from './stringToArray';

const filterSearch = (valueToSearch, playlist) => {
	let stringSearch = stringToArray(valueToSearch);
	
	return playlist.filter(video => {
    let containsAtLeastOneWord = false;

    stringSearch.map(word => {
      if (video.title.toLowerCase().includes(word)) {
        containsAtLeastOneWord = true;
      }
    });

    if (containsAtLeastOneWord) return video;
  }).map(video => video);
};

export default filterSearch;
  
