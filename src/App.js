import "./App.css";
import { useState } from "react";
import AppHeader from "./components/app-header/AppHeader";
import AppFooter from "./components/app-footer/AppFooter";
import Task from "./components/task/Task";
import AddTask from "./components/add-task/AddTask";

function App() {
  const [todoTasks, setTodoTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleAddTodoTaskButtonClick = (todoTask) => {
    setTodoTasks([...todoTasks, todoTask]);
  };
  const handleMarkCompletedClick = (taskIndex) => {
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
                handleActionBtnClick={handleMarkCompletedClick}
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
export default App;
