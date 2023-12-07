const hideHoliday = document.getElementById("holiday");
const snowflake = document.getElementById("snowflakeContainer");
const lights = document.getElementById("wire");

hideHoliday.addEventListener("change", () => {
  if (this.checked) {
    snowflake.style.display = "none";
    lights.classList.add("display-none");
  } else {
    snowflake.style.display = "";
    lights.classList.remove("display-none");
  }
});
