module.exports = {
  save: value => localStorage.setItem("playList", JSON.stringify(value)),
  get: () => JSON.parse(localStorage.getItem("playList"))
};
