import React from "react";
import { grey } from "@mui/material/colors";
import { Box, Typography, CardMedia } from "@mui/material";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";
import Animated from "../components/Animated";

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
      <Box sx={{ display: "flex", justifyContent: "space-evenly", py: "4rem", ml: "4rem" }}>
        <CardMedia
          component="img"
          alt="Card Image"
          image={image5}
          sx={{ objectFit: "cover", width: "40%", height: "600px" }}
        />
        <Typography sx={{ width: "40%", mt: "6rem" }} variant="h5">
          Lotus Heart Yoga is a serene and transformative yoga practice led by an experienced and
          dedicated instructor. The instructor embodies a deep passion for yoga and guides students
          through a harmonious blend of postures, breathing techniques, and mindfulness, fostering a
          profound connection to the heart and soul. Under their expert guidance, participants can
          expect to discover inner peace, balance, and a profound sense of well-being during each
          class.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      
        <CardMedia component="img" alt="Card Image" image={image6} />
        </Animated>
        <Box sx={{ position: "absolute", zIndex: 1, width: "60%" }}>
        <Animated>
          <Typography color={grey[100]} variant="h3">
            "Yoga is the journey of the self, through the self, to the self."
          </Typography>
          <Typography color={grey[100]} variant="h5" sx={{ mt: "1rem" }}>
            - The Bhagavad Gita
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
