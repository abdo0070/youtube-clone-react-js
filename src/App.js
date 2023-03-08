import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";

import {
  Navbar,
  Feed,
  SearchFeed,
  ChannelDetail,
  VideoDetail,
} from "./components";

export default function App() {
  return (
    <div className="App">
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="video/:id" element={<VideoDetail />} />
          <Route path="channel/:id" element={<ChannelDetail />} />
          <Route phwath="search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </div>
  );
}
