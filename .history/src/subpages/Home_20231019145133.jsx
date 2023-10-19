import React from "react";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import { Box, Card, CardMedia, Typography, Button } from "@mui/material";
import { grey } from "@mui/material/colors";

const Home = () => {
  return (
    <Box>
      <Box>
        <CardMedia component="img" alt="Card Image" image={image1} />
        <Box sx={{ position: "absolute", top: "55vh", pl: "4rem" }}>
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
      <Box sx={{ backgroundColor: grey[800], p: "4rem", boxSizing: "border-box" }}>
        <Typography color={grey[100]} variant="h3" sx={{ pb: "1rem" }}>
          Upcoming classes
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{ display: "flex", width: "49%", justifyContent: "center", alignItems: "center" }}
          >
            <CardMedia component="img" alt="Card Image" image={image2} />
            <Typography variant="h4" color={grey[100]} sx={{ position: "absolute", zIndex: "1" }}>
              Yoga Aerobics
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", width: "49%", justifyContent: "center", alignItems: "center" }}
          >
            <CardMedia component="img" alt="Card Image" image={image3} />
            <Typography variant="h4" color={grey[100]} sx={{ position: "absolute", zIndex: "1" }}>
              Instructor Training
            </Typography>
          </Box>
        </Box>
        <Typography color={grey[100]} variant="h5" sx={{ pt: "2rem", width: "50%" }}>
          Besides our regular schedule, we also frequently host visiting teachers and speakers.
        </Typography>
        <Button
          sx={{
            backgroundColor: grey[500],
            borderRadius: 0,
            textTransform: "none",
            mt: "4rem",
            px: "4.25rem",
            py: "1.25rem",
            fontSize: "16px",
            ":hover": {
              bgcolor: grey[600],
            },
          }}
          variant="contained"
          color="success"
        >
          View more
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: grey[500],
          p: "4rem",
          boxSizing: "border-box",
          height: "300px",
        }}
      >
        <Box sx={{ width: "70%" }}>
          <Typography color={grey[100]} variant="h4">
            With an emphasis on breathing techniques and meditation, we promote thoughtful and
            reflexive yoga to promote both physical and mental well-being.
          </Typography>
        </Box>
        <Box sx={{ width: "20%" }}>
          <Typography color={grey[100]}>
            Learn more about our studio and philosophy around yoga.
          </Typography>
          <Button
            sx={{
              backgroundColor: grey[100],
              color: grey[800],
              borderRadius: 0,
              textTransform: "none",
              mt: "1rem",
              px: "4.25rem",
              py: "1.25rem",
              fontSize: "16px",
              ":hover": {
                bgcolor: grey[300],
              },
            }}
            variant="contained"
            color="success"
          >
            View more
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia component="img" alt="Card Image" image={image4} />
        <Box
          sx={{
            position: "absolute",
            zIndex: 1,
            justifyContent: "center",
          }}
        >
          <Typography color={grey[100]} textAlign={"center"} variant="h4">
            Subscribe to Our Newsletter
          </Typography>
          <Typography color={grey[100]} textAlign={"center"} variant="h6">
            Sign up to receive news and updates.
          </Typography>
          <Button
            sx={{
              backgroundColor: grey[400],
              color: grey[100],
              borderRadius: 0,
              textTransform: "none",
              mt: "1rem",
              px: "4.25rem",
              py: "1.25rem",
              fontSize: "16px",
              ":hover": {
                bgcolor: grey[500],
              },
              left: "50%",
              transform: "translate(-50%, 0%)",
            }}
            variant="contained"
            color="success"
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
