module.exports = {
  save: value => localStorage.setItem("playList", JSON.stringify(value)),
  playList: JSON.parse(localStorage.getItem("playList"))
};
