import { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";

export default function Home() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/reviews")
            .then(res => res.json())
            .then(setReviews)
    }, []);

    return (
        <div className="p-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map(r => <ReviewCard key={r.id} review={r} />)}
        </div>
        // <div>
        //     <h1>Hello World</h1>
        // </div>
    )
}

