const reducer = (state, action) => {
  switch (action.type) {
    case "MODAL":
      return {
        modal: {
          visible: !state.modal.visible,
          videos: action.videos
        },
        playList: state.playList
      };
    case "ADICIONAR_VIDEO":
      return {
        playList: action.videos,
        modal: state.modal
      };
    default:
      return state;
  }
};

module.exports = reducer;
