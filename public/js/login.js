const loginFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (name && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      // document.location.replace("/planner/1");
      window.location.replace("/planner/1")
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-signup").value.trim();
  const name = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (email && name && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ name, password, email }),
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
  .querySelector("#login-btn")
  .addEventListener("click", loginFormHandler);

document
  .querySelector("#sign-btn")
  .addEventListener("click", signupFormHandler);
