const todoButtons = document.querySelectorAll(".add-todo");
const priorityButtons = document.querySelectorAll(".add-priority");

const addToDoHandler = async (event) => {
  const day = event.target.closest(".weekday");
  const id = day.getAttribute("id");
  console.log(id);
};

const addPriorityHandler = async (event) => {
  const day = event.target.closest(".weekday");
  const id = day.getAttribute("id");
};

document.addEventListener("DOMContentLoaded", function () {
  var openButton = document.querySelectorAll(".edit-btn");
  var popup = document.querySelectorAll(".popup");
  var inputField = document.querySelectorAll(".input-field");
  var submitButton = document.querySelectorAll(".submit-button");

  openButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      popup[index].style.display = "block";
    });
  });

  submitButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      const inputValue = inputField[index].value;
      console.log(inputValue);
      popup[index].style.display = "none";
    });
  });
});

todoButtons.forEach(function (button) {
  button.addEventListener("click", addToDoHandler);
});

priorityButtons.forEach(function (button) {
  button.addEventListener("click", addPriorityHandler);
});
