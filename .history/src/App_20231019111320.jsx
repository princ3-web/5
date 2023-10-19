import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./subpages/Home";
import Instructors from "./subpages/Instructors";
import Classes from "./subpages/Classes";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";


function App() {
  return <Box>
    <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
      
  </Box>;
}

export default App;
