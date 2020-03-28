const reducer = (state, action) => {
  switch (action.type) {
    case "MODAL":
      return {
        modal: {
          visible: !state.modal.visible,
          videos: action.videos
        },
        myVideos: state.myVideos
      };
    case "ADICIONAR_VIDEO":
      return {
        myVideos: action.videos,
        modal: state.modal
      };
    default:
      return state;
  }
};

module.exports = reducer;
