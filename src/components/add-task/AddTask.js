import "./AddTask.css";
import { Input, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

function AddTask({ handleAddTodoTaskButtonClick }) {
  const [todoTask, setTodoTask] = useState("");
  const handleTodoTaskInputChange = (event) => {
    setTodoTask(event.target.value);
  };
  const handleAddTaskClick = () => {
    if (todoTask) {
      handleAddTodoTaskButtonClick(todoTask);
      setTodoTask("");
    }
  };

  return (
    <div className="addTaskWrapper">
      <Input
        value={todoTask}
        onChange={handleTodoTaskInputChange}
        placeholder={"Enter new todo task and click add button"}
      />
      <Button
        onClick={handleAddTaskClick}
        type="primary"
        icon={<PlusCircleOutlined />}
      />
    </div>
  );
}

export default AddTask;
