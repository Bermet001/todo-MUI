import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { ListItem, Checkbox, IconButton } from "@mui/material";
import styled from "styled-components";
import Typography from "@mui/material/Typography";

const TodoItem = ({ todo, onDeleteTodo, onToggle }) => {
  return (
    <>
      <TodoCard
        className={todo.isCompleted ? "completedTodo" : ""}
        key={todo.id}
      >
        <Checkbox
          checked={todo.isCompleted}
          onChange={() => onToggle(todo.id)}
        />
        <TodoTitle variant="span" style={{ completed: todo.isCompleted }}>
          {todo.text}
        </TodoTitle>

        <IconButton onClick={() => onDeleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      </TodoCard>
    </>
  );
};

export default TodoItem;

const TodoCard = styled(ListItem)(() => ({
  width: "100%",
  marginTop: "10px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px",
  backgroundColor: "#ffffff",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s ease",

  "&:hover": {
    backgroundColor: "#f0f0f0",
    borderColor: "#1976d2",
  },

  "&.completedTodo": {
    textDecoration: "line-through",
    color: "grey",
    borderColor: "#1976d2",
  },
}));
const TodoTitle = styled(Typography)(() => ({
  marginRight: "10px",
  flexGrow: "1",
  maxWidth: "80%",
  overflow: "hidden",
}));
