let theme = "light";

const themeButton = document.getElementById("theme-box");

function main() {
  if (theme === "light") {
    theme = "dark";
    const webTheme = document.getElementById("theme");
    webTheme.setAttribute("href", "inhome_tue_dark.css");
  } else {
    theme = "light";
    const webTheme = document.getElementById("theme");
    webTheme.setAttribute("href", "inhome_tue.css");
  }
}

themeButton.addEventListener("click", main);
