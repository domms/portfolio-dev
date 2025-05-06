import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const cleanLightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f9f9f9", // soft white
      paper: "#ffffff", // true white for cards
    },
    primary: {
      main: "#4f7cac", // soft black for buttons/links
    },
    text: {
      primary: "#222222",
      secondary: "#555555",
    },
    divider: "#e0e0e0",
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: `'Inter', sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={cleanLightTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
