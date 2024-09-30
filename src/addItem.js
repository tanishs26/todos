import display from "./display";
import unfins from "./uncomplete";
import upcom from "./upcoming";
export default function addItem() {
  const submit = document.querySelector("#submit");
  const title = document.querySelector("#title");
  const desc = document.querySelector("#description");
  const priority = document.querySelector("#priority");
  const date = document.querySelector("#date");
  const card = document.querySelector(".card");
  const addTask = document.querySelector("#addTask");
  let allTasks = [
    {
      title: "Learn js",
      desc: "Will be learning Modules in JS",
      priority: "Medium",
      date: "2024-09-26",
    },
    {
      title: "Exercise",
      desc: "Doing 10 pushups",
      priority: "High",
      date: "2024-09-29",
    },
   
  ];

  addTask.addEventListener("click", () => {
    card.style.display = "flex";
  });
  submit.addEventListener("click", () => {
    card.style.display = "none";

    function Task(title, desc, priority, date) {
      this.title = title;
      this.desc = desc;
      this.priority = priority;
      this.date = date;
    }

    const newTask = new Task(
      title.value,
      desc.value,
      priority.value,
      date.value
    );

    allTasks.push(newTask);
    display(allTasks);
  });

  const allBtn = document.querySelector("#all");
  allBtn.addEventListener("click", () => {
    display(allTasks);
  });
  const unfin = document.querySelector("#unfin");
  unfin.addEventListener("click", () => {
    unfins(allTasks);
  });
  const upcoming = document.querySelector("#upcoming");
  upcoming.addEventListener("click", () => {
    upcom(allTasks);
  });

  console.log(allTasks);
  // console.log(allTasks.length);
  return allTasks;
}
