import React, { createContext, useState } from "react";
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
  const [tourName, setTourName] = useState("");
  return (
    <ThemeContext.Provider value={{ theme, tourName, setTourName }}>
      {children}</ThemeContext.Provider>
  );
};

export { ThemeContext, TheThemeProvider };
