// import React from "react";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { AccessTime } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/theme.context";
import { ThemeProvider } from "@mui/material";
// import {ThemeProvider, createTheme } from "@mui/material";
import data from "../data.json";
console.log("data--->", data);

const TourCard = ({ tour }) => {
  // const theme = createTheme({
  //   components: {
  //     MuiTypography: {
  //       variants: [
  //         {
  //           props: {
  //             variant: "body2",
  //           },
  //           style: {
  //             fontSize: 11,
  //             // backgroundColor: "blue";
  //           },
  //         },
  //         {
  //           props: {
  //             variant: "body3",
  //           },
  //           style: {
  //             fontSize: 9,
  //             // backgroundColor: "blue";
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  const { theme } = useContext(ThemeContext);
  // const [tourData, setTourData] = useState(data[0]);
  // console.log("tourData", tourData);
  // console.log(theme);
  // console.log(tour);

  return (
    <Grid item xs={3} key={tour.id}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img
            src={
              tour.image
            }
            alt=""
            className="img"
          />
          <Box padding={1}>
            <Typography component="h2" variant="subtitle1">
              {tour.name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.duration} hours
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
              <Rating
                name="read-only"
                value={tour.rating}
                precision={0.5}
                size={"small"}
                readOnly
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.rating}
              </Typography>{" "}
              <Typography variant="body2" component="p" marginLeft={1.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" marginTop={0}>
                From C ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
