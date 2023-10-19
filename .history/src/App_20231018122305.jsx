import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./subpages/Home";
import Instructors from "./subpages/Instructors";
import Classes from "./subpages/Classes";
import { Box } from "@mui/material";


function App() {
  return <Box>
     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/instructors" element={<Instructors />} />
        <Route exact path="/classes" element={<Classes />} />
      </Routes>
  </Box>;
}

export default App;
