import { Box, Typography, Chip, Stack, Divider } from "@mui/material";

const skills = [
  "React",
  "Angular",
  "TypeScript",
  "Next.js",
  "Google Cloud",
  "Firebase",
  "Node.js",
  "GraphQL",
  "Shopify API",
  "Material UI",
  "Tailwind CSS",
  "SQL",
  "Artificial Inteligence",
];

const focusAreas = [
  "Building responsive and accessible UI",
  "Integrating APIs and cloud platforms",
  "Optimizing for performance and scalability",
  "Designing with clean architecture principles",
  "Automating workflows and developer tooling",
];

export default function SkillsFocusSection() {
  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h4" gutterBottom>
        {`Skills & Focus`}
      </Typography>

      {/* Skills */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        My favorite tools:
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            variant="outlined"
            sx={{
              mb: 1,
              borderColor: "#e0e0e0",
              fontWeight: 500,
            }}
          />
        ))}
      </Stack>

      <Divider sx={{ my: 4 }} />

      {/* Focus Areas */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Focus Areas:
      </Typography>
      <Stack spacing={1}>
        {focusAreas.map((focus) => (
          <Typography key={focus} variant="body1" color="text.secondary">
            • {focus}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}
