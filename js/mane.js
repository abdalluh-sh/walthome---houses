let up = document.querySelector(".up-scrol");

window.onscroll = () => {
  if (window.scrollY < 100) {
    up.style.display = "none";
  } else if (window.scrollY >= 100) {
    up.style.display = "flex";
  }
};

up.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
