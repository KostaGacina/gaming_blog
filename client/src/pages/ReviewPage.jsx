import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ReviewPage() {
    const { slug } = useParams();
    const [review, setReview] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/reviews/${slug}`)
            .then(res => res.json())
            .then(setReview);
    }, [slug]);

    if (!review) return <div>Loading...</div>;

    return (
        <div className="prose mx-auto p-6">
            <h1>{review.title}</h1>
            <img src={review.coverImage} alt={review.title} className="mb-4" />
            <ReactMarkdown children={review.content} remarkPlugins={[remarkGfm]} />
            <p className="mt-4 text-yellow-600 font-bold">Rating: {review.rating}/10</p>
        </div>
    );
}
