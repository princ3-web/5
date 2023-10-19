import React from "react";
import { grey } from "@mui/material/colors";
import { Box, Typography, CardMedia } from "@mui/material";
import image1 from "../assets/images/1.jpg";

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
      <Box sx={{ display: "flex", justifyContent:"space-evenly", py: "4rem", ml: "4rem" }}>
        <CardMedia
          component="img"
          alt="Card Image"
          image={image1}
          sx={{ objectFit: "cover", width: "40%", height: "600px" }}
        />
        <Typography sx={{width: "40%"}} variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam.{" "}
        </Typography>
      </Box>
      <Box>
        <CardMedia component="img" alt="Card Image" image={image1} />
        <Typography>“This is the perfect place for a testimonial, quote or statement.”</Typography>
      </Box>
    </Box>
  );
};

export default About;
