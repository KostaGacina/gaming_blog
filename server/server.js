import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import reviewRoutes from "./routes/reviewRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json()); // <-- fix here

app.use("/api/reviews", reviewRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(process.env.PORT || 5000, () =>
      console.log(
        `Server running on http://localhost:${process.env.PORT || 5000}`,
      ),
    ),
  )
  .catch((err) => console.error("MongoDB connection error:", err));
