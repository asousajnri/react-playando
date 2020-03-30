module.exports = {
  modal: {
    visible: false,
    resultSearch: []
  },
  playList: JSON.parse(localStorage.getItem("playList")) || null
};
