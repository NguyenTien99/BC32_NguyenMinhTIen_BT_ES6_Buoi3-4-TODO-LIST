const taskList = new TaskList();
const taskComplete = new TaskList();

// Hàm thêm task
document.getElementById("addItem").onclick = function () {
  const valueTask = document.getElementById("newTask").value;
  
  if(!valueTask){
    alert("Vui lòng nhập nhiệm vụ của bạn!");
    return;
  }
  const task = new Task(valueTask);
  taskList.addTask(task);
  displayTask(taskList.tasks);
  
};

// Xóa Task
function deleleTask(taskID){
    taskList.deleteTask(taskID);
    displayTask(taskList.tasks);
}


//Add Task Complete
function completeTask(taskId){
    const task = taskList.findTask(taskId);
    taskComplete.addTask(task);
    taskList.deleteTask(taskId);
    displayComplete(taskComplete.tasks);
    displayTask(taskList.tasks);
}
// Xóa Task Complete
function deleleComplete(taskID){
    taskComplete.deleteTask(taskID);
    displayComplete(taskComplete.tasks);
}

// Xắp xếp
document.getElementById("two").onclick = () =>{
    taskList.sortDown()
    console.log(taskList);
    displayTask(taskList.tasks);
}
//========================
function displayTask(taskList) {
  const html = taskList.reduce((result, task) => {
    return (
      result +
      `
            <div class="taskDisplay">
                <p id="valueTask">${task.task}</p>
                <div>
                <i class="fa fa-trash-alt" onclick="deleleTask('${task.task}')"></i>
                <i class="fa fa-check" id="completeTask" onclick="completeTask('${task.task}')"></i>
                </div>
            </div>
        `
    );
  }, "");
  document.getElementById("todo").innerHTML = html;
}

function displayComplete(taskComplete) {
    const html = taskComplete.reduce((result, task) => {
      return (
        result +
        `
              <div class="taskDisplay completeTask">
                  <p>${task.task}</p>
                  <div>
                  <i class="fa fa-trash-alt" onclick="deleleComplete('${task.task}')"></i>
                  <i class="fa fa-check"></i>
                  </div>
              </div>
          `
      );
    }, "");
    document.getElementById("completed").innerHTML = html;
  }