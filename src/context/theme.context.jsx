import React, { createContext } from "react";
import { createTheme } from "@mui/material";

const ThemeContext = createContext();

const TheThemeProvider = ({ children }) => {
  const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "body2",
            },
            style: {
              fontSize: 11,
              // backgroundColor: "blue";
            },
          },
          {
            props: {
              variant: "body3",
            },
            style: {
              fontSize: 9,
              // backgroundColor: "blue";
            },
          },
        ],
      },
    },
  });
  return (
    <ThemeContext.Provider value={{theme}}>
        {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext, TheThemeProvider};
