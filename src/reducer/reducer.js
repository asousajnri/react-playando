const reducer = (state, action) => {
  switch (action.type) {
    case "MODAL":
      return {
        modal: {
          visible: !state.modal.visible,
          resultSearch: action.update
        },
        playList: state.playList
      };
    case "PLAY_LIST":
      return {
        playList: action.update,
        modal: state.modal
      };
    default:
      return state;
  }
};

module.exports = reducer;
