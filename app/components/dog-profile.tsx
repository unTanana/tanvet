import FavoriteIcon from "@mui/icons-material/Favorite";
import { Avatar, Card, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import type { Pet } from "~/server/db";

type Props = {
  pet: Pet;
  isAdmin?: boolean;
};

export const DogProfile: React.FC<Props> = ({ pet }) => {
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
            console.log("clicked - ", pet.name);
          }}
        />
        <Typography variant="h4">{pet.name}</Typography>
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
