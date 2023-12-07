const newMotiveHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#text-content").value;

  if (content) {
    const response = await fetch("/api/motivator", {
      method: "POST",
      body: JSON.stringify({ content }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/planner/1");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#newmotive-btn")
  .addEventListener("click", newMotiveHandler);
