import React from "react";
import image1 from "../assets/images/1.jpg";
import { Box, CardMedia, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Home = () => {
  return (
    <Box>
      <CardMedia component="img" alt="Card Image" image={image1} />
      <Box sx={{position:"absolute",  bottom: "30%",}}>
      <Typography
        color={grey[100]}
        variant="h2"
        sx={{ zIndex: 1, width: "40%" }}
      >
        Taking care of your mind, body and soul.
      </Typography>
      <Typography
        color={grey[100]}
        variant="h4"
        sx={{  zIndex: 1, pl: "4rem", width: "40%" }}
      >
        Familiarize yourself with our studio and course offering by signing up for a complimentary
        drop-in class now.
      </Typography>
      </Box>
    </Box>
  );
};

export default Home;
