const reducer = (state, action) => {
  switch (action.type) {
    case "MODAL":
      return { modal: !state.modal };
    case "MODAL_VIDEOS":
      return {
        modalVideos: action.modalVideos
      };
  }
};

module.exports = reducer;
