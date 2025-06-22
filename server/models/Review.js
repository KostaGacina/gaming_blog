import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    title: String,
    slug: { type: String, unique: true },
    content: String,
    rating: Number,
    platform: [String],
    releaseDate: Date,
    coverImage: String,
    author: String,
  },
  { timestamps: true },
);

export default mongoose.model("Review", reviewSchema);
