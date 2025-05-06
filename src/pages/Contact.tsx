import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
  Link,
} from "@mui/material";
import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>

      <Typography sx={{ mb: 2 }} color="text.secondary">
        Send me a message — I’ll respond as soon as I can. Alternatively, you
        can e-mail me personally: <Link>domsankar97@gmail.com</Link>
      </Typography>

      <form
        action="https://formspree.io/f/meoggwrw"
        method="POST"
        onSubmit={() => setSubmitted(true)}
        target="_blank"
      >
        <Stack spacing={2}>
          <TextField label="Your Name" name="name" required fullWidth />
          <TextField
            label="Your Email"
            name="email"
            type="email"
            required
            fullWidth
          />
          <TextField
            label="Your Message"
            name="message"
            required
            fullWidth
            multiline
            rows={5}
          />
          <Button type="submit" variant="contained" disabled={submitted}>
            {submitted ? "Sent!" : "Send Message"}
          </Button>
        </Stack>
      </form>

      {submitted && (
        <Alert severity="success" sx={{ mt: 2 }}>
          Your message has been sent!
        </Alert>
      )}
    </Box>
  );
}
