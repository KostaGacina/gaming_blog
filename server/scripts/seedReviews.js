import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Review from "../models/Review.js";

// Ensure dotenv loads the correct .env file
dotenv.config();
console.log("MONGO_URI:", process.env.MONGO_URI);

async function seed() {
    await mongoose.connect(process.env.MONGO_URI);

    // Read your markdown file
    const mdPath = path.resolve("./reviews/baldurs_gate_3.md");
    const content = fs.readFileSync(mdPath, "utf-8");

    // Example metadata (customize as needed)
    const reviewData = {
        title: "My First Videogame Review",
        slug: "baldurs-gate-3", // updated slug
        content,
        coverImage: "/images/D_1280×720 pix_01.jpg", // update if you have an image
        rating: 8,
        createdAt: new Date(),
    };

    // Delete existing review with the same slug
    await Review.deleteOne({ slug: reviewData.slug });

    // Insert new review
    await Review.create(reviewData);

    console.log("Seeded baldurs_gate_3.md review!");
    await mongoose.disconnect();
}

seed();