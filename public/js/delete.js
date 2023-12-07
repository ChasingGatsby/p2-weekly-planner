const deletePrio = document.querySelectorAll(".delete-prio");
const deleteTodo = document.querySelectorAll(".delete-todo");
const deleteMotive = document.querySelectorAll(".delete-motive");
const deleteFuture = document.querySelectorAll(".delete-future");

deletePrio.forEach((button) => {
  button.addEventListener("click", async (event) => {
    const id = event.target.parentNode.getAttribute("data-id");
    console.log(event.target.parentNode)
    const response = await fetch(`/api/priority/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/planner/1");
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  });
});

deleteTodo.forEach((button) => {
  button.addEventListener("click", async (event) => {
    const id = event.target.parentNode.getAttribute("data-id");
    const response = await fetch(`/api/todo/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/planner/1");
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  });
});

deleteMotive.forEach((button) => {
  button.addEventListener("click", async (event) => {
    const id = event.target.parentNode.getAttribute("data-id");
    const response = await fetch(`/api/motivator/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/planner/1");
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  });
});

deleteFuture.forEach((button) => {
  button.addEventListener("click", async (event) => {
    const id = event.target.parentNode.getAttribute("data-id");
    const response = await fetch(`/api/future/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/planner/1");
    } else {
      alert(response.statusText);
    }
  });
});
