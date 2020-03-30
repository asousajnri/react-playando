module.exports = (stringSearch, currentMyList) =>
  currentMyList
    .filter(video => {
      let containsAtLeastOneWord = false;

      stringSearch.map(word => {
        if (video.title.toLowerCase().includes(word)) {
          containsAtLeastOneWord = true;
        }
      });

      if (containsAtLeastOneWord) return video;
    })
    .map(video => video);
