import React from "react";
import { grey } from "@mui/material/colors";
import { Box, Typography, CardMedia } from "@mui/material";
import image1 from "../assets/images/12
const Location = () => {
  return (
    <Box>
      <Box sx={{ position: "relative", backgroundColor: grey[800], height: "400px", zIndex: -1 }}>
        <Typography
          color={grey[100]}
          variant="h2"
          sx={{ position: "absolute", bottom: "100px", ml: "4rem" }}
        >
          Location
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-evenly", py: "4rem", ml: "4rem" }}>
        <Box sx={{ width: "40%" }}>
          <Typography sx={{ mt: "6rem" }} variant="h5">
            15 Rottannenweg, Stuttgard, Germany
          </Typography>
          <Typography sx={{ mt: "1rem" }} variant="h6" color={grey[700]}>
            Our yoga classes in Stuttgart, Germany, are held at 15 Rottannenweg, providing a serene
            and accessible location for mindful practice.
          </Typography>
        </Box>
        <CardMedia
          component="img"
          alt="Card Image"
          image={image5}
          sx={{ objectFit: "cover", width: "40%", height: "600px" }}
        />
      </Box>
    </Box>
  );
};

export default Location;
