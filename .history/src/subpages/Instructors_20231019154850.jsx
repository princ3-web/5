import React from "react";
import { grey } from "@mui/material/colors";
import { Box, Typography } from "@mui/material";

const Instructors = () => {
  return (
    <Box></Box>
    <Box sx={{ position: "relative", backgroundColor: grey[800], height: "400px", zIndex: -1 }}>
    <Typography color={grey[100]} variant="h2" sx={{ position: "absolute", bottom: "100px", ml: "4rem" }}>Instructors</Typography>
  </Box>
  
  )
}

export default Instructors