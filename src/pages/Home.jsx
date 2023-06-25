// import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TourCard from "../components/TourCard";

import cities from "../data.json";
import { Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  return (
    <div>
    {/* <div>here</div> */}
 
    <Container sx={{ marginY: 5 }}>
      {cities.map((city) => {
        const id = uuidv4();
        return (
          <div key={id}>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
              // key={id}
            >
              Top {city.name}
            </Typography>

            <Grid container spacing={5}>
              {city.tours.map((tour) => {
                const id2 = uuidv4()
                return(
                <TourCard tour={tour} key={id2} />)
      })}
             
            </Grid>
          </div>
        );
      })}
    </Container>
  </div>
  )
}

export default Home