import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { NavLink } from "@remix-run/react";
import React from "react";

export const DrawerNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  if (!isOpen) {
    return (
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 1 }}
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </IconButton>
    );
  }

  return (
    <React.Fragment>
      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemText>
                <NavLink
                  prefetch="intent"
                  style={{
                    textDecoration: "none",
                    color: "dodgerblue",
                  }}
                  to="/home"
                >
                  Acasa
                </NavLink>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText>
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
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText>
                <NavLink
                  prefetch="intent"
                  style={{
                    textDecoration: "none",
                    color: "dodgerblue",
                  }}
                  to="/about"
                >
                  Despre
                </NavLink>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
};
