const themePicker = document.getElementById("theme-picker");
const buttonElements = document.querySelectorAll(".custom-btn");
const sidebar = document.getElementById("sidebar");
const topbar = document.getElementById("topbar");

const applyTheme = (theme) => {
  if (theme == "christmas") {
    sidebar.style.backgroundColor = "#5eaa6785";
    sidebar.style.color = "black";
    topbar.style.backgroundColor = "#d7d7d100";
    buttonElements.forEach((element) => {
      element.style.backgroundColor = "#bc4749";
      element.style.color = "white";
    });
  } else if (theme == "autumn") {
    sidebar.style.backgroundColor = "#fefae0";
    topbar.style.backgroundColor = "#bc6c25";
    buttonElements.forEach((element) => {
      element.style.backgroundColor = "#283618";
      element.style.color = "white";
    });
  } else if (theme == "happy") {
    sidebar.style.backgroundColor = "#fefae0";
    topbar.style.backgroundColor = "#bc6c25";
    buttonElements.forEach((element) => {
      element.style.backgroundColor = "#283618";
      element.style.color = "white";
    });
  }
};

const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  applyTheme(storedTheme);
}

if (themePicker) {
  themePicker.addEventListener("change", () => {
    const selectedTheme = themePicker.value;
    applyTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  });
}
