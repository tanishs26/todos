import display from "./display";

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
      date: "20-07-2024",
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
  
  console.log(allTasks);
  console.log(allTasks.length);
  return allTasks;
}
