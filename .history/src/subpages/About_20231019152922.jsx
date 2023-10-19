import React from "react";
import { grey } from "@mui/material/colors";
import { Box, Typography, CardMedia } from "@mui/material";
import image1 from "../"

const About = () => {
  return (
    <Box>
      <Box sx={{ position: "relative", backgroundColor: grey[800], height: "400px", zIndex: -1 }}>
        <Typography
          color={grey[100]}
          variant="h2"
          sx={{ position: "absolute", bottom: "100px", ml: "4rem" }}
        >
          About us
        </Typography>
      </Box>
      <Box> <CardMedia component="img" alt="Card Image" image={image1} /></Box>
      <Box></Box>
    </Box>
  );
};

export default About;
