import React from "react";
import { Button, Stack, TextField, useMediaQuery } from "@mui/material";
import { Form, useLocation } from "@remix-run/react";
import type { Pet } from "~/server/db";
import { useTheme } from "@mui/material/styles";

type Props = {
  pet?: Pet;
};

export const DogForm: React.FC<Props> = ({ pet }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const buttonText = pet ? "Salveaza" : "Adauga";
  const location = useLocation();

  return (
    <Form style={{ width: "100%" }} method="post" action={location.pathname}>
      <Stack direction="column" alignItems="center" sx={{ padding: "2em" }}>
        <TextField
          sx={{
            width: isMobile ? "100%" : "75%",
            paddingBottom: "1.5em",
          }}
          type="text"
          name="name"
          label="Nume"
          value={pet?.name}
        />
        <TextField
          sx={{
            width: isMobile ? "100%" : "75%",
            paddingBottom: "1.5em",
          }}
          type="text"
          name="description"
          label="Descriere"
          value={pet?.description}
        />
        <TextField
          sx={{
            width: isMobile ? "100%" : "75%",
            paddingBottom: "1.5em",
          }}
          type="text"
          name="thumbnail"
          label="Imagine"
          value={pet?.thumbnail}
        />
        <TextField
          type="number"
          name="age"
          label="Varsta"
          value={pet?.age}
          sx={{
            width: isMobile ? "100%" : "75%",
            paddingBottom: "1.5em",
          }}
        />

        <TextField
          type="text"
          name="breed"
          label="Rasa"
          value={pet?.breed}
          sx={{
            width: isMobile ? "100%" : "75%",
            paddingBottom: "1.5em",
          }}
        />
        <TextField
          sx={{
            width: isMobile ? "100%" : "75%",
            paddingBottom: "1.5em",
          }}
          type="text"
          name="color"
          label="Culoare"
          value={pet?.color}
        />
        <Button type="submit" sx={{ marginTop: "1em" }} size="large">
          {buttonText}
        </Button>
      </Stack>
    </Form>
  );
};
