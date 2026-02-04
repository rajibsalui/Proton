import express from "express";
import { connectDB } from "./config/database";
import { env } from "./config/env";
import routes from "./routes";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/api", routes); // example: /api/users

// Error Handler
app.use(errorHandler);

async function startServer() {
  await connectDB();

  app.listen(env.PORT, () => {
    console.log(`Server running on port ${env.PORT}`);
  });
}

startServer();
