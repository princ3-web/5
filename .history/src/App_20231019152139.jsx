import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./subpages/Home";
import Instructors from "./subpages/Instructors";
import Classes from "./subpages/Classes";
import About from "."
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Subbar from "./components/Subbar";

function App() {
  return (
    <Box sx={{ position: "relative", width: "100vw" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Subbar />
    </Box>
  );
}

export default App;
