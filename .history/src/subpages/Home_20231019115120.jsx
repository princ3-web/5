import React from "react";
import image1 from "../assets/images/1.jpg";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Home = () => {
  return (
    <Box>
      <Box sx={{height:" "}}>
        <CardMedia component="img" alt="Card Image" image={image1} />
        <Box sx={{ position: "absolute", top: "47%", pl: "4rem" }}>
          <Typography color={grey[100]} variant="h2" sx={{ zIndex: 1, width: "50%" }}>
            Taking care of your mind, body and soul.
          </Typography>
          <Typography color={grey[100]} variant="h5" sx={{ zIndex: 1, width: "50%", mt: "2rem" }}>
            Familiarize yourself with our studio and course offering by signing up for a
            complimentary drop-in class now.
          </Typography>
          <Typography
            color={grey[400]}
            variant="h5"
            sx={{
              zIndex: 1,
              width: "50%",
              mt: "1rem",
              textDecoration: "underline",
              textUnderlineOffset: "5px",
              cursor: "pointer",
            }}
          >
            Book a class
          </Typography>
        </Box>
      </Box>
      <Box sx={{backgroundColor: grey[800]}}>
          <Typography>Upcoming classes</Typography>
          <CardMedia component="img" alt="Card Image" image={image1} />
          <CardMedia component="img" alt="Card Image" image={image1} />
      </Box>
    </Box>
  );
};

export default Home;
