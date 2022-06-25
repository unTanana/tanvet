import { Grid, Typography } from "@mui/material";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import { getAllDogs } from "~/server/db";

export const loader: LoaderFunction = async () => {
  return getAllDogs();
};

const Adopt: React.FC = () => {
  const loaderData = useLoaderData();
  console.log("loaderData:", loaderData);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">
          {loaderData.length} caini disponibili pentru adoptie!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Adopt;
