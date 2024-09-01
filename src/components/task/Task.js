import "./Task.css";
import { Button, Input } from "antd";
import { CheckCircleOutlined, EditOutlined } from "@ant-design/icons";
import { useState } from "react";

function Task({
  task,
  handleCompleteTaskActionBtnClick,
  handleUpdateTaskBtnClick,
  taskIndex,
  hideActions,
}) {
  const [editText, setEditText] = useState(task);
  const [isEditInputVisible, setIsEditInputVisible] = useState(false);

  const handleTaskChange = (event) => {
    setEditText(event.target.value);
  };

  const handleEditBtnClick = () => {
    setIsEditInputVisible(true);
  };

  const handleUpdateTodoTask = () => {
    // Update the todo task list
    handleUpdateTaskBtnClick(editText, taskIndex);

    // hide the edit input and button
    setIsEditInputVisible(false);
  };

  return (
    <div className="listItem" key={task}>
      <div className="itemContent">{task}</div>
      {!hideActions && (
        <div className="actionWrapper">
          {!isEditInputVisible && (
            <Button
              onClick={handleEditBtnClick}
              type="primary"
              icon={<EditOutlined />}
              shape={"circle"}
              className="markCompletedBtn"
            />
          )}
          {isEditInputVisible && (
            <>
              <Input value={editText} onChange={handleTaskChange} />
              <Button
                onClick={handleUpdateTodoTask}
                type="primary"
                icon={<CheckCircleOutlined />}
                shape={"circle"}
              />
            </>
          )}
          {!isEditInputVisible && (
            <Button
              onClick={() => handleCompleteTaskActionBtnClick(taskIndex)}
              type="primary"
              icon={<CheckCircleOutlined />}
              shape={"circle"}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Task;
