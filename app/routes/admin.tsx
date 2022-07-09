import { Grid } from "@mui/material";
import type { HeadersFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
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

  return json({
    authorized: true,
  });
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
      <Grid item xs={12}>
        <Link to="/admin/pets">Caini</Link>
      </Grid>
    </Grid>
  );
};

export default Admin;
