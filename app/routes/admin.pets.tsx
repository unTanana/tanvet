import { Button, Grid, Typography } from "@mui/material";
import type {
  ActionFunction,
  HeadersFunction,
  LoaderFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import React from "react";
import { DogProfile } from "~/components/dog-profile";
import { isAuthorized } from "~/server/auth";
import type { Pet } from "~/server/db";
import { createDog } from "~/server/db";
import { getAllDogs } from "~/server/db";

export const headers: HeadersFunction = () => ({
  "WWW-Authenticate": "Basic",
});

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  console.log("formData:", formData);
  createDog({
    age: 1,
    breed: "Ciobanesc",
    name: "El Cioba",
    color: "negru",
    likes: 3,
    thumbnail: "https://i.imgur.com/qQqQqQq.jpg",
    description: "Ciobanesc nebunesc",
  });
  return null;
};

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
  const { pets, authorized } = useLoaderData<{
    authorized: boolean;
    pets: Pet[];
  }>();

  if (!authorized) {
    return <div>Indisponibil</div>;
  }

  return (
    <Grid container spacing={2}>
      <Form method="post" replace>
        <Button size="large" color="secondary" type="submit">
          Adauga Caine
        </Button>
      </Form>
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
