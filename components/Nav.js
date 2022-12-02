const settleDropdown = (width) => {
  if (width.matches) {
    document.querySelector(".nav-pills").className = "nav nav-pills dropstart";
  } else {
    document.querySelector(".nav-pills").className = "nav nav-pills";
  }
};

function adjustSupport() {
  let width = window.matchMedia("(max-width: 570px)");
  settleDropdown(width);
  width.addEventListener("change", settleDropdown);
}

export { adjustSupport };
