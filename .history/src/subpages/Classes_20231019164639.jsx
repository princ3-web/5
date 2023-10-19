import React from "react";
import { grey } from "@mui/material/colors";
import { Box, Typography, CardMedia } from "@mui/material";
import image1 from "../assets/images/9.jpg";
import image2 from "../assets/images/10.jpg";
import image3 from "../assets/images/11.jpg";

const Classes = () => {
  return (
    <Box>
      <Box sx={{ position: "relative", backgroundColor: grey[800], height: "400px", zIndex: -1 }}>
        <Typography
          color={grey[100]}
          variant="h2"
          sx={{ position: "absolute", bottom: "100px", ml: "4rem" }}
        >
          Classes
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-evenly", py: "4rem", ml: "4rem" }}>
        <CardMedia
          component="img"
          alt="Card Image"
          image={image1}
          sx={{ objectFit: "cover", width: "40%", height: "600px" }}
        />
           <Box sx={{ width: "40%" }}>
          <Typography sx={{ mt: "6rem" }} variant="h5">
            Christoph Weber
          </Typography>
          <Typography sx={{ mt: "1rem" }} variant="h6" color={grey[700]}>
            Dedicated and experienced yoga instructor who brings a strong emphasis on alignment and
            mindfulness to his classes. His teaching style combines traditional yoga practices with
            a modern approach, creating a space where students can deepen their mind-body connection
            and achieve a profound sense of inner peace and well-being.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", py: "4rem", ml: "4rem" }}>
        <Typography sx={{ width: "40%", mt: "6rem" }} variant="h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam.{" "}
        </Typography>
        <CardMedia
          component="img"
          alt="Card Image"
          image={image2}
          sx={{ objectFit: "cover", width: "40%", height: "600px" }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", py: "4rem", ml: "4rem" }}>
        <CardMedia
          component="img"
          alt="Card Image"
          image={image3}
          sx={{ objectFit: "cover", width: "40%", height: "600px" }}
        />
        <Typography sx={{ width: "40%", mt: "6rem" }} variant="h6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam.{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default Classes;
