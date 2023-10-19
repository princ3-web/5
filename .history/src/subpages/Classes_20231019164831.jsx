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
            Individual yoga classes
          </Typography>
          <Typography sx={{ mt: "1rem" }} variant="h6" color={grey[700]}>
            Individual yoga classes provide personalized instruction and tailored practices to meet
            the unique needs and goals of each student, offering a deeper and more focused yoga
            experience.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", py: "4rem", ml: "4rem" }}>
        <Box sx={{ width: "40%" }}>
          <Typography sx={{ mt: "6rem" }} variant="h5">
          Yoga aerobic classes
          </Typography>
          <Typography sx={{ mt: "1rem" }} variant="h6" color={grey[700]}>
            Blend the flowing movements and intensity of aerobic exercises with
            the mindfulness and breathing techniques of yoga, promoting both physical fitness and
            stress reduction in a single dynamic workout.
          </Typography>
        </Box>
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
        <Box sx={{ width: "40%" }}>
          <Typography sx={{ mt: "6rem" }} variant="h5">
            Christoph Weber
          </Typography>
          <Typography sx={{ mt: "1rem" }} variant="h6" color={grey[700]}>
          Outdoor yoga offers the opportunity to practice yoga in natural settings, harnessing the tranquility of the outdoors to enhance the mind-body connection and create a refreshing and rejuvenating experience.





          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Classes;
