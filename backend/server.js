import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactHandler from "./contact.js"; // note relative path

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route
app.post("/api/contact", contactHandler);

// Use environment PORT if set (Vercel sets it automatically locally ignored)
const PORT = process.env.PORT || 1080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
