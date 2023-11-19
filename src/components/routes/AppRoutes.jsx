import { Route, Routes } from "react-router-dom";
import Form from "../Form";
import Todo from "../Todo";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="todo-list" element={<Todo />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
