import Review from "../models/Review.js";

export const getReviews = async (req, res) => {
  const reviews = await Review.find().sort({ createdAt: -1 });
  res.json(reviews);
};

export const getReviewBySlug = async (req, res) => {
  const review = await Review.findOne({ slug: req.params.slug });
  if (!review) return res.status(404).json({ error: "Review not found" });
  res.json(review);
};

//Auth-protected
export const createReview = async (req, res) => {
  const newReview = new Review(req.body);
  await newReview.save();
  res.status(201).json(newReview);
};

export const updateReview = async (req, res) => {
  const review = await Review.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  });
  res.json(review);
};

export const deleteReview = async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};
