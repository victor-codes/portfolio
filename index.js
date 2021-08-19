const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
let theme = "light"

sun.style = "display: none;";
moon.addEventListener("click", function () {
    document.documentElement.setAttribute("data-theme", "dark");
    sun.style = "display: block;";
});

sun.addEventListener("click", function () {
  document.documentElement.setAttribute("data-theme", "light");
});
