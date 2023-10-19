import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./subpages/Home";
import 
function App() {
  return <Box>
     <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
  </Box>;
}

export default App;
