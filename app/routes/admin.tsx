import { Grid, Typography } from "@mui/material";
import type { HeadersFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import React from "react";
import { isAuthorized } from "~/server/auth";

export const headers: HeadersFunction = () => ({
  "WWW-Authenticate": "Basic",
});

export const loader: LoaderFunction = async ({ request }) => {
  if (!isAuthorized(request)) {
    return json({ authorized: false }, { status: 401 });
  }

  return redirect("/admin/pets");
};

const Admin: React.FC = () => {
  const { authorized } = useLoaderData<{
    authorized: boolean;
  }>();

  if (!authorized) {
    return <div>Indisponibil</div>;
  }

  return (
    <Grid container spacing={2}>
      <Typography variant="h3">
        <Link to="/admin/pets">Caini</Link>
      </Typography>
    </Grid>
  );
};

export default Admin;
