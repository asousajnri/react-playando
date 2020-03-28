module.exports = {
  modal: {
    visible: false,
    videos: []
  },
  myVideos: JSON.parse(localStorage.getItem("my-videos")) || null
};
