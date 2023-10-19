import React from "react";
import { grey } from "@mui/material/colors";
import { Box, Typography } from "@mui/material";

const About = () => {
  return <Box sx={{ position backgroundColor: grey[800], height: "400px" }}>
    <Typography sx={{position:"absolute", bottom: "100px"}}>About</Typography>
  </Box>;
};

export default About;
