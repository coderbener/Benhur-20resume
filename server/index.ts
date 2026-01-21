import express from "express";
import { createServer as createViteServer } from "vite";
import { handleContact } from "./routes/contact"; // Import your contact function

async function createServer() {
  const app = express();
  
  // 1. IMPORTANT: Allow the server to read JSON bodies
  app.use(express.json());

  // 2. IMPORTANT: Register the API Route BEFORE Vite
  // This tells the server: "If the URL is /api/contact, run the email code"
  app.post("/api/contact", handleContact);

  // 3. Setup Vite (Middleware)
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.listen(8080, () => {
    console.log("Server running at http://localhost:8080");
  });
}

createServer();
