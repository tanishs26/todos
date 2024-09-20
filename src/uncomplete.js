export default function unfins(allTasks) {
  const content = document.querySelector(".content");
  content.textContent = ".";

  const task = allTasks.filter((t) => !t.completed);
  for (let i = 0; i < task.length; i++) {
    const container = document.createElement("div");
    container.innerHTML = `
      <div class="conDiv"><h2 style="margin:8px;" class="con-title">${allTasks[i].title}</h2>
      <div style="margin:8px;" class="con-desc">${allTasks[i].desc}</div>
      <div style="margin:8px;">${allTasks[i].date}</div>
      <div style="margin:8px;">${allTasks[i].priority}</div></div>`;
      const delBtn = document.createElement("button");
    const divDel = document.createElement("div");
    divDel.classList.add("divDel");
    delBtn.id = "delBtn";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      allTasks.splice(i, 1);
      display(allTasks);
    });

    //checkbox
    const check = document.createElement("input");
    check.type = "checkbox";

    check.checked = allTasks[i].completed;

    const con_title = container.querySelector(".con-title");
    const con_desc = container.querySelector(".con-desc");
    if (allTasks[i].completed) {
      con_desc.style.textDecoration = "line-through";
      con_title.style.textDecoration = "line-through";
    }

    check.addEventListener("change", () => {
      allTasks[i].completed = check.checked;
      if (check.checked) {
        con_desc.style.textDecoration = "line-through";
        con_title.style.textDecoration = "line-through";
      } else {
        con_desc.style.textDecoration = "none";
        con_title.style.textDecoration = "none";
      }
    });
    divDel.appendChild(delBtn);
    divDel.appendChild(check);
    container.appendChild(divDel);

    container.classList.add("container");
    content.appendChild(container);
  }
}
