import React from "react";
import {
  Drawer,
} from "@mui/material";

const Sidebar = (props) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open
      sx={{
        width: 250,
        "& .MuiDrawer-paper": {
          width: "232px",
          background: "black",
        },
      }}
    ></Drawer>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
