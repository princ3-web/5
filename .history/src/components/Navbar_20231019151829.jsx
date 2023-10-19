import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = ["About", "Our Instructors", "Classes", "Location", "Blog"];

  const items = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Our Instructors", link: "/ourteam" },
    { title: "Classes", link: "/clients" },
    { title: "Location", link: "/contact" },
  ];
  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "120px",
        boxSizing: "border-box",
        px: "4rem",
      }}
    >
      <Box>
        <Typography color={grey[100]} variant="h4">
          Lotus Heart Yoga
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {items.map((item) => (
          <Link>
            <Typography color={grey[100]} sx={{ mx: "0.5rem", cursor: "pointer" }}>
              {item}
            </Typography>
          </Link>
        ))}
        <Button
          sx={{
            backgroundColor: grey[500],
            borderRadius: 0,
            textTransform: "none",
            ml: "2rem",
            px: "2.25rem",
            py: "1.25rem",
            fontSize: "16px",
            ":hover": {
              bgcolor: grey[600],
            },
          }}
          variant="contained"
          color="success"
        >
          Book a class
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
