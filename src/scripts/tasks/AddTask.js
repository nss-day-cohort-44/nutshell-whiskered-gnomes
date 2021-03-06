//J.Kaset renders task button and creates click event for it

const contentTarget = document.querySelector(".tasks")
const eventHub = document.querySelector(".container")


export const renderTaskButton = () => {

  contentTarget.innerHTML = `
    <h3 class="task_header">Tasks</h3>
    <button id="create-task-button">Add Task</button>
    `
}

//when you click Add Task button
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "create-task-button") {

    const taskButtonClicked = new CustomEvent("taskButtonClicked")
    //console.log(taskButtonClicked, "task button clicked")
    eventHub.dispatchEvent(taskButtonClicked)
  }
})