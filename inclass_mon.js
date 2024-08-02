let theme = "light"

const themeButton = document.getElementById("change-theme");

function changeText() {
    const text = document.getElementById("title");
     if (theme === "light") {
        text.innerHTML ("light theme");
        theme = "dark";
     } else {text.innerHTML ("dark theme");
        theme = "light";
     }
}

themeButton.addEventListener("click", changeText)

