import { Button } from "antd";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleGotoTodoAppButtonClick = () => {
    navigate("/todo-app");
  };
  return (
    <div className="appHome">
      <Button type="primary" onClick={handleGotoTodoAppButtonClick}>
        Go to Todo App
      </Button>
    </div>
  );
}

export default Home;
