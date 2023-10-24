import React from "react";
import { grey } from "@mui/material/colors";
import { Box, Typography, CardMedia } from "@mui/material";
import image1 from "../assets/images/7.jpg";
import image2 from "../assets/images/8.jpg";
import Animated from "../components/Animated";

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
      <Animated>

      <Box sx={{ display: "flex", justifyContent: "space-evenly", py: "4rem", ml: "4rem" }}>
        <CardMedia
          component="img"
          alt="Card Image"
          image={image2}
          sx={{ objectFit: "cover", width: "35%", height: "650px" }}
        />
        
        <Box sx={{ width: "40%" }}>
          <Typography sx={{ mt: "6rem" }} variant="h5">
            Anna Müller
          </Typography>
          <Typography sx={{ mt: "1rem" }} variant="h6" color={grey[700]}>
            Highly skilled and compassionate yoga instructor, known for her ability to create a
            welcoming and calming atmosphere in her classes. With years of experience and a deep
            understanding of yoga philosophy, she empowers her students to find physical and mental
            balance on their personal wellness journeys.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", py: "4rem", ml: "4rem" }}>
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
        <CardMedia
          component="img"
          alt="Card Image"
          image={image1}
          sx={{ objectFit: "cover", width: "35%", height: "650px" }}
        />
      </Box>
    </Box>
  );
};

export default Instructors;
