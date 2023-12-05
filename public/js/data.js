const weekSelect = async () => {
  const selectedWeek = document.querySelector(".week-option")
  const weekID = selectedWeek.getAttribute("data-id");
  console.log(weekID)


  const response = await fetch(`/api/day/${weekID}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  console.log(response)
};

document.querySelector("#week-picker").addEventListener("change", weekSelect);
