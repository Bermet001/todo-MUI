import React, { useState, useEffect } from "react";
import { Button, List, Container } from "@mui/material";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Input from "../utils/UI/Input";
import uuid from "react-uuid";
import TodoItem from "./TodoItem";

const Todo = () => {
  const saveTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(saveTodos);
  const [task, setTask] = useState("");

  const addTodoHandler = () => {
    if (task.trim().length > 0) {
      const newTodo = {
        text: task,
        isCompleted: false,
        id: uuid(),
      };
      setTodos([...todos, newTodo]);
      setTask("");
    }
    return todos;
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const toogleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const inputValue = (e) => setTask(e.target.value);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <StyledTodoContainer maxWidth="sm">
      <Typography align="center" variant="h3" gutterBottom>
        To-do list
      </Typography>
      <StyledForm onSubmit={addTodoHandler}>
        <StyledDiv>
          <StyledInput
            label="Enter new todo"
            variant="outlined"
            margin="normal"
            value={task}
            onChange={inputValue}
          />
          <Button
            variant="contained"
            style={{ height: "3.5rem" }}
            type="submit"
          >
            add
          </Button>
        </StyledDiv>
        <StyledList>
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              onDeleteTodo={deleteTask}
              onToggle={toogleTodoHandler}
            />
          ))}
        </StyledList>
      </StyledForm>
    </StyledTodoContainer>
  );
};

export default Todo;

const StyledTodoContainer = styled(Container)(() => ({
  display: "inline-block",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "4rem",
  "& .css-17vbkzs-MuiFormControl-root-MuiTextField-root": {
    marginTop: "10px !important",
  },
}));

const StyledInput = styled(Input)(() => ({
  width: "100%",
}));

const StyledList = styled(List)(() => ({
  width: "100%",
}));

const StyledForm = styled("form")(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.8em",
}));

const StyledDiv = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.8em",
  width: "100%",
}));
