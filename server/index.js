import express from "express";
import { google } from "googleapis";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = import.meta.env.PORT || 5174; // Updated port to match the provided URL

const oauth2Client = new google.auth.OAuth2(
  import.meta.env.CLIENT_ID,
  import.meta.env.CLIENT_SECRET,
  import.meta.env.REDIRECT_URL
);

const scopes = ["https://www.googleapis.com/auth/calendar.events.readonly"];

app.get("/calendar", async (req, res) => {
  // Get the authorization code from the request.
  const code = req.query.code;

  // Exchange the authorization code for an access token.
  const tokens = await oauth2Client.getToken(code);

  // Set the access token on the OAuth2 client.
  oauth2Client.setCredentials(tokens);

  // Create a Calendar service.
  const calendar = google.calendar({ version: "v3", auth: oauth2Client });

  // Get the list of events from the user's calendar.
  const events = await calendar.events.list({
    calendarId: "primary",
  });

  // Send the list of events to the client.
  res.send(events.data.items);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
