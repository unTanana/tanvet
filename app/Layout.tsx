import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "@remix-run/react";
import React from "react";
import { Header } from "./components/header";

export const Layout: React.FC = (props) => {
  return (
    <div>
      <AppBar
        sx={{
          paddingHorizontal: "1rem",
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "dodgerblue",
        }}
        position="static"
      >
        <Toolbar>
          <Header />
          <Typography variant="h5" sx={{ marginRight: "2rem" }}>
            TanVet
          </Typography>
          <div
            id="nav"
            style={{
              flexGrow: 1,
            }}
          >
            <NavLink
              prefetch="intent"
              style={{
                textDecoration: "none",
                marginRight: "1rem",
                color: "dodgerblue",
              }}
              to="/home"
            >
              ACASA
            </NavLink>
            <NavLink
              prefetch="intent"
              to="/about"
              style={{
                textDecoration: "none",
                color: "dodgerblue",
              }}
            >
              DESPRE
            </NavLink>
          </div>
          <Button>
            <NavLink
              prefetch="intent"
              style={{
                textDecoration: "none",
                color: "dodgerblue",
              }}
              to="/adopt"
            >
              Adopta
            </NavLink>
          </Button>
          <Button color="inherit">Programeaza</Button>
        </Toolbar>
      </AppBar>
      {props.children}
    </div>
  );
};
