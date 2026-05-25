import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LoginForm from "./Day44/LoginForm";
import ProductCard from "./Day44/ProductCard";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginForm />
      <ProductCard />
    </ThemeProvider>
  );
}

export default App;