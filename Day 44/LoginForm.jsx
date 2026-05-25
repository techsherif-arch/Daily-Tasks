import React from "react";
import { TextField, Button, Box } from "@mui/material";

function LoginForm() {
  return (
    <Box sx={{ p: 3 }}>
      <h2>Login Form</h2>

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <Button variant="contained">
        Submit
      </Button>
    </Box>
  );
}

export default LoginForm;