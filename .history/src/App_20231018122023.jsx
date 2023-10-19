import "./App.css";
import { Route, Routes } from "react-router-dom";


function App() {
  return <Box>
     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  </Box>;
}

export default App;
