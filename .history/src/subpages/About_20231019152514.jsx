import React from "react";
import { grey } from "@mui/material/colors";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ position: "relative", backgroundColor: grey[800], height: "400px", zIndex: -1 }}>
      <Typography sx={{ position: "absolute", bottom: "100px", ml }}>About</Typography>
    </Box>
  );
};

export default About;
