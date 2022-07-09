import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Contact: React.FC = () => {
  return (
    <Stack
      sx={{
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h1">Contact</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "1em",
          marginTop: "1em",
        }}
      >
        <Typography sx={{ marginRight: ".5em" }} variant="h6">
          Email
          <a
            style={{
              textDecoration: "none",
              color: "dodgerblue",
              marginLeft: ".5em",
            }}
            href={`mailto:ciprian.tanana@gmail.com?subject=Programare &body=Buna ziua, as dori o programare pentru urmatoarea problema:`}
          >
            ciprian.tanana@gmail.com
          </a>
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ marginRight: ".5em" }} variant="h6">
          Telefon
          <a
            style={{
              textDecoration: "none",
              color: "dodgerblue",
              marginLeft: ".5em",
            }}
            href="tel:+40 722 888 888"
          >
            +40 722 888 888
          </a>
        </Typography>
      </Grid>
    </Stack>
  );
};

export default Contact;
