import { Route, Routes } from "react-router-dom";
import Form from "../components/Form";
import Todo from "../components/Todo";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="todo-list" element={<Todo />} />
    </Routes>
  );
};

export default AppRoutes;
