import React from "react";
import image1 from "../assets/images/1.jpg";
import { Box, CardMedia } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <CardMedia
        component="img"
        alt="Card Image"
        image={image1} 
      />
    </Box>
  );
};

export default Home;
