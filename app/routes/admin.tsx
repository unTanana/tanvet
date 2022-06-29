import { Grid } from "@mui/material";
import type { HeadersFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import { DogProfile } from "~/components/dog-profile";
import { isAuthorized } from "~/server/auth";
import type { Pet } from "~/server/db";
import { getAllDogs } from "~/server/db";

export const headers: HeadersFunction = () => ({
  "WWW-Authenticate": "Basic",
});

export const loader: LoaderFunction = async ({ request }) => {
  if (!isAuthorized(request)) {
    return json({ authorized: false }, { status: 401 });
  }

  return json({
    authorized: true,
    pets: await getAllDogs(),
  });
};

const Admin: React.FC = () => {
  const { pets, authorized } = useLoaderData<{
    authorized: boolean;
    pets: Pet[];
  }>();

  if (!authorized) {
    return <div>Indisponibil</div>;
  }

  return (
    <Grid container spacing={2}>
      {pets.map((pet) => (
        <Grid item xs={12} md={4} lg={3} key={pet.id}>
          <DogProfile pet={pet} isAdmin />
        </Grid>
      ))}
    </Grid>
  );
};

export default Admin;
