import { Grid } from "@mui/material";
import type {
  ActionFunction,
  HeadersFunction,
  LoaderFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import React from "react";
import { DogForm } from "~/components/dog-form";
import { isAuthorized } from "~/server/auth";
import { createDog, DogInputObject } from "~/server/db";

export const headers: HeadersFunction = () => ({
  "WWW-Authenticate": "Basic",
});

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  try {
    const parsedFormData = DogInputObject.parse(Object.fromEntries(formData));
    console.log("parsedFormData:", parsedFormData);
    const dogId = await createDog(parsedFormData);
    return redirect(`/admin/pet/${dogId}/edit`);
  } catch (e) {
    console.error(e);
    return {
      error: e,
    };
  }
};

export const loader: LoaderFunction = async ({ request, params }) => {
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

  const data = useActionData();
  if (data?.error) {
    console.log("error:", data.error);
  }

  if (!authorized) {
    return <div>Indisponibil</div>;
  }

  return (
    <Grid container spacing={2}>
      <DogForm />
    </Grid>
  );
};

export default Admin;
