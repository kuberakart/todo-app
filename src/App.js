import { Route, Routes } from "react-router-dom";
import "./App.css";
import TodoApp from "./components/todo-app/TodoApp";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo-app" element={<TodoApp />} />
      </Routes>
    </div>
  );
}
export default App;
