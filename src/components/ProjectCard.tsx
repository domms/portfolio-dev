import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  link?: string;
  githubLink?: string;
  image?: string;
  details?: string;
  tools: string;
}

export default function ProjectCard({
  title,
  description,
  link,
  githubLink,
  image,
  details,
  tools,
}: Project) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        elevation={3}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 3,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 6,
          },
          backgroundColor: "background.paper",
          color: "text.primary",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          border: "1px solid #e0e0e0",
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {tools}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>
            View →
          </Button>
        </CardActions>
      </Card>

      {/* Modal Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent dividers>
          {image
            ? image && (
                <Box
                  component="img"
                  src={image}
                  alt={title}
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                    mb: 2,
                  }}
                />
              )
            : ""}
          <Typography variant="body1">{description}</Typography>
          <br />
          <Typography variant="body1">{details}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {link ? (
            <Button
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
            >
              View
            </Button>
          ) : githubLink ? (
            <Button
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
            >
              Visit Repo
            </Button>
          ) : (
            ""
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
