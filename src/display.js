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
  const editCard = document.querySelector(".editCard");
  const edHead = document.querySelector(".edHead");
  const edInfo = document.querySelector(".edInfo");
  const edDate = document.querySelector(".edDate");
  const edPriority = document.querySelector(".edPriority");
  content.textContent = "";

  for (let i = 0; i < allTasks.length; i++) {
    const container = document.createElement("div");
    container.innerHTML = `
      <div class="conDiv">
          <h2 class="con-title">${allTasks[i].title}</h2>
          <div  class="con-desc" >${allTasks[i].desc}</div>
          <div style="margin:8px;">${allTasks[i].date}</div>
          <div style="margin:8px;">${allTasks[i].priority}</div>
      </div>`;

    const delBtn = document.createElement("button");
    const divDel = document.createElement("div");
    divDel.classList.add("divDel");
    delBtn.classList.add("delBtn");
    delBtn.id = "delBtn";
    delBtn.addEventListener("click", () => {
      allTasks.splice(i, 1);
      display(allTasks);
    });
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

    const edit = document.createElement("div");
    edit.textContent = "🖉";
    edit.style.cursor = "pointer";
    edit.addEventListener("click", () => {
      editCard.style.display = "block";
      edHead.textContent = allTasks[i].title;
      edInfo.textContent = allTasks[i].desc;
      edDate.value = allTasks[i].date;
      edPriority.value = allTasks[i].priority;

      const doneBtn = document.createElement("button");
      doneBtn.textContent = "Done!";
      doneBtn.classList.add("doneBtn");
      doneBtn.addEventListener("click", () => {
        allTasks[i].title = edHead.textContent;
        allTasks[i].desc = edInfo.textContent;
        allTasks[i].date = edDate.value;
        allTasks[i].priority = edPriority.value;
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

  title.value = "";
  desc.value = "";
  priority.value = "";
  date.value = "";
}
