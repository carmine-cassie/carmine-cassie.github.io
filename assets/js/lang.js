// Adapted from https://dev.to/whitep4nth3r/the-best-lightdark-mode-theme-toggle-in-javascript-368f

const lang_button = document.querySelector("[data-lang-toggle]");
let lang = localStorage.getItem("lang");

if (lang === null) {
  lang = "en";
}

document.querySelector("html").setAttribute("data-lang", lang);

lang_button.addEventListener("click", () => {
  const newLang = lang === "en" ? "tp" : "en";

  localStorage.setItem("lang", newLang);
  document.querySelector("html").setAttribute("data-lang", newLang);

  lang = newLang;
}); 