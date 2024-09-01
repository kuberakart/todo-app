import { useState } from "react";
import "./EditTask.css";
import { Button, Input } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

function EditTask({ isEditInputVisible, task, handleUpdateTodoTask }) {
  const [editText, setEditText] = useState(task);

  const handleTaskChange = (event) => {
    setEditText(event.target.value);
  };

  if (isEditInputVisible) {
    return (
      <>
        <Input value={editText} onChange={handleTaskChange} />
        <Button
          onClick={() => handleUpdateTodoTask(editText)}
          type="primary"
          icon={<CheckCircleOutlined />}
          shape={"circle"}
          className="updateTaskBtn"
        />
      </>
    );
  }

  return null;
}

export default EditTask;
