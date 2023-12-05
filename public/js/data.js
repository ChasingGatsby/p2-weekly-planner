const weekSelect = async () => {
  const selectedWeek = document.querySelector("#week-picker");
  const weekID =
    selectedWeek.options[selectedWeek.selectedIndex].getAttribute("data-id");

  console.log(weekID);

  const response = await fetch(`/planner/${weekID}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log(response);
  }
};

document.querySelector("#week-picker").addEventListener("change", weekSelect);
