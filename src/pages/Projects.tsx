import { Typography, Box, Paper } from "@mui/material";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsSection() {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        {`<Projects & Contributions />`}
      </Typography>

      <Paper
        elevation={2}
        sx={{
          p: 2,
          borderRadius: 3,
          maxHeight: 420,
          overflowY: "auto",
          backgroundColor: "background.paper",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "flex-start",
          }}
        >
          {projects.map((project) => (
            <Box
              key={project.title}
              sx={{
                width: {
                  xs: "100%", // full width on mobile
                  sm: "calc(50% - 1rem)", // two columns on small screens
                  md: "calc(33.333% - 1rem)", // three columns on medium+
                },
              }}
            >
              <ProjectCard {...project} />
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}
