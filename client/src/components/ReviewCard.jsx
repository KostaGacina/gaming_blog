import { Link } from 'react-router-dom';

export default function ReviewCard({ review }) {
    return (
        <Link to={`/reviews/${review.slug}`} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <img src={review.coverImage} className="rounded w-full h-48 object-cover mb-3" style={{ width: "300px", height: "auto", objectFit: "cover", borderRadius: "8px" }} />
            <h2 className="text-xl font-semibold">{review.title}</h2>
            <p className="text-sm text-gray-500">{review.platform.join(', ')}</p>
            <p className="mt-2 text-yellow-600 font-bold">Rating: {review.rating}/10</p>
        </Link>
    );
}