import React from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the world in vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex", alignItems: "center" }}>
        <img
          src={
            "https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzaW5vfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
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

      <Box></Box>
    </Container>
  );
};

export default Tour;
