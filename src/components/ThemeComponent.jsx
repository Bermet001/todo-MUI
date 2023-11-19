import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { CssBaseline } from "@mui/material";

const defaultTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const ThemeComponent = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const label = { inputProps: { "aria-label": "Size switch demo" } };

  const changeTheme = (e) => {
    const newTheme = e.target.checked ? darkTheme : defaultTheme;
    setCurrentTheme(newTheme);

    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      {isDarkMode ? <CssBaseline /> : ""}
      <Switch onClick={changeTheme} checked={isDarkMode} {...label} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
