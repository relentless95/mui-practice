import React, { useContext } from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BasicModal from "../components/Modal";
import { useParams } from "react-router-dom";
import data from "../data.json";
import { ThemeContext } from "../context/theme.context";
// import BottomNavigationAction from "@mui/material";
// import BottomNavigation from "@mui/material";
// import { RestoreIcon, FavoriteIcon, ArchiveIcon } from "@mui/icons-material";

const Tour = () => {
  const { theme, tourName, setTourName } = useContext(ThemeContext);

  const { tourId } = useParams();
  console.log("the tour name---->", tourName);

  const findTour = () => {
    const specific = data[0]["tours"].find((item) => item.name === tourName);

    if (parseInt(tourId) < 5 && specific) {
      switch (parseInt(tourId)) {
        case 1:
          console.log(data[0]["tours"][0]);
          return data[0]["tours"][0];
          break;
        case 2:
          return data[0]["tours"][1];
          break;
        case 3:
          return data[0]["tours"][2];
          break;
        case 4:
          return data[0]["tours"][3];
          break;
      }
    } else {
      console.log("here2");

      switch (parseInt(tourId)) {
        case 4:
          return data[1]["tours"][0];
          break;
        case 5:
          return data[1]["tours"][1];
          break;
        case 6:
          return data[1]["tours"][2];
          break;
        case 7:
          return data[1]["tours"][3];
          break;
      }
    }
  };
  const info = findTour();

  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        {info.name}
      </Typography>
      <Box marginTop={3} sx={{ display: "flex", alignItems: "center" }}>
        <img
          src={
            // "https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzaW5vfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            info.image
          }
          alt=""
          height={325}
          width={400}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          architecto, debitis doloremque consequuntur accusantium qui cum eum,
          quibusdam recusandae labore commodi. Expedita accusantium distinctio
          vero modi optio corrupti et? Perferendis! Facilis saepe impedit
          expedita, dolor optio voluptates, quam non enim ducimus ipsam tempora
          ex neque dicta temporibus aut tempore aliquid a libero autem animi id
          eveniet soluta? Distinctio, cumque possimus?
        </Typography>
      </Box>

      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
