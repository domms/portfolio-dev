import { Typography, Box } from "@mui/material";

export default function HomeSection() {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom>
        {`<Hello! />`}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        I’m a full-stack developer with a strong focus on scalable web
        applications, clean design systems, and user-centered functionality. I
        specialize in TypeScript, React, and Node.js, and frequently work with
        Firebase and Google Cloud to build fast, reliable, cloud-native
        solutions. I'm particularly passionate about integrating artificial
        intelligence into real-world products — creating smart, task-focused
        tools that improve user experience and efficiency.
      </Typography>
    </Box>
  );
}
