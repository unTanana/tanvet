import FavoriteIcon from "@mui/icons-material/Favorite";
import { Avatar, Card, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import type { Pet } from "~/server/db";

const redirectToEdit = (petId: string) => {
  window.location.href = `/admin/pet/${petId}/edit`;
};

type Props = {
  pet: Pet;
  isAdmin?: boolean;
};

export const DogProfile: React.FC<Props> = ({ pet, isAdmin }) => {
  return (
    <Card>
      <div
        style={{
          width: "100%",
          padding: "1em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar
          alt={pet.name}
          sx={{
            width: 256,
            height: 256,
            marginBottom: "1em",
            cursor: "pointer",
          }}
          src={pet.thumbnail}
          onClick={() => {
            if (isAdmin) {
              return redirectToEdit(pet.id);
            }
            return document.getElementById(`email-link-${pet.id}`)?.click();
          }}
        />
        <Typography variant="h4">{pet.name}</Typography>
        <a
          id={`email-link-${pet.id}`}
          style={{ display: "none" }}
          href={`mailto:ciprian.tanana@gmail.com?subject=Adoptie ${pet.name}&body=Buna ziua, as dori sa adopt pe ${pet.name}`}
        >
          ciprian.tanana@gmail.com
        </a>
      </div>
      <Paper
        style={{
          padding: ".5em",
          margin: "1em",
          height: "80px",
          overflowY: "auto",
        }}
      >
        <Typography variant="body1">{pet.description}</Typography>
      </Paper>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <FavoriteIcon
          sx={{
            color: "red",
            fontSize: "3rem",
          }}
        />
        <Typography sx={{ color: "red", fontSize: "3rem" }} variant="body1">
          {pet.likes}
        </Typography>
      </Stack>
    </Card>
  );
};
