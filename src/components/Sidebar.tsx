import {
  Box,
  Avatar,
  Typography,
  Button,
  Stack,
  IconButton,
  Drawer,
  Divider,
  Slide,
  Fade,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { alpha, useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const scrollTo = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Sidebar() {
  const [loaded, setLoaded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const NavLinks = () => (
    <Stack spacing={1} sx={{ width: "100%" }}>
      {["home", "projects", "skills", "contact"].map((id) => (
        <Button
          key={id}
          onClick={() => {
            scrollTo(id);
            setMobileOpen(false);
          }}
          sx={{
            textTransform: "none",
            justifyContent: "flex-start",
            px: 1,
            color: "text.primary",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: alpha(theme.palette.primary.main, 0.08),
            },
          }}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </Button>
      ))}
    </Stack>
  );

  return (
    <>
      {/* Mobile Hamburger Button */}
      {isMobile && (
        <IconButton
          onClick={toggleMobile}
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1201,
            color: "white",
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleMobile}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 240,
            bgcolor: alpha(theme.palette.background.paper, 0.95),
            backdropFilter: "blur(12px)",
            borderRight: "1px solid rgba(255, 255, 255, 0.05)",
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar src="/assets/IMG_5366.png" sx={{ width: 80, height: 80 }} />
          <Typography variant="h6">Dominic Sankar</Typography>
          <Divider sx={{ width: "100%", my: 2 }} />
          <NavLinks />
        </Box>
      </Drawer>

      {/* Desktop Sidebar */}
      <Slide direction="right" in={loaded} timeout={600}>
        <Fade in={loaded} timeout={600}>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              width: 250,
              position: "fixed",
              top: "25%",
              bottom: "25%",
              left: 20,
              transform: "translateY(-50%)",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: alpha(theme.palette.background.paper, 0.07),
              backdropFilter: "blur(14px)",
              borderRadius: 3,
              boxShadow: 15,
              p: 3,
              backgroundColor: "background.paper",
              color: "text.primary",
              border: "1px solid #e0e0e0",
              borderColor: alpha(theme.palette.divider, 0.06),
              zIndex: 10,
              gap: 3,
            }}
          >
            <Avatar
              alt="Dominic Sankar"
              src="/assets/IMG_5366.png"
              sx={{
                width: 150,
                height: 150,
                border: "2px solid",
                borderColor: alpha(theme.palette.primary.main, 0.2),
              }}
            />
            <Typography variant="h6" sx={{ mt: 1 }}>
              Dominic Sankar
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              Full-stack dev who loves clean code.
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Button
                href="https://github.com/domms"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHubIcon />}
                sx={{
                  textTransform: "none",
                  fontSize: "0.875rem",
                  color: "text.primary",
                  "&:hover": {
                    backgroundColor: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                Github
              </Button>
            </Box>
            <NavLinks />
          </Box>
        </Fade>
      </Slide>
    </>
  );
}
