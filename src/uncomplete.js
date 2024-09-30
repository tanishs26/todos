import display from "./display";
const editCard = document.querySelector(".editCard");
const edHead = document.querySelector(".edHead");
const edInfo = document.querySelector(".edInfo");
const edDate = document.querySelector(".edDate");
const edPriority = document.querySelector(".edPriority");
export default function unfins(allTasks) {
  const content = document.querySelector(".content");
  content.textContent = "";

  const task = allTasks.filter((t) => !t.completed);

  for (let i = 0; i < task.length; i++) {
    const container = document.createElement("div");
    container.innerHTML = `
      <div class="conDiv">
        <h2 style="margin:8px;" class="con-title">${task[i].title}</h2>
        <div style="margin:8px;" class="con-desc">${task[i].desc}</div>
        <div style="margin:8px;">${task[i].date}</div>
        <div style="margin:8px;">${task[i].priority}</div>
      </div>`;

      //Box-Shadow:
    if (allTasks[i].priority == "High") {
      container.style.boxShadow = " inset 10px 17px 29px -12px rgba(255,0,0,0.6)";
    }
    else if(allTasks[i].priority=="Medium"){
      container.style.boxShadow = " inset 10px 17px 29px -12px rgba(255,187,0,1)";
    }
    else{
      container.style.boxShadow = " inset 10px 17px 29px -12px rgba(111,255,1)";

    }
    const delBtn = document.createElement("button");
    const divDel = document.createElement("div");
    divDel.classList.add("divDel");
    delBtn.id = "delBtn";

    delBtn.addEventListener("click", () => {
      const taskIndex = allTasks.indexOf(task[i]);
      allTasks.splice(taskIndex, 1);
      display(allTasks);
    });

    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = task[i].completed;

    const con_title = container.querySelector(".con-title");
    const con_desc = container.querySelector(".con-desc");

    if (task[i].completed) {
      con_desc.style.textDecoration = "line-through";
      con_title.style.textDecoration = "line-through";
    }

    check.addEventListener("change", () => {
      task[i].completed = check.checked;
      if (check.checked) {
        con_desc.style.textDecoration = "line-through";
        con_title.style.textDecoration = "line-through";
      } else {
        con_desc.style.textDecoration = "none";
        con_title.style.textDecoration = "none";
      }
    });
    const edit = document.createElement("div");
    edit.textContent = "✏️";
    edit.style.cursor = "pointer";
    edit.addEventListener("click", () => {
      editCard.style.display = "block";
      edHead.textContent = task[i].title;
      edInfo.textContent = task[i].desc;
      edDate.value = task[i].date;
      edPriority.value = task[i].priority;

      const doneBtn = document.createElement("button");
      doneBtn.textContent = "Done!";
      doneBtn.classList.add("doneBtn");
      doneBtn.addEventListener("click", () => {
        task[i].title = edHead.textContent;
        task[i].desc = edInfo.textContent;
        task[i].date = edDate.value;
        task[i].priority = edPriority.value;
        editCard.style.display = "none";
        display(allTasks);
      });
      editCard.appendChild(doneBtn);
    });

    divDel.appendChild(delBtn);
    divDel.appendChild(check);
    divDel.appendChild(edit);
    container.appendChild(divDel);

    container.classList.add("container");
    content.appendChild(container);
  }
}
