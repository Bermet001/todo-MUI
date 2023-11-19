import React from "react";
import TextField from "@mui/material/TextField";
import { forwardRef } from "react";

const Input = forwardRef(({ type, label, ...rest }, ref) => {
  return <TextField type={type} label={label} ref={ref} {...rest} />;
});

export default Input;
