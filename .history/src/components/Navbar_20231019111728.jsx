import React from "react";
import { Box, Typography } from "@mui/material";

const Navbar = () => {
  const items = ["About", "Our Instructors", "Classes", "Location", "Blog"];
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <Typography variant="h5">Colima</Typography>
      </Box>
      <Box sx={{ display: "flex", aligni }}>
        {items.map(item => <Typography sx={{mx:"0.5rem"}}>{item}</Typography>)}
      </Box>
    </Box>
  );
};

export default Navbar;
