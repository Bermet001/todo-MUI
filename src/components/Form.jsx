import React from "react";
import { useFormik } from "formik";
import { validationSchemaForm } from "../utils/helpers/validate";
import Input from "../utils/UI/Input";
import { ButtonGroup, styled } from "@mui/material";
import Button from "@mui/material/Button";
import { showErrors } from "../utils/helpers/general";
import { useNavigate } from "react-router-dom";
import ThemeComponent from "./ThemeComponent";

const Form = () => {
  const navigate = useNavigate();
  const onSubmit = (value, { resetForm }) => {
    resetForm();
    navigate("todo-list");
  };

  const { values, handleChange, handleSubmit, errors, handleBlur } = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
      password: "",
    },
    validateOnChange: false,
    onSubmit,
    validationSchema: validationSchemaForm,
  });

  return (
    <ThemeComponent>
      <StyledForm onSubmit={handleSubmit}>
        <h1>LOG IN</h1>
        <Input
          label="Name"
          type="text"
          name="name"
          id="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          label="Age"
          type="number"
          name="age"
          id="age"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {showErrors(errors) && <p>{showErrors(errors)}</p>}

        <ButtonGroup variant="contained">
          <Button type="submit">Submit</Button>
        </ButtonGroup>
      </StyledForm>
    </ThemeComponent>
  );
};

export default Form;

const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.8em",
  height: "100vh",
  border: `1px solid ${theme.palette.primary.main}`,
}));
