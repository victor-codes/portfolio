const cursor = document.querySelector(".cursor");
const a = document.querySelectorAll("a");
const btn = document.querySelector("button");

window.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.querySelector("#theme");
  const btn = document.querySelector(".logo");
  const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark ") {
      toggleSwitch.checked = true;
      btn.setAttribute("aria-selected")
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

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY - 10 + "px";
  cursor.style.left = e.clientX - 10 + "px";
});

a.forEach((a) => {
  a.addEventListener("mouseover", () => {
    cursor.style.transform = `scale(1.5)`;
    cursor.style.opacity = 0.5;
  });
  a.addEventListener("mouseout", () => {
    cursor.style.transform = `scale(1)`;
    cursor.style.opacity = 1;
  });
});

btn.addEventListener("mouseover", () => {
  cursor.style.transform = `scale(1.5)`;
  cursor.style.opacity = 0.5;
});
btn.addEventListener("mouseout", () => {
  cursor.style.transform = `scale(1)`;
  cursor.style.opacity = 1;
});
