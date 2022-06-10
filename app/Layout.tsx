import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NavLink } from "@remix-run/react";
import React from "react";
import { DrawerNavigation } from "./components/drawer-navigation";

export const Layout: React.FC = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
          {isMobile && <DrawerNavigation />}
          <Typography variant="h5" sx={{ marginRight: "2rem" }}>
            TanVet
          </Typography>
          {!isMobile && (
            <>
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
            </>
          )}
        </Toolbar>
      </AppBar>
      {props.children}
    </div>
  );
};
