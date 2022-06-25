import { Box, Typography } from "@mui/material";
import React from "react";
import type { Pet } from "~/server/db";

export const DogProfile: React.FC<Pet> = (pet) => {
  return (
    <Box>
      <Typography>{pet.name}</Typography>
    </Box>
  );
};
