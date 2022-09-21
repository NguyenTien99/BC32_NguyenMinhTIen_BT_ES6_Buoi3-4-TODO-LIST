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
    sorttaskDown() {
        this.tasks.sort((task, tasknext) => {
          if (task.task > tasknext.task) {
            return 1;
          }
          return -1;
        });
      }
      sorttaskUp() {
        this.tasks.sort((task, tasknext) => {
          if (task.task < tasknext.task) {
            return 1;
          }
          return -1;
        });
      }
}