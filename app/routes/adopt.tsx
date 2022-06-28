import { Grid, Typography } from "@mui/material";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import { DogProfile } from "~/components/dog-profile";
import type { Pet } from "~/server/db";
import { getAllDogs } from "~/server/db";

export const loader: LoaderFunction = async () => {
  return getAllDogs();
};

const Adopt: React.FC = () => {
  const loaderData = useLoaderData<Pet[]>();
  console.log("loaderData:", loaderData);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          {loaderData.length} caini disponibili pentru adoptie!
        </Typography>
      </Grid>
      {loaderData.map((pet) => (
        <Grid item xs={12} md={3} lg={2} key={pet.id}>
          <DogProfile pet={pet} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Adopt;
