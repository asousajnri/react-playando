module.exports = {
  playList: JSON.parse(localStorage.getItem("playList")),
  save: value => localStorage.setItem("playList", JSON.stringify(value))
};
