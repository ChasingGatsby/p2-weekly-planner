const newFutureHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#text-content").value;

  if (content) {
    const response = await fetch("/api/future", {
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
  .querySelector("#newfuture-btn")
  .addEventListener("click", newFutureHandler);
