import { Box } from "@mui/material";
import * as React from "react";
import Workbench from "./Workbench";

export default function Dashboard() {
  return (
    <Box sx={{ background: "grey" }}>
      <Workbench />
    </Box>
  );
}
