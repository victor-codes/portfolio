window.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.querySelector("#theme");
  const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark ") {
      toggleSwitch.checked = true;
    } else {
      toggleSwitch.checked = false;
    }
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }

  toggleSwitch.addEventListener(
    "change",
    function (e) {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    },
    false
  );
});
