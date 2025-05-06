import {
  CssBaseline,
  LinearProgress,
  Box,
  Container,
  Divider,
} from "@mui/material";
import Sidebar from "./components/Sidebar";
import HomeSection from "./pages/Home";
import SkillsFocus from "./pages/SkillsFocusSection";
import ProjectsSection from "./pages/Projects";
import ContactSection from "./pages/Contact";
import { useEffect, useState } from "react";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      const scrolled = el.scrollTop;
      setScrollProgress((scrolled / total) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <CssBaseline />
      <LinearProgress
        variant="determinate"
        value={scrollProgress}
        sx={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "4px",
          width: "100%",
          zIndex: 20,
          backgroundColor: "transparent",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#4fd1c5",
          },
        }}
      />
      <Sidebar />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "background.default",
          backgroundImage: "../public/assets/background.png",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          backgroundAttachment: "fixed",
          marginLeft: { xs: 0, md: "280px" },
          px: 4,
          py: 6,
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          scrollBehavior: "auto",
        }}
      >
        <Container maxWidth="md">
          <Box id="home" sx={{ scrollSnapAlign: "start" }}>
            <HomeSection />
          </Box>
          <Divider />
          <Box id="projects" sx={{ scrollSnapAlign: "start" }}>
            <ProjectsSection />
          </Box>
          <Divider />
          <Box id="skills" sx={{ scrollSnapAlign: "start" }}>
            <SkillsFocus />
          </Box>
          <Divider />
          <Box id="contact" sx={{ scrollSnapAlign: "start" }}>
            <ContactSection />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default App;
