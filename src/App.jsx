// import { useState } from "react";
import TourCard from "./components/TourCard";
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import { AppBar } from "@mui/material";
import SearchAppBar from "./components/AppBar";
import cities from "./data.json";
import { Typography } from "@mui/material";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      {/* <div>here</div> */}
      <SearchAppBar />
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
              key={city.id}
            >
              Top {city.name}
            </Typography>

            <Grid container spacing={5}>
              {city.tours.map((tour, index)=>(
                <TourCard tour={tour} key={index}/>
              ))}
              {/* <TourCard /> */}
              {/* <TourCard />
              <TourCard />
              <TourCard />
              <TourCard /> */}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
}

export default App;
