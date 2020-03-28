const reducer = (state, action) => {
  switch (action.type) {
    case "MODAL":
      return {
        modal: {
          visible: !state.modal.visible,
          videos: action.videos
        }
      };
    default:
      return state;
  }
};

module.exports = reducer;
