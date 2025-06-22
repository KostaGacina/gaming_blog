import express from "express";
import {
  getReviews,
  getReviewBySlug,
  createReview,
  updateReview,
  deleteReview,
} from "../controllers/reviewController.js";

const router = express.Router();

router.get("/", getReviews);
router.get("/:slug", getReviewBySlug);
router.post("/", createReview);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);

export default router;
