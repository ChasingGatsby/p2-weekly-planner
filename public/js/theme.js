const themePicker = document.getElementById("theme-picker");
const buttonElements = document.querySelectorAll(".custom-btn");
const sidebar = document.getElementById("sidebar");
const topbar = document.getElementById("topbar");

const applyTheme = (theme) => {
  if (theme == "christmas") {
    if (sidebar) {
      sidebar.style.backgroundColor = "#5eaa6785";
      sidebar.style.color = "black";
    }

    topbar.style.backgroundColor = "#d7d7d100";
    buttonElements.forEach((element) => {
      element.style.backgroundColor = "#bc4749";
      element.style.color = "white";
    });
  } else if (theme == "autumn") {
    if (sidebar) {
      sidebar.style.backgroundColor = "#fefae0";
      sidebar.style.color = "black";
    }
    topbar.style.backgroundColor = "#bc6c25";
    buttonElements.forEach((element) => {
      element.style.backgroundColor = "#283618";
      element.style.color = "white";
    });
  } else if (theme == "happy") {
    if (sidebar) {
      sidebar.style.backgroundColor = "#e9c46a";
      sidebar.style.color = "black";
    }
    topbar.style.backgroundColor = "#3a86ff";
    buttonElements.forEach((element) => {
      element.style.backgroundColor = "#ff006e";
      element.style.color = "black";
    });
  } else if (theme == "cyberpunk") {
    if (sidebar) {
      sidebar.style.backgroundColor = "#3a0ca3";
      sidebar.style.color = "white";
    }
    topbar.style.backgroundColor = "#152b65";
    buttonElements.forEach((element) => {
      element.style.backgroundColor = "#f72585";
      element.style.color = "white";
    });
  }
};

const storedTheme = localStorage.getItem(`theme`);
if (storedTheme) {
  applyTheme(storedTheme);
}

if (themePicker) {
  themePicker.addEventListener("change", () => {
    const selectedTheme = themePicker.value;
    applyTheme(selectedTheme);
    localStorage.setItem(`theme`, selectedTheme);
  });
}
