import type { ReactNode } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>
          <MuiLink
            component={Link}
            to="/"
            sx={{ mr: 2 }}
            color="inherit"
            underline="hover"
          >
            Home
          </MuiLink>
          <MuiLink
            component={Link}
            to="/skills"
            sx={{ mr: 2 }}
            color="inherit"
            underline="hover"
          >
            Skills
          </MuiLink>
          <MuiLink
            component={Link}
            to="/contact"
            color="inherit"
            underline="hover"
          >
            Contact
          </MuiLink>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ py: 4 }}>
        {children}
      </Container>
      <footer style={{ textAlign: "center", padding: "1rem", color: "#aaa" }}>
        © {new Date().getFullYear()} Your Name
      </footer>
    </>
  );
}
