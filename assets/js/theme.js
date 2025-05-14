// Adapted from https://dev.to/whitep4nth3r/the-best-lightdark-mode-theme-toggle-in-javascript-368f

const theme_button = document.querySelector("[data-theme-toggle]");
let theme = localStorage.getItem("theme");

if (theme === null) {
  theme = "light";
}

document.querySelector("html").setAttribute("data-theme", theme);

theme_button.addEventListener("click", () => {
  const newTheme = theme === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  document.querySelector("html").setAttribute("data-theme", newTheme);

  theme = newTheme;
}); 