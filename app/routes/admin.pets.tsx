import { Button, Grid, Typography, useTheme } from "@mui/material";
import type { HeadersFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { NavLink, useLoaderData } from "@remix-run/react";
import React from "react";
import { DogProfile } from "~/components/dog-profile";
import { isAuthorized } from "~/server/auth";
import type { Pet } from "~/server/db";
import { getAllDogs } from "~/server/db";

export const headers: HeadersFunction = () => ({
  "WWW-Authenticate": "Basic",
});

export const loader: LoaderFunction = async ({ request, params }) => {
  if (!isAuthorized(request)) {
    return json({ authorized: false, pets: [] }, { status: 401 });
  }

  return json({
    authorized: true,
    pets: await getAllDogs(),
  });
};

const Admin: React.FC = () => {
  const theme = useTheme();

  const { pets, authorized } = useLoaderData<{
    authorized: boolean;
    pets: Pet[];
  }>();

  if (!authorized) {
    return <div>Indisponibil</div>;
  }

  return (
    <Grid container spacing={2}>
      <Grid sx={{ display: "flex", justifyContent: "center" }} item xs={12}>
        <Button sx={{ fontSize: "2em" }} size="large" type="button">
          <NavLink
            style={{
              textDecoration: "none",
              color: theme.palette.primary.light,
            }}
            to="/admin/pet/create"
          >
            Adauga Caine
          </NavLink>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          {pets.length} caini disponibili pentru adoptie!
        </Typography>
      </Grid>
      {pets.map((pet) => (
        <Grid item xs={12} md={4} lg={3} key={pet.id}>
          <DogProfile pet={pet} isAdmin />
        </Grid>
      ))}
    </Grid>
  );
};

export default Admin;
