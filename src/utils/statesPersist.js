const statesPersist = (() => {
	const playlist = (value) => {
		localStorage.setItem('playlist', JSON.stringify(value));
	};
	
	const getPlaylist = () => JSON.parse(localStorage.getItem('playlist'));
	
	return {
		playlist,
		getPlaylist,
	}
})();

export default statesPersist;