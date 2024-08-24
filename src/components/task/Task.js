import "./Task.css";
import { Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

function Task({ task, handleActionBtnClick, taskIndex, hideActions }) {
  return (
    <div className="listItem" key={task}>
      <div className="itemContent">{task}</div>
      {!hideActions && (
        <Button
          onClick={() => handleActionBtnClick(taskIndex)}
          type="primary"
          icon={<CheckCircleOutlined />}
          shape={"circle"}
          className="markCompletedBtn"
        />
      )}
    </div>
  );
}

export default Task;
