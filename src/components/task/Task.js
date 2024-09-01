import "./Task.css";
import { Button } from "antd";
import { EditOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import { useState } from "react";
import EditTask from "../edit-task/EditTask";

function Task({
  task,
  handleCompleteTaskActionBtnClick,
  handleUpdateTaskBtnClick,
  taskIndex,
  hideActions,
}) {
  const [isEditInputVisible, setIsEditInputVisible] = useState(false);

  const handleEditBtnClick = () => {
    setIsEditInputVisible(true);
  };

  const handleUpdateTodoTask = (editText) => {
    // Update the todo task list
    handleUpdateTaskBtnClick(editText, taskIndex);

    // hide the edit input and button
    setIsEditInputVisible(false);
  };

  const hideActionsWrapper = !hideActions && !isEditInputVisible;

  return (
    <div className="listItem" key={task}>
      {!isEditInputVisible && <div className="itemContent">{task}</div>}
      <EditTask
        task={task}
        isEditInputVisible={isEditInputVisible}
        handleUpdateTodoTask={handleUpdateTodoTask}
      />
      {hideActionsWrapper && (
        <div className="actionWrapper">
          <Button
            onClick={handleEditBtnClick}
            type="primary"
            icon={<EditOutlined />}
            shape={"circle"}
          />

          <Button
            onClick={() => handleCompleteTaskActionBtnClick(taskIndex)}
            icon={<CheckCircleTwoTone twoToneColor="#52c41a" />}
            shape={"circle"}
            className="markCompletedBtn"
          />
        </div>
      )}
    </div>
  );
}

export default Task;
