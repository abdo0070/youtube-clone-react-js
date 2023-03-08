import { useState } from "react";

import { IconButton, Paper } from "@mui/material";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        console.log(e)
        e.preventDefault();
      }}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 3,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="search ?"
        onChange={() => {}}
        // style={{fontSize:30}}
      />

      <IconButton
        type="submit"
        sx={{
          p: 4,
          color: "red",
        }}
        onSubmit={(e) => {
          console.log("hello");
        }}
      >

        <YoutubeSearchedForIcon />
      </IconButton>
    </Paper>
  );
}
