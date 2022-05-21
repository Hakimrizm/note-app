const button = document.getElementById("button-show");
const form = document.querySelector(".cover");
const container = document.querySelector(".row");

button.addEventListener("click", function () {
  if (form.parentElement.classList.contains("d-none")) {
    form.parentElement.classList.remove("d-none");
    form.parentElement.classList.add("d-block");
  }
});

window.addEventListener("click", function (e) {
  if (e.target == form) {
    form.parentElement.classList.add("d-none");
    form.parentElement.classList.remove("d-block");
  }

  if (e.target.classList.contains("btn-simpan")) {
    const inputTitle = document.getElementById("title-note");
    const inputText = document.getElementById("note");

    container.insertAdjacentHTML("beforeend", updateUiNote(inputTitle.value, inputText.value));

    clear(inputTitle, inputText);
  }
});

function clear(title, text) {
  title.value = "";
  text.value = "";
  form.parentElement.classList.add("d-none");
}

function updateUiNote(title, text) {
  return `<div class="col-md-4">
            <div class="card mb-3">
                <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">${text}</p>
                </div>
              </div>
            </div>`;
}
