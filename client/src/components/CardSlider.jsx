import { useState } from "react";
import ReviewCard from "./ReviewCard";

export default function CardSlider({ reviews }) {
    const [start, setStart] = useState(0);
    const visibleCount = 3;

    const canGoLeft = start > 0;
    const canGoRight = start + visibleCount < reviews.length;

    const handlePrev = () => {
        if (canGoLeft) setStart(start - 1);
    };

    const handleNext = () => {
        if (canGoRight) setStart(start + 1);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="relative w-full max-w-6xl">
                <div className="flex items-center justify-between mb-6">
                    <button
                        onClick={handlePrev}
                        disabled={!canGoLeft}
                        className={`px-4 py-2 rounded-lg bg-red-600 text-white font-bold transition-all duration-200 hover:bg-red-700 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center min-w-[50px]`}
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <div className="text-center">
                        <p className="text-gray-600 text-sm">
                            Showing {start + 1}-{Math.min(start + visibleCount, reviews.length)} of {reviews.length} reviews
                        </p>
                    </div>

                    <button
                        onClick={handleNext}
                        disabled={!canGoRight}
                        className={`px-4 py-2 rounded-lg bg-red-600 text-white font-bold transition-all duration-200 hover:bg-red-700 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center min-w-[50px]`}
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.slice(start, start + visibleCount).map((review) => (
                        <ReviewCard key={review._id || review.id} review={review} />
                    ))}
                </div>
            </div>
        </div>
    );
}