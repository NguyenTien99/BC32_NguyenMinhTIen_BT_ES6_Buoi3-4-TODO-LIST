class TaskList{
    constructor(){
        this.tasks = [];
    }
    
    addTask(task){
        this.tasks = [...this.tasks,task];
    }

    findTask(taskId){
        return this.tasks.find(task => task.task === taskId);
    }

    deleteTask(taskID){
        this.tasks = this.tasks.filter(task => task.task !== taskID);
    }
    sortDown(){
        this.tasks.sort((todo, nextTodo) => {
            if (todo.id > nextTodo.id) {
              return 1;
            }
            return -1;
          });
    }
}