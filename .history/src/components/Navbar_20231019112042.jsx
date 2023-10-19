import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Navbar = () => {
  const items = ["About", "Our Instructors", "Classes", "Location", "Blog"];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        mx: "3rem",
        height: "100px"
      }}
    >
      <Box>
        <Typography variant="h5">Colima</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {items.map((item) => (
          <Typography sx={{ mx: "0.5rem" }}>{item}</Typography>
        ))}
      </Box>
      <Button sx={{p: "1rem", backgroundCo}} variant="contained">Book a class</Button>
    </Box>
  );
};

export default Navbar;
