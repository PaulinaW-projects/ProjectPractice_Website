function toggleNav() {
  const nav = document.getElementById("myNav");
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
    return;
  }
  nav.classList.add("open");
}

//analogicznie, drugi btn

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("hamburgerBtn");
  btn.addEventListener("click", toggleNav);
});
