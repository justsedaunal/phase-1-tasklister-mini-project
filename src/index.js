document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  console.log(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleAddTask(e.target.new_task.value);
    form.reset();
  });
  // your code here
});

function handleAddTask(todo) {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  const ul = document.getElementById("tasks");

  li.textContent = todo;
  btn.textContent = "✖";
  ul.appendChild(li);
  li.appendChild(btn);

  btn.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });

  console.log(todo);
}
