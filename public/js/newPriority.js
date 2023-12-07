const newPriorityHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#text-content").value;
  const day_id = document.querySelector("#id").getAttribute("data-id");
  console.log(day_id)

  if (content) {
    const response = await fetch(`/api/priority/${day_id}`, {
      method: "POST",
      body: JSON.stringify({ content, day_id }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response)
    if (response.ok) {
      document.location.replace("/planner/1");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector("#todo-btn").addEventListener("click", newPriorityHandler);
