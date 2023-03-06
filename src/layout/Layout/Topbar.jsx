import * as React from "react";
import { AppBar, Box, Toolbar} from "@mui/material";


function Topbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          boxShadow: "inset 0px -1px 0px #E5E5EA",
          width: `calc(100% - 232px)`,
          height: "62px",
          background: "black",
        }}
      >
        <Toolbar></Toolbar>
      </AppBar>
    </Box>
  );
}

Topbar.propTypes = {};
export default Topbar;
