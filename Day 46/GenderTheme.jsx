import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Switch,
  Paper,
} from "@mui/material";

function GenderTheme() {
  const [gender, setGender] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Paper
      sx={{
        p: 4,
        m: 4,
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <h2>Day 46 Task</h2>

      {/* Gender Radio */}
      <FormControl>
        <FormLabel>Gender</FormLabel>

        <RadioGroup
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <FormControlLabel
            value="Male"
            control={<Radio />}
            label="Male"
          />

          <FormControlLabel
            value="Female"
            control={<Radio />}
            label="Female"
          />
        </RadioGroup>
      </FormControl>

      <br /><br />

      {/* Theme Switch */}
      <FormControlLabel
        control={
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        }
        label={darkMode ? "Dark Mode" : "Light Mode"}
      />
    </Paper>
  );
}

export default GenderTheme;