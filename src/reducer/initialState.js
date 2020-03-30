module.exports = {
  modal: {
    visible: false,
    videos: []
  },
  playList: JSON.parse(localStorage.getItem("playList")) || null
};
