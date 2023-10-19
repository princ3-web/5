import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { grey } from "@mui/material/colors";

const Navbar = () => {
  const items = ["About", "Our Instructors", "Classes", "Location", "Blog"];
  return (
    <Box
      sx={{
        position:"absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "100px",
        boxSizing: "border-box",
        px: "3rem",
      }}
    >
      <Box>
        <Typography variant="h5">Colima</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {items.map((item) => (
          <Typography sx={{ mx: "0.5rem" }}>{item}</Typography>
        ))}
        <Button
          sx={{
            p: "1rem",
            backgroundColor: grey[500],
            borderRadius: 0,
            textTransform: "none",
            ml: "2rem",
            px: "2rem"
          }}
          variant="contained"
        >
          Book a class
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
