document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const input = document.querySelector("input#new-task-description").value;
    const listItem = document.createElement("li");
    const unorderedList = document.getElementById("tasks");
    const button = document.createElement("button");
    button.textContent = "x"
    listItem.textContent = `${input} `;
    listItem.appendChild(button);
    //console.log(listItem);
    unorderedList.appendChild(listItem);
    //console.log(unorderedList);
    button.addEventListener("click", () => {
      listItem.remove()
    })
    form.reset();
  })
});
