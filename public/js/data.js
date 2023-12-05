const weekSelect = async () => {
  const weekPicker = document.querySelector("#week-picker");
  const selectedWeek = weekPicker.options[weekPicker.selectedIndex];
  const weekID = selectedWeek.getAttribute("data=id");

  const response = await fetch(`/api/${weekID}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
};

document.querySelector("#week-picker").addEventListener("change", weekSelect);
