module.exports = {
  hasClass: (elem, classVerify) => elem.classList.contains(classVerify),
  toggleClass: (elem, classToToggle) => elem.classList.toggle(classToToggle)
};
