import { useEffect, useState } from "react";
import CardSlider from "../components/CardSlider";

export default function Home() {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/reviews")
            .then(res => res.json())
            .then(data => {
                // Duplicate the reviews array for testing
                const testReviews = [...data, ...data, ...data, ...data, ...data].map((r, i) => ({
                    ...r,
                    _id: r._id ? `${r._id}-${i}` : i, // ensure unique keys
                }));
                setReviews(testReviews);
            });
    }, []);
    return <CardSlider reviews={reviews} />;
}
