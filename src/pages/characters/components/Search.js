import { TextField } from "@mui/material";
import React from "react";

export const Search = ({ handleChange, value }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "2rem 0",
        padding: "0.5rem 2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0.5rem 2rem",
          backgroundColor: "moccasin",
          borderRadius: "25px",
        }}
      >
        <TextField
          label="Search"
          variant="outlined"
          onChange={handleChange}
          value={value}
        />
      </div>
    </div>
  );
};
