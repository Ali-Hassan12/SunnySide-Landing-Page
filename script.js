document.querySelector(".nav__toggle").addEventListener("click", () => {
  if (document.querySelector(".nav__links").style.display == "flex") {
    document.querySelector(".nav__links").style.display = "none";
  } else {
    document.querySelector(".nav__links").style.display = "flex";
  }
});
