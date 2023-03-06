
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useMemo } from "react";
import PropTypes from "prop-types";

const ThemeConfig = ({ children }) => {
  const themeOptions = useMemo(
    () => ({}),

    []
  );

  const theme = createTheme(themeOptions);

  return (
 
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* <GlobalStyles /> */}

        {children}
      </ThemeProvider>
  
  );
};

ThemeConfig.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeConfig;
