import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./subpages/Home";
import { Box } from "@mui/material";


function App() {
  return <Box>
     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<Instructors />} />
        <Route exact path="/" element={<Classes />} />
      </Routes>
  </Box>;
}

export default App;
