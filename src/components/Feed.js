import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchFromApi } from "../utils/fetchFromApi";

import { Sidebar } from "./index";
import Videos from "./Videos";

const Feed = () => { 
  const [videos, setVideos] = useState(null);

  const [selectedCategory , setSelectedCategory] = useState('New');
  // fetch the data from the api
  useEffect(() => {
    setVideos(null);
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items));
    console.log(videos);
  },[selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "column",
          md: "row",
        },
      }}
    >
      {/** this box for the aside sectio and it is contain the sidebar and typography for the copyright*/}
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar 
        selectedCategory = {selectedCategory}
        setSelectedCategory = {setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="overline"
          sx={{ mt: 1.6, color: "#fff" }}
        >
          Copyright 2023 Abdalla Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh" }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: "white" }}>
          {selectedCategory}
          <span style={{ color: "#F31503" }}> videos</span>
        </Typography>
        <Videos video = {videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
