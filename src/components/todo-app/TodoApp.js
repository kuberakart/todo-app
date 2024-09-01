import "./TodoApp.css";
import { useState } from "react";
import AppHeader from "../app-header/AppHeader";
import AppFooter from "../app-footer/AppFooter";
import Task from "../task/Task";
import AddTask from "../add-task/AddTask";

function TodoApp() {
  const [todoTasks, setTodoTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleAddTodoTaskButtonClick = (todoTask) => {
    setTodoTasks([...todoTasks, todoTask]);
  };
  const handleCompleteTaskActionBtnClick = (taskIndex) => {
    const completedTask = todoTasks[taskIndex];

    // Remove the completed task from the todoTasks list
    const newTodoList = todoTasks.reduce((acc, task, index) => {
      if (taskIndex != index) {
        acc.push(task);
      }
      return acc;
    }, []);
    setTodoTasks(newTodoList);

    //Add the completed task to the completed task list
    setCompletedTasks([...completedTasks, completedTask]);
  };

  const handleUpdateTaskBtnClick = (editText, taskIndex) => {
    const newTodoTasks = todoTasks.map((item, index) => {
      if (taskIndex === index) {
        return editText;
      }
      return item;
    });

    setTodoTasks(newTodoTasks);
  };

  return (
    <div className="todoApp">
      <AppHeader />
      <div className="todoListWrapper">
        <div className="todoItems">
          <h4>TODO Tasks:</h4>
          <AddTask
            handleAddTodoTaskButtonClick={handleAddTodoTaskButtonClick}
          />
          {todoTasks.map((task, index) => {
            return (
              <Task
                task={task}
                taskIndex={index}
                handleCompleteTaskActionBtnClick={
                  handleCompleteTaskActionBtnClick
                }
                handleUpdateTaskBtnClick={handleUpdateTaskBtnClick}
                hideActions={false}
              />
            );
          })}
        </div>
        <div className="completedItems">
          <h4>COMPLETED Tasks</h4>
          {completedTasks.map((task, index) => {
            return <Task task={task} taskIndex={index} hideActions={true} />;
          })}
        </div>
      </div>
      <AppFooter />
    </div>
  );
}

export default TodoApp;
