import "./style.css";
import addItem from "./addItem";
export default function display(allTasks) {
  const addTask = document.querySelector("#addTask");
  const submit = document.querySelector("#submit");
  const title = document.querySelector("#title");
  const desc = document.querySelector("#description");
  const priority = document.querySelector("#priority");
  const date = document.querySelector("#date");
  const card = document.querySelector(".card");
  const content = document.querySelector(".content");
  content.textContent = "";
  for (let i = 0; i < allTasks.length; i++) {
    const container = document.createElement("div");
    container.innerHTML = `
      <div class="conDiv"><h2>${allTasks[i].title}</h2>
      <p>${allTasks[i].desc}</p>
      <p>${allTasks[i].date}</p>
      <p>${allTasks[i].priority}</p></div>

      `;
    const delBtn = document.createElement("button");
    const divDel = document.createElement("div");
    delBtn.id = "delBtn";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      allTasks.splice(i, 1);
      display(allTasks);
    });
    divDel.appendChild(delBtn);
    container.appendChild(divDel);

    container.classList.add("container");
    content.appendChild(container);
  }

  title.value = "";
  desc.value = "";
  priority.value = "";
  date.value = "";
}
