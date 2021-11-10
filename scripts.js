// The purpose of this function is to
//   1) prevent the event bubbling and
//   2) display the keys and values to the console.
function submitHandler(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  for (let x of formData.keys()) {
    console.log(`x = ${x}, val = ${formData.get(x)}`);
  }
}

// The purpose of this function is to initialize the form handling
function initApp() {
  const form = document.querySelector("#test-form");
  if (form) {
    form.addEventListener("submit", submitHandler);
  }
}

// We want to wait until the content has been loaded
window.addEventListener("DOMContentLoaded", initApp);
