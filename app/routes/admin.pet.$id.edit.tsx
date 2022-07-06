import { Grid } from "@mui/material";
import type { HeadersFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import { DogProfile } from "~/components/dog-profile";
import { isAuthorized } from "~/server/auth";
import type { Pet } from "~/server/db";
import { getDogById } from "~/server/db";

export const headers: HeadersFunction = () => ({
  "WWW-Authenticate": "Basic",
});

export const loader: LoaderFunction = async ({ request, params }) => {
  if (!isAuthorized(request)) {
    return json({ authorized: false }, { status: 401 });
  }

  const { id } = params;

  if (id) {
    return json({
      authorized: true,
      pet: await getDogById(id),
    });
  }

  return json({
    authorized: true,
    pet: null,
  });
};

const Admin: React.FC = () => {
  const { pet, authorized } = useLoaderData<{
    authorized: boolean;
    pet: Pet | null;
  }>();

  if (!authorized) {
    return <div>Indisponibil</div>;
  }

  if (!pet) {
    return <div>Error pet not found</div>;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <DogProfile pet={pet} isAdmin />
      </Grid>
    </Grid>
  );
};

export default Admin;
