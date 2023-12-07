const newTodoHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#text-content").value;
  const day_id = document.querySelector("#id").getAttribute("data-id");

  if (content) {
    const response = await fetch(`/api/todo/${day_id}`, {
      method: "POST",
      body: JSON.stringify({ content, day_id }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/planner/1");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector("#todo-btn").addEventListener("click", newTodoHandler);
