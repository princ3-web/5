import React from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Subbar = () => {
  const companyName = "Lotus Heart Yoga";

  return (
    <Box
      sx={{
        backgroundColor: grey[100],
        boxSizing: "border-box",
        height: "350px",
        px: "70px",
        py: "70px",
      }}
    >
      <Typography variant="h3" sx={{ mb: "1rem" }}>
        {companyName}
      </Typography>
      <Box sx={{ mb: "1rem" }}>
        <Typography>15 Rottannenweg</Typography>
        <Typography>Stuttgard, Germany</Typography>
      </Box>
      <Box>
        <Typography>+46 e</Typography>
        <Typography>lotusheartyoga@gmail.com</Typography>
      </Box>
    </Box>
  );
};

export default Subbar;
