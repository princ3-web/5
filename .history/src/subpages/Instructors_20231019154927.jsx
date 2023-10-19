import React from "react";
import { grey } from "@mui/material/colors";
import { Box, Typography, CardMedia } from "@mui/material";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";

const Instructors = () => {
  return (
    <Box>
      <Box sx={{ position: "relative", backgroundColor: grey[800], height: "400px", zIndex: -1 }}>
        <Typography
          color={grey[100]}
          variant="h2"
          sx={{ position: "absolute", bottom: "100px", ml: "4rem" }}
        >
          Instructors
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-evenly", py: "4rem", ml: "4rem" }}>
        <CardMedia
          component="img"
          alt="Card Image"
          image={image5}
          sx={{ objectFit: "cover", width: "40%", height: "600px" }}
        />
        <Typography sx={{ width: "40%", mt: "6rem" }} variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam.{" "}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", py: "4rem", ml: "4rem" }}>
       
        <Typography sx={{ width: "40%", mt: "6rem" }} variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam.{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default Instructors;
