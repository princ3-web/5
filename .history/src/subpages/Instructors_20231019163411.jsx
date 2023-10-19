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
        <Box sx={{"40%"}}>
          <Typography sx={{ width:  mt: "6rem" }} variant="h5">
            Anna Müller
          </Typography>
          <Typography sx={{ width: "40%", mt: "1rem" }} variant="h5">
            Highly skilled and compassionate yoga instructor, known for her ability
            to create a welcoming and calming atmosphere in her classes. With years of experience
            and a deep understanding of yoga philosophy, she empowers her students to find physical
            and mental balance on their personal wellness journeys.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", py: "4rem", ml: "4rem" }}>
        <Box>
          <Typography sx={{ mt: "6rem" }} variant="h5">
            Christoph Weber
          </Typography>
          <Typography sx={{ mt: "1rem" }} variant="h5">
            Christoph Weber
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

export default Instructors;
